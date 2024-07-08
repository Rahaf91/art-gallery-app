import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces.js";
import Spotlight from "@/components/Spotlight";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  // console.log("data", data);

  if (error) return <h1>failed to load</h1>;

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div>
      <h1>Art Pieces App of RAI!</h1>
      <Spotlight artPieces={data} />
      <ArtPieces pieces={data} />
    </div>
  );
}
