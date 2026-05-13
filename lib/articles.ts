import fs from "fs";
import path from "path";

const articlesDir = path.join(process.cwd(), "content/articles");

export type Article = {
  slug: string;
  title: string;
  summary: string;
  categorySlug: string;
  district: string;
  publishedAt: string;
};

export type ArticleWithBody = Article & { body: string };

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim();
    if (key) data[key] = value;
  }
  return { data, body: match[2].trim() };
}

function readArticleFile(filePath: string): ArticleWithBody | null {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, body } = parseFrontmatter(raw);
    if (!data.slug || !data.title) return null;
    return {
      slug: data.slug,
      title: data.title,
      summary: data.summary ?? "",
      categorySlug: data.categorySlug ?? "",
      district: data.district ?? "",
      publishedAt: data.publishedAt ?? "",
      body,
    };
  } catch {
    return null;
  }
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDir)) return [];
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readArticleFile(path.join(articlesDir, f)))
    .filter((a): a is ArticleWithBody => a !== null)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getArticleBySlug(slug: string): ArticleWithBody | null {
  return readArticleFile(path.join(articlesDir, `${slug}.md`));
}

export function getArticlesByCategorySlug(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.categorySlug === categorySlug);
}

// 하위 호환: page.tsx에서 articles를 직접 import하는 경우 대응
export const articles = getAllArticles();
