"use client";

import { ReactNode } from "react";
import Script from "next/script";

export default function BannerLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>My Next.js App</h1>
      {children}

      {/* 배너를 표시할 div */}
      <div
        id="banner"
        className="hidden" // 초기 상태는 숨김
        style={{ backgroundColor: "yellow", padding: "10px", margin: "10px 0" }}
      >
        This is a banner!
      </div>

      {/* 인라인 스크립트 추가 */}
      <Script id="show-banner" strategy="afterInteractive">
        {`
          // 3초 후에 배너 표시
          setTimeout(() => {
            document.getElementById('banner').classList.remove('hidden');
          }, 3000);
        `}
      </Script>
    </div>
  );
}
