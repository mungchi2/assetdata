/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import ArticleRenderer from "@/components/article/ArticleRenderer";
import PreviewViewport from "@/components/article/PreviewViewport";
import { getCategoryBySlug } from "@/lib/categories";
import { getDraftPreview, getDraftsDir, isPreviewEnabled } from "@/lib/preview";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Draft Preview",
  robots: { index: false, follow: false },
};

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function AdminPreviewPage() {
  if (!isPreviewEnabled()) notFound();

  const draft = getDraftPreview();
  if (!draft) {
    const dir = getDraftsDir();

    return (
      <main className="preview-page">
        <section className="preview-empty">
          <p className="page-label">Admin Preview</p>
          <h1>draft를 찾을 수 없습니다</h1>
          <p>아래 위치에 article.json, qa.json, images 폴더를 준비하거나 DRAFTS_DIR 환경변수로 경로를 지정하세요.</p>
          <code>{dir}</code>
        </section>
      </main>
    );
  }

  const category = getCategoryBySlug(draft.article.categorySlug);

  return (
    <main className="preview-page">
      <header className="preview-page__header">
        <div>
          <p className="page-label">Admin Preview</p>
          <h1>발행 전 미리보기</h1>
        </div>
        <p>{draft.dir}</p>
      </header>

      <PreviewViewport>
        <ArticleRenderer
          article={draft.article}
          categoryName={category?.name || draft.article.categorySlug}
          relatedArticles={[]}
          backHref=""
        />
      </PreviewViewport>

      <section className="preview-inspector" aria-label="Draft QA and images">
        <div>
          <h2>QA 상태</h2>
          <pre>{draft.qa ? JSON.stringify(draft.qa, null, 2) : "qa.json 없음"}</pre>
        </div>

        <div>
          <h2>Images</h2>
          {draft.images.length > 0 ? (
            <ul className="preview-image-list">
              {draft.images.map((image) => (
                <li key={image.path}>
                  <img src={image.src} alt={image.name} />
                  <div>
                    <strong>{image.name}</strong>
                    <span>
                      {image.path} · {formatBytes(image.bytes)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>images 폴더에 파일이 없습니다.</p>
          )}
        </div>
      </section>
    </main>
  );
}
