import fs from "fs";
import path from "path";
import { getDraftImagePath, isPreviewEnabled } from "@/lib/preview";

export const dynamic = "force-dynamic";

const contentTypes: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

export async function GET(_request: Request, { params }: { params: Promise<{ path: string[] }> }) {
  if (!isPreviewEnabled()) return new Response("Not found", { status: 404 });

  const { path: parts } = await params;
  const filePath = getDraftImagePath(parts);
  if (!filePath || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    return new Response("Not found", { status: 404 });
  }

  const body = fs.readFileSync(filePath);
  const contentType = contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";

  return new Response(body, {
    headers: {
      "content-type": contentType,
      "cache-control": "no-store",
    },
  });
}
