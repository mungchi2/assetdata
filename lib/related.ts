import fs from "fs";
import path from "path";
import { safeDecodeSlug } from "@/lib/articles";

const relatedDir = path.join(process.cwd(), "content/related");

export function getRelatedSlugs(slug: string): string[] {
  const filePath = path.join(relatedDir, `${safeDecodeSlug(slug)}.json`);
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as string[];
  } catch {
    return [];
  }
}
