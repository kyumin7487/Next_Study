import Image from "next/image";

export default function MyRemoteImage() {
  return (
    <div>
      <h1>원격 이미지 불러오기</h1>
      <Image
        src="https://picsum.photos/400/300"
        alt="Description of the image"
        width={400}
        height={300}
        style={{ objectFit: "cover" }}
        // layout="responsive"
      />
    </div>
  );
}
