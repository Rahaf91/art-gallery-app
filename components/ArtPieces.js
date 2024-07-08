import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const StyledListItem = styled.li`
  list-style: none;
`;

export default function ArtPieces({ pieces }) {
  return (
    <div>
      <h2> All art pieces</h2>
      <ul>
        {pieces.map((piece) => {
          return (
            <StyledListItem key={piece.slug}>
              <ArtPiecePreview piece={piece} />
            </StyledListItem>
          );
        })}
      </ul>
    </div>
  );
}
