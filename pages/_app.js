import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  ///////////////////////////////////////

  function addComment(slug, newComment) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-US", {
      hour12: false,
    });

    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);

    const commentWithDate = { text: newComment, date: formattedDate };

    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          if (pieceInfo.slug === slug) {
            return pieceInfo.comments
              ? {
                  ...pieceInfo,
                  comments: [...pieceInfo.comments, commentWithDate],
                }
              : { ...pieceInfo, comments: [commentWithDate] };
          } else {
            return pieceInfo;
          }
        })
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [commentWithDate] },
      ]);
    }
  }
  ///////////////////////////////////////

  ////////////////////////////////////////

  if (error) return <h1>Failed to load</h1>;
  if (!artPieces) return <h1>Loading...</h1>;

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        onToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        onAddComment={addComment}
      />
    </Layout>
  );
}
