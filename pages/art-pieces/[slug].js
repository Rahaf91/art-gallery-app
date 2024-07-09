import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
export default function ArtPieceDetailsPage({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const painitngs = artPieces.find((artpiece) => artpiece.slug === slug);

  return (
    <ArtPieceDetails
      image={painitngs.imageSource}
      title={painitngs.name}
      artist={painitngs.artist}
      year={painitngs.year}
      genre={painitngs.genre}
    />
  );
}
