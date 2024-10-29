import { NextResponse } from "next/server";

// 예시 제품 데이터
const products = [
  { id: 1, name: "제품 A" },
  { id: 2, name: "제품 B" },
  { id: 3, name: "제품 C" },
];

export async function GET() {
  return NextResponse.json(products);
}
