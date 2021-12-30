import styled from "styled-components";
import { Link } from 'react-router-dom';

import cartIcon from '../assets/cart.svg';

const Header = styled.header`
  height: var(--nav-height);
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #ffffff;

  .container {
    height: inherit;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 1rem 0;
  }

  h1 {
    color: #408499;
  }

  & nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & nav img {
    margin-left: 2rem;
  }
`;

const StyledLink = styled(Link)`
  color: var(--text-color);
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: .75;
  }
`;

const StyledNavLink = styled(Link)`
  color: var(--text-color);
  transition: all 300ms ease-in-out;
  padding: .5rem 1rem;

  &:hover {
    background-color: #408499;
    border-radius: 100px;
    color: #FFFFFF;
  }
`;

const Navbar = () => {
  return(
    <Header>
      <div className="container">
        <StyledLink to="/"><h1>Almohadonia</h1></StyledLink>
        <nav>
          <StyledNavLink to="/">Productos</StyledNavLink>
          <StyledNavLink to="/">Cuenta</StyledNavLink>
          <StyledNavLink to="/">Favoritos</StyledNavLink>
          <StyledNavLink to="/">Acerca</StyledNavLink>
          <StyledLink to="/carrito"><img src={cartIcon} alt="Carrito" /></StyledLink>
        </nav>
      </div>
    </Header>
  );
}

export default Navbar;