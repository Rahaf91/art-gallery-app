import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const artPieces = data.find((artpiece) => artpiece.slug === slug);

  return (
    <ArtPieceDetails
      image={artPieces.imageSource}
      title={artPieces.name}
      artist={artPieces.artist}
      year={artPieces.year}
      genre={artPieces.genre}
      onClickBack={() => {
        router.push("/art-pieces");
      }}
    />
  );
}
