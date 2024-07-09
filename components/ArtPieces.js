import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const StyledListItem = styled.li`
  list-style: none;
`;

export default function ArtPieces({ artPieces }) {
  return (
    <>
      <h2> All art pieces</h2>
      <ul>
        {artPieces.map((artPiece) => {
          return (
            <StyledListItem key={artPiece.slug}>
              <ArtPiecePreview artPiece={artPiece} />
            </StyledListItem>
          );
        })}
      </ul>
    </>
  );
}
