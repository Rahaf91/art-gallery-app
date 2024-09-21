import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import CommentForm from "@/components/CommentForm.js";
import Comments from "@/components/Comments.js";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 10px auto;
  border-radius: 50px;
  background-color: #adf0d1;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 30px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const ColorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  margin: 5px;
`;

const InfoText = styled.p`
  margin: 5px 0;
`;

const StyledLink = styled(Link)`
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background-color: darkcyan;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  colors,
  isFavorite,
  onToggleFavorite,
  comments,
  onAddComment,
}) {
  return (
    <PageWrapper>
      <ImageWrapper>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledImage
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
        />
      </ImageWrapper>
      <h3>{artist}</h3>
      <InfoText>{year}</InfoText>
      <InfoText>{genre}</InfoText>
      <ColorsWrapper>
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </ColorsWrapper>
      <StyledLink href="/art-pieces">Go back</StyledLink>
      {comments && <Comments comments={comments} />}
      <CommentForm addComment={onAddComment} />
    </PageWrapper>
  );
}
