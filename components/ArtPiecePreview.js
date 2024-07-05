import Image from "next/image";
import Link from "next/link";
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

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid black;
`;

export default function ArtPiecePreview({ piece }) {
  const { imageSource, title, artist, slug } = piece;

  return (
    <StyledLink href={slug}>
      <ImageWrapper>
        <StyledImage
          src={imageSource}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
        />
      </ImageWrapper>
      <h3>Title: {title}</h3>
      <p>Artist: {artist}</p>
    </StyledLink>
  );
}
