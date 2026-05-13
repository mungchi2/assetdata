import fs from "fs";
import path from "path";

const relatedDir = path.join(process.cwd(), "content/related");

export function getRelatedSlugs(slug: string): string[] {
  const filePath = path.join(relatedDir, `${slug}.json`);
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as string[];
  } catch {
    return [];
  }
}
