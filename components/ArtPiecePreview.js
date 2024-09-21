import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 30px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

export default function ArtPiecePreview({
  artPiece,
  onToggleFavorite,
  isFavorite,
}) {
  const { imageSource, name, artist, slug } = artPiece;

  return (
    <div>
      <ImageWrapper>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <Link href={`/art-pieces/${slug}`}>
          <StyledImage
            src={imageSource}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
          />
        </Link>
      </ImageWrapper>

      <p>
        <strong>Title:</strong> {name}
      </p>
      <p>
        <strong>Artist:</strong> {artist}
      </p>
    </div>
  );
}
