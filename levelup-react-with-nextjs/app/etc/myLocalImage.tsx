import Image from "next/image";
import localImage from "../../public/images/1.png";

export default function MyLocalImage() {
  return (
    <div>
      <h1>로컬 저장 이미지 불러오기</h1>
      <Image
        src={localImage} // src={"/images/1.png"} public 폴더 하위에 있는 이미지 경로
        alt="Description of the image"
        width={400} // 가로 너비
        height={300} // 세로 높이
      />
    </div>
  );
}
