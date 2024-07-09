import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 500px;
  height: 700px;
`;

export default function Spotlight({ artPieces }) {
  const randomPiece = Math.floor(Math.random() * artPieces.length);
  const { imageSource, artist } = artPieces[randomPiece];

  return (
    <Container>
      <h1>ART GALLERY OF RAI</h1>
      <ImageWrapper>
        {" "}
        <Image
          src={imageSource}
          alt={artist}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
        />
      </ImageWrapper>

      <p>Artist: {artist}</p>
    </Container>
  );
}
