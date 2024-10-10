import { TabGroup } from "@/ui/tab-group";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = { title: "레벨업 Next.js: 스타일링" };
const items = [
  { text: "Global CSS", slug: "global-css" },
  { text: "CSS Modules", slug: "css-modules" },
  { text: "Styled Components", slug: "styled-components" },
  { text: "Styled JSX", slug: "styled-jsx" },
  { text: "Tailwind Css", slug: "tailwind" },
  { text: "Sass", slug: "sass-test" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <TabGroup path="/styling" items={[{ text: "Home" }, ...items]} />
      <div>{children}</div>
    </div>
  );
}
