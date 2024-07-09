import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const styledImage = styled(Image)`
  background-color: ${(props) => (props.color === "liked" ? "red" : "grey")};
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Link>
      <styledImage
        src="/public/assets/favicon.svg"
        alt="heart"
        width={24}
        height={24}
        $color="liked"
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </Link>
  );
}
