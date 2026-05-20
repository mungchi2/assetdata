"use client";

import { useState } from "react";

type PreviewViewportProps = {
  children: React.ReactNode;
};

const modes = {
  desktop: { label: "Desktop", width: "1160px" },
  mobile: { label: "Mobile", width: "390px" },
};

export default function PreviewViewport({ children }: PreviewViewportProps) {
  const [mode, setMode] = useState<keyof typeof modes>("desktop");

  return (
    <section className="preview-workbench">
      <div className="preview-toolbar" aria-label="미리보기 폭 선택">
        {Object.entries(modes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            className={mode === key ? "is-active" : ""}
            onClick={() => setMode(key as keyof typeof modes)}
            aria-pressed={mode === key}
          >
            {value.label}
          </button>
        ))}
      </div>

      <div className="preview-canvas">
        <div className={`preview-device preview-device--${mode}`} style={{ maxWidth: modes[mode].width }}>
          {children}
        </div>
      </div>
    </section>
  );
}
