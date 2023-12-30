import Image from "next/image";



export default function ImageItem({ src, alt }) {
    const images = [
        { src: "\Images\image1.webp", alt: "Alt text for Image 1" },
        { src: "\Images\image2.webp", alt: "Alt text for Image 2" },
        { src: "\Images\image3.webp", alt: "Alt text for Image 10" },
      ];
  return (
    <div className="image-item">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
  }
