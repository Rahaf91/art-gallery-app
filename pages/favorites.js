import ArtPieces from "@/components/ArtPieces.js";
import styled from "styled-components";

const Message = styled.p`
  text-align: center;
`;

const Heading = styled.h2`
  text-align: center;
`;

export default function FavoritesPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favorites = artPieces.filter((artpiece) =>
    artPiecesInfo.find(
      (artPieceinfo) =>
        artPieceinfo.slug === artpiece.slug && artPieceinfo.isFavorite
    )
  );

  return (
    <>
      <Heading>Favorite Art Pieces</Heading>
      {favorites.length === 0 && (
        <Message>Please Add your Favorite Art Piece</Message>
      )}
      <ArtPieces
        artPieces={favorites}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
