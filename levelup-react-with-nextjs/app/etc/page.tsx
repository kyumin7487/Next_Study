import MyLocalImage from "./myLocalImage";
import MyRemoteImage from "./myRemoteImage";
import Layout from "./layout";
import BannerLayout from "./bannerLayout";

export default function Home() {
  return (
    <div className="prose-sm prose max-w-none ">
      <BannerLayout>
        <h2>인라인 스크립트 예제</h2>
      </BannerLayout>

      <h1 className="text-xl font-bold">Image test 최적화 기법 테스트</h1>
      {/* <MyLocalImage />
      <MyRemoteImage /> */}
      <h1 className="font-sans">Hello World</h1>
      <Layout>
        <h2>외부 스크립트 예제</h2>
      </Layout>
    </div>
  );
}
