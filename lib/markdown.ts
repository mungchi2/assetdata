function parseImageTitleSize(title: string | undefined): { width: number; height: number } | null {
  const match = String(title ?? "").trim().match(/^(\d+)\s*[xX×]\s*(\d+)$/);
  if (!match) return null;
  return {
    width: Number(match[1]),
    height: Number(match[2]),
  };
}

export function markdownToHtml(md: string): string {
  // 상단 메타(작성자/데이터 검수/발행일/기준일) 연속 blockquote를
  // compact한 byline 한 블록으로 묶는다. 일반 인용구는 그대로 둔다.
  md = md.replace(/(?:^>[^\n]*\n?)+/gm, (block) => {
    const lines = block
      .trim()
      .split("\n")
      .map((line) => line.replace(/^>\s?/, "").trim())
      .filter(Boolean);
    if (lines.length >= 2 && /작성자|데이터 검수|발행|업데이트|기준일/.test(lines[0])) {
      const spans = lines.map((line) => `<span>${line}</span>`).join("");
      return `<div class="article-byline">${spans}</div>\n`;
    }
    return block;
  });

  // Tables: convert | ... | rows into <table>
  const tablePattern = /(?:^[^\S\n]*\|.+\|\s*\n)+/gm;
  md = md.replace(tablePattern, (block) => {
    const rows = block.trim().split("\n").map((r) => r.trim());
    const cells = (row: string) =>
      row
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim());

    let html = "<table>";
    let inBody = false;

    for (const row of rows) {
      if (/^\|[\s\-|:]+\|$/.test(row)) {
        html += "</thead><tbody>";
        inBody = true;
        continue;
      }
      const tag = inBody ? "td" : "th";
      if (!inBody && !html.includes("<thead>")) html += "<thead>";
      html += `<tr>${cells(row).map((c) => `<${tag}>${c}</${tag}>`).join("")}</tr>`;
    }

    if (!inBody) html += "</thead>";
    html += "</tbody></table>";
    return html;
  });

  let imageIndex = 0;
  let html = md
    // images
    .replace(/!\[([^\]]*)]\((<[^>]+>|[^)\s]+)(?:\s+"([^"]*)")?\)/g, (_match, alt: string, target: string, title?: string) => {
      const src = String(target).replace(/^<|>$/g, "");
      const attrs = [`src="${src}"`, `alt="${alt}"`];
      const size = parseImageTitleSize(title);
      if (size) {
        attrs.push(`width="${size.width}"`, `height="${size.height}"`);
      }
      if (imageIndex === 0) {
        attrs.push(`loading="eager"`);
      } else {
        attrs.push(`loading="lazy"`, `decoding="async"`);
      }
      imageIndex += 1;
      return `<img ${attrs.join(" ")}>`;
    })
    // headings
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // bold + italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // horizontal rule
    .replace(/^---$/gm, "<hr>")
    // unordered list items
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    // wrap consecutive <li> in <ul>
    .replace(/(<li>[\s\S]*?<\/li>)(\n<li>[\s\S]*?<\/li>)*/g, (match) => `<ul>${match}</ul>`)
    // blockquote
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

  // bare URL(http/https)을 클릭 가능한 링크로 변환한다.
  // 속성값(src="...", href="...")이나 마크다운 링크/이미지 내부 URL은 제외한다.
  html = html.replace(
    /(?<!["'(=>])(https?:\/\/[^\s<>")\]]+)/g,
    (url) => `<a href="${url}" rel="noopener noreferrer" target="_blank">${url}</a>`,
  );

  // paragraphs: blank-line-separated blocks not already wrapped in a block tag
  const blockTags = /^<(h[1-6]|ul|ol|li|blockquote|hr|pre|table|img|div|section)/;
  html = html
    .split(/\n{2,}/)
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      if (blockTags.test(block)) return block;
      return `<p>${block.replace(/\n/g, "<br>")}</p>`;
    })
    .join("\n");

  return html;
}
