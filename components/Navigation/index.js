import Link from "next/link";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavMenu>
      <Link href="/about">Om Klubben</Link>
      <Link href="/join">Bli Medlem</Link>
      <Link href="/contact">Spons og kontakt</Link>
      <Link href="/shop">Shop</Link>
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
