import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <ArtPieces
        artPieces={artPieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
