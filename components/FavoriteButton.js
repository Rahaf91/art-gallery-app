import Image from "next/image.js";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: ${({ $isFavorite }) => ($isFavorite ? "#73F0BC" : "white")};
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 0.2rem 0 0;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button
      type="button"
      onClick={onToggleFavorite}
      $isFavorite={isFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/favicon.svg" width={40} height={40} alt="" />
    </Button>
  );
}
