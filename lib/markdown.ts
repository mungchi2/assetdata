export function markdownToHtml(md: string): string {
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

  let html = md
    // images
    .replace(/!\[([^\]]*)]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, '<img src="$2" alt="$1">')
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

  // paragraphs: blank-line-separated blocks not already wrapped in a block tag
  const blockTags = /^<(h[1-6]|ul|ol|li|blockquote|hr|pre|table|img)/;
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
