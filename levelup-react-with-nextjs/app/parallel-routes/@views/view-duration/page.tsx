import { Boundary } from "@/ui/boundary";

export default function Page() {
  return (
    <Boundary labels={["@views/view-duration/page.tsx"]} size="small">
      <div className="prose-sm prose max-w-none ">
        <h2 className="text-lg font-bold">시청 시간</h2>
      </div>
    </Boundary>
  );
}
