import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function Spotlight({ artPieces }) {
  const randomPiece = Math.floor(Math.random() * artPieces.length);
  const { imageSource, artist } = artPieces[randomPiece];

  return (
    <Container>
      <h1>ART GALLERY OF RAI</h1>
      <Image src={imageSource} alt={artist} width={300} height={200} />
      <p>Artist: {artist}</p>
    </Container>
  );
}
