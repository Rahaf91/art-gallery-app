import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 50px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 700px;
  margin-top: 10px;
  box-shadow: 10px 6px 5px black;
`;
const MainHeading = styled.h1`
  text-align: center;
`;

export default function Spotlight({ artPieces }) {
  const randomPiece = Math.floor(Math.random() * artPieces.length);
  const { imageSource, artist, name } = artPieces[randomPiece];

  return (
    <>
      <MainHeading>ART GALLERY</MainHeading>
      <Container>
        <p>Title: {name}</p>
        <ImageWrapper>
          <Image src={imageSource} alt={artist} fill />
        </ImageWrapper>

        <p>Artist: {artist}</p>
      </Container>
    </>
  );
}
