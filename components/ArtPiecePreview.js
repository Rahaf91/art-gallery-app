import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

export default function ArtPiecePreview({ artPiece }) {
  const { imageSource, name, artist, slug } = artPiece;

  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
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
