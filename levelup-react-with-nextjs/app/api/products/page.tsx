import useSWR from "swr";
import { fetcher } from "./utils/fetcher"; // fetcher 함수 임포트

interface Product {
  id: number; // 또는 string, 실제 id 타입에 따라 수정
  name: string;
}

function ProductList() {
  const { data, error } = useSWR("/api/products", fetcher); // SWR을 사용하여 데이터 가져오기

  if (error) return <div>데이터 로딩 실패</div>; // 에러 처리
  if (!data) return <div>로딩 중...</div>; // 로딩 중 표시

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.name}</li> // 제품 목록 출력
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <div>
      <h1>제품 목록</h1>
      <ProductList /> {/* // 제품 목록 컴포넌트 호출 */}
    </div>
  );
}
