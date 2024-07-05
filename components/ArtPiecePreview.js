import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <Image src={imageSource} alt={title} />
      <h1>{title}</h1>
      <p>{artist}</p>
    </div>
  );
}
