"use client";

import { ReactNode } from "react";
import Script from "next/script";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>My Next.js App</h1>
      {children}

      {/* 간단한 외부 스크립트 추가 (예: jQuery CDN) */}
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="afterInteractive" // 페이지가 인터랙티브할 때 로드
        onLoad={() => {
          console.log("jQuery has been loaded successfully!");
        }}
        id="example-script"
        nonce="XUENAJFW"
        data-test="script"
      />
    </div>
  );
}
