import Image from "next/image";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  height: 300px;
`;
export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onClickBack,
}) {
  return (
    <>
      <ImageWrapper>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
        />
      </ImageWrapper>
      <h3>{artist}</h3>
      <p>{year}</p>
      <p>{genre}</p>

      <button onClick={onClickBack}>Go back</button>
    </>
  );
}
