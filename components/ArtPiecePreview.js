import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 200px;
  height: 200px;
`;

export default function ArtPiecePreview({ piece }) {
  const { imageSource, name, artist } = piece;

  return (
    <>
      <ImageWrapper>
        <StyledImage
          src={imageSource}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
        />
      </ImageWrapper>
      <h3>Title: {name}</h3>
      <p>Artist: {artist}</p>
    </>
  );
}
