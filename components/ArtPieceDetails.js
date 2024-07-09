import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;
export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <ImageWrapper>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
        />
      </ImageWrapper>
      <h3>{artist}</h3>
      <p>{year}</p>
      <p>{genre}</p>

      <Link href="/art-pieces">Go back</Link>
    </>
  );
}
