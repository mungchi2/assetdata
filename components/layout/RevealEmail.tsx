"use client";

import { useState } from "react";

export default function RevealEmail({ email }: { email: string }) {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return (
      <a href={`mailto:${email}`}>{email}</a>
    );
  }

  return (
    <button
      onClick={() => setRevealed(true)}
      style={{
        background: "none",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        padding: "4px 12px",
        fontSize: "14px",
        color: "var(--accent)",
        cursor: "pointer",
        fontFamily: "inherit",
      }}
    >
      이메일 주소 확인하기
    </button>
  );
}
