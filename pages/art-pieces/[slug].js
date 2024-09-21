import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
export default function ArtPieceDetailsPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
  onAddComment,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const painitngs = artPieces.find((artpiece) => artpiece.slug === slug);
  ////////////////////////////////////////
  const painitngsComments = artPiecesInfo.find(
    (piece) => piece.slug === painitngs.slug
  )?.comments;
  /////////////////////////////////////////
  if (!painitngs) {
    return null;
  }

  return (
    <ArtPieceDetails
      image={painitngs.imageSource}
      title={painitngs.name}
      artist={painitngs.artist}
      year={painitngs.year}
      genre={painitngs.genre}
      isFavorite={
        artPiecesInfo.find((piece) => piece.slug === painitngs.slug)?.isFavorite
      }
      onToggleFavorite={() => onToggleFavorite(painitngs.slug)}
      colors={painitngs.colors}
      //////////(///////////////////////////////)
      comments={painitngsComments}
      onAddComment={(newComment) => onAddComment(painitngs.slug, newComment)}
      /////////////////////////////////////////////
    />
  );
}
