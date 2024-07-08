import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const StyledList = styled.li`
  list-style: none;
`;

export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1> All art pieces:</h1>
      <ul>
        {pieces.map((piece) => {
          return (
            <StyledList key={piece.slug}>
              <ArtPiecePreview piece={piece} />
            </StyledList>
          );
        })}
      </ul>
    </>
  );
}
