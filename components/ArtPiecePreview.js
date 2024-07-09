import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  height: 300px;
`;

export default function ArtPiecePreview({ piece }) {
  const { imageSource, name, artist, slug } = piece;

  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <ImageWrapper>
          <StyledImage
            src={imageSource}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
          />
        </ImageWrapper>
      </Link>
      <p>
        <strong>Title:</strong> {name}
      </p>
      <p>
        <strong>Artist:</strong> {artist}
      </p>
    </>
  );
}
