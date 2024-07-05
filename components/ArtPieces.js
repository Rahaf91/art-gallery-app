import Link from "next/link";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPiece({ pieces }) {
  return (
    <>
      <h1> All art pieces:</h1>
      <div>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            artist={piece.artist}
          />
        ))}
      </div>
    </>
  );
}
