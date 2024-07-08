import ArtPiecePreview from "@/components/ArtPiecePreview";
import ArtPiece from "@/components/ArtPieces.js";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  console.log("data", data);

  if (error) return <h1>failed to load</h1>;

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div>
      <h1>Art Pieces App of RAI!</h1>
      <ArtPiece pieces={data} />
    </div>
  );
}
