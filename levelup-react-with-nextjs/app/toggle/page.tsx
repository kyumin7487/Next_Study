import Counter from "./toggle"; // Counter 컴포넌트 경로에 맞게 수정

export default function HomePage() {
  return (
    <div>
      <h1>하이브리드 앱 예제</h1>
      <Counter /> {/* Counter 컴포넌트 호출 */}
    </div>
  );
}
