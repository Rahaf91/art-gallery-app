import Image from "next/image";

export default function Spotlight({ artPieces }) {
  const randomPiece = Math.floor(Math.random() * artPieces.length);
  const { imageSource, artist } = artPieces[randomPiece];

  return (
    <>
      <h1> ART GALLERY OF RAI</h1>
      <Image src={imageSource} alt={artist} width={300} height={200}></Image>
      <p>Artist: {artist}</p>
    </>
  );
}
