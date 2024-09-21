import styled from "styled-components";
import Link from "next/link";
const StyledNavigation = styled.nav`
  background-color: grey;
  padding: 10px;
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: darkcyan;
  }
`;
export default function Navigation() {
  return (
    <>
      <StyledNavigation>
        <StyledList>
          <li>
            <StyledLink href="/">Spotlight</StyledLink>
          </li>

          <li>
            <StyledLink href="/art-pieces">Art Pieces</StyledLink>
          </li>
          <li>
            <StyledLink href="/favorites">Favorites</StyledLink>
          </li>
        </StyledList>
      </StyledNavigation>
    </>
  );
}
