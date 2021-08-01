import Link from "next/link";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavMenu>
      <Link href="#">Om Klubben</Link>
      <Link href="#">Bli Medlem</Link>
      <Link href="#">Spons og kontakt</Link>
      <Link href="#">Shop</Link>
    </NavMenu>
  );
};

const NavMenu = styled.nav`
  font-size: 2rem;
  display: flex;
  gap: 3rem;
  justify-content: flex-end;
  padding: 2rem 5rem;
  font-weight: bold;

  a {
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default Navigation;
