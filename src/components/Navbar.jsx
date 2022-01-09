import styled from "styled-components";
import { Link } from 'react-router-dom';
import CartBtn from './CartBtn';

const Header = styled.header`
  height: var(--nav-height);
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.2);
  z-index: 999;

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
    color: var(--first-color);
    transition: all 300ms ease-in-out;
    margin: 0;
  }

  h1:hover {
    opacity: .75;
  }

  & nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const StyledNavLink = styled(Link)`
  color: var(--text-color);
  transition: all 300ms ease-in-out;
  padding: .5rem 1rem;

  &:hover {
    background-color: var(--first-color);
    border-radius: 100px;
    color: #FFFFFF;
  }
`;

const Navbar = ({ totalItems }) => {
  return(
    <Header>
      <div className="container">
        <Link to="/"><h1>Almohadonia</h1></Link>
        <nav>
          <StyledNavLink to="/">Productos</StyledNavLink>
          <StyledNavLink to="/">Cuenta</StyledNavLink>
          <StyledNavLink to="/">Favoritos</StyledNavLink>
          <StyledNavLink to="/">Acerca</StyledNavLink>
        </nav>
        <Link to="/carrito"><CartBtn totalItems={totalItems} /></Link>
      </div>
    </Header>
  );
}

export default Navbar;