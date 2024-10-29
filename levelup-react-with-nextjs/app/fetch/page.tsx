// fetch/page.tsx
"use client"; // 클라이언트 컴포넌트로 지정

import { useEffect, useState } from "react";

// User의 타입 정의
interface User {
  name: string;
  age: number;
}

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null); // User 또는 null 타입

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch("/api/user");
      const userData: User = await response.json(); // User 타입으로 데이터 변환
      setUser(userData); // 상태 업데이트
    }
    fetchUserData();
  }, []);

  return (
    <div>{user ? <p>안녕하세요, {user.name}님</p> : <p>로딩 중...</p>}</div>
  );
}

// // 서드파티 라이브러리를 통한 서버에서 데이터 가져오기
// import { cache } from "react";
// const fetchItem = cache(async (id) => {
//   const item = await someDatabaseOrAPI.getItem(id);
//   return item;
// });

// export default async function Page({ params }) {
//   const item = await fetchItem(params.id);
//   return <div>아이템: {JSON.stringify(item)}</div>;
// }

// Next.js의 향상된 fetch
// 페이지 컴포넌트
// export default async function Page() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 60 }, // 60초마다 데이터를 재검증
//   });

//   // JSON 변환
//   const data = await response.json(); // 명시적으로 JSON 변환

//   return (
//     <div>
//       {data.map((post) => (
//         <div key={post.id}>{post.title}</div>
//       ))}
//     </div>
//   );
// }

//  아래는 일반 fetch
// // 데이터 가져오기 함수
// async function fetchData(url: string) {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error("데이터 로드 실패");
//   }
//   return response.json();
// }

// // 페이지 컴포넌트
// export default async function Page() {
//   const data = await fetchData("https://jsonplaceholder.typicode.com/posts");

//   // React 컴포넌트를 반환해야 합니다.
//   return <div>데이터: {JSON.stringify(data)}</div>;
// }
