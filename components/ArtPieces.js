import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const GridWrapper = styled.ul`
  background-color: red;
  background-color: #adf0d1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  border-radius: 10px;
  max-width: 1200px;
  margin: 10px auto;
  list-style: none;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
`;

export default function ArtPieces({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <GridWrapper>
      {artPieces.map((artPiece) => (
        <StyledListItem key={artPiece.slug}>
          <ArtPiecePreview
            slug={artPiece.slug}
            artPiece={artPiece}
            isFavorite={
              artPiecesInfo?.find(
                (artPieceInfo) => artPieceInfo.slug === artPiece.slug
              )?.isFavorite
            }
            onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
          />
        </StyledListItem>
      ))}
    </GridWrapper>
  );
}
