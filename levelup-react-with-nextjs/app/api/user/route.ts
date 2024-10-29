// app/api/user/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  // API로 반환할 사용자 데이터
  const user = { name: "홍길동", age: 30 }; // 예시 사용자 데이터
  return NextResponse.json(user);
}
