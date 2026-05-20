import fs from "fs";
import path from "path";
import type { ArticleWithBody } from "@/lib/articles";

type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };

export type DraftImage = {
  name: string;
  path: string;
  bytes: number;
  src: string;
};

export type DraftPreview = {
  article: ArticleWithBody;
  qa: JsonValue | null;
  images: DraftImage[];
  dir: string;
};

export function isPreviewEnabled() {
  return process.env.NODE_ENV !== "production" || process.env.ADMIN_PREVIEW_ENABLED === "true";
}

export function getDraftsDir() {
  return process.env.DRAFTS_DIR || path.join(process.cwd(), "shared", "drafts");
}

function readJsonFile(filePath: string): JsonValue | null {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as JsonValue;
  } catch {
    return null;
  }
}

function getString(source: Record<string, unknown>, keys: string[], fallback = "") {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "string") return value;
  }
  return fallback;
}

function getBody(source: Record<string, unknown>) {
  const direct = getString(source, ["body", "content", "markdown", "md", "articleBody"]);
  if (direct) return rewriteDraftImagePaths(direct);

  const sections = source.sections;
  if (Array.isArray(sections)) {
    return rewriteDraftImagePaths(
      sections
        .map((section) => {
          if (typeof section === "string") return section;
          if (section && typeof section === "object") {
            return getString(section as Record<string, unknown>, ["body", "content", "text", "markdown"]);
          }
          return "";
        })
        .filter(Boolean)
        .join("\n\n"),
    );
  }

  return "";
}

function unwrapArticleJson(value: JsonValue | null): Record<string, unknown> | null {
  if (!value || Array.isArray(value) || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  const nested = record.article;
  if (nested && !Array.isArray(nested) && typeof nested === "object") {
    return nested as Record<string, unknown>;
  }
  return record;
}

function rewriteDraftImagePaths(markdown: string) {
  return markdown.replace(/(!\[[^\]]*]\()(?!(?:https?:)?\/\/|\/)(images\/[^)\s]+)(\))/g, "$1/admin/preview/image/$2$3");
}

function normalizeArticle(value: JsonValue | null): ArticleWithBody | null {
  const source = unwrapArticleJson(value);
  if (!source) return null;
  const title = getString(source, ["title", "headline", "name"]);
  if (!title) return null;

  return {
    slug: getString(source, ["slug"], "draft-preview"),
    title,
    summary: getString(source, ["summary", "description", "excerpt", "lead"]),
    categorySlug: getString(source, ["categorySlug", "category", "category_slug"]),
    district: getString(source, ["district", "region", "area"]),
    publishedAt: getString(source, ["publishedAt", "published_at", "date"]),
    body: getBody(source),
  };
}

export function getDraftImagePath(parts: string[]) {
  const imagesDir = path.join(getDraftsDir(), "images");
  const imageParts = parts[0] === "images" ? parts.slice(1) : parts;
  const requested = path.normalize(path.join(imagesDir, ...imageParts));
  if (!requested.startsWith(imagesDir + path.sep)) return null;
  return requested;
}

export function getDraftPreview(): DraftPreview | null {
  const dir = getDraftsDir();
  const article = normalizeArticle(readJsonFile(path.join(dir, "article.json")));
  if (!article) return null;

  const imagesDir = path.join(dir, "images");
  const images = fs.existsSync(imagesDir)
    ? fs
        .readdirSync(imagesDir, { withFileTypes: true })
        .filter((entry) => entry.isFile())
        .map((entry) => {
          const filePath = path.join(imagesDir, entry.name);
          const stat = fs.statSync(filePath);
          return {
            name: entry.name,
            path: path.relative(dir, filePath),
            bytes: stat.size,
            src: `/admin/preview/image/images/${encodeURIComponent(entry.name)}`,
          };
        })
    : [];

  return {
    article,
    qa: readJsonFile(path.join(dir, "qa.json")),
    images,
    dir,
  };
}
