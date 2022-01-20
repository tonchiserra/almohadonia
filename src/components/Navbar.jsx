import styled from "styled-components";
import { Link } from 'react-router-dom';

import CartBtn from './CartBtn';
import SearchInput from './SearchInput';

import BarsIcon from '../assets/bars.svg';
import CrossIcon from '../assets/cross.svg';

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  height: var(--nav-height);
  width: 100vw;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c4c4c4;
  background-color: #fff;
  z-index: 995;

  & .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 1rem;
    margin: 0 auto;
    height: 4rem;
  }

  & .menu-btn {
    transition: all 300ms ease-in-out;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0;
    margin: 0;
    background-color: transparent;
  }

  & .menu-btn:hover {
    background-color: #e6e6e6;
  }

  & .menu-btn > img {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    padding: 0;
  }

  a h1 {
    color: var(--first-color);
    margin: 0;
    transition: all 300ms ease-in-out;
  }

  a h1:hover {
    opacity: .75;
  }

  @media screen and (min-width: 1200px){
    & .container {
      padding: 0;
    }

    & .menu-btn {
      display: none;
    }
  }

`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 0 0 1rem 0;
  transform: translateX(-100vw);
  transition: all 300ms ease-in-out;

  & > nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
  }

  & > nav > a {
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    background-color: #fff;
    color: #222;
    transition: all 300ms ease-in-out;
  }

  & > nav > a:hover {
    background-color: #e6e6e6;
  }

  @media screen and (min-width: 1200px){
    & {
      position: unset;
      width: 100%;
      max-width: 1200px;
      height: 1.5rem;
      display: unset;
      gap: unset;
      padding: 0;
      margin: 0 auto;
      transform: unset;
    }

    & > .container {
      display: none;
    }

    & > nav {
      flex-direction: row;
      align-items: center;
      width: unset;
      gap: 1rem;
    }

    & > nav > a {
      padding: 0;
      width: unset;
      text-align: unset;
      background-color: unset;
      font-size: 14px;
      font-weight: normal;
    }

    & > nav > a:hover {
      background-color: unset;
      opacity: .75;
    }
  }
`;

const Navbar = ({ totalItems }) => {

  const handleMenu = (n) => {
    let $menu = document.getElementById("menu");
    $menu.style.transform = `translate(${n})`
  }

  return(
    <Header>
      <div className="container">
        <button className="menu-btn" onClick={() => handleMenu('0')}><img src={BarsIcon} alt="Menu" /></button>
        <Link to="/"><h1>Almohadonia</h1></Link>
        <Link to="/carrito"><CartBtn totalItems={totalItems} /></Link>
      </div>

      <Menu id="menu">
        <div className="container">
          <SearchInput />
          <button className="menu-btn" onClick={() => handleMenu('-100vw')}><img src={CrossIcon} alt="Menu" /></button>
        </div>
        <nav>
          <Link to="/">Productos</Link>
          <Link to="/">Cuenta</Link>
          <Link to="/">Favoritos</Link>
          <Link to="/">Acerca</Link>
        </nav>
      </Menu>
    </Header>
  );

  /*return(
    <Header>
      <div className="containerTop">
        <Link to="/"><h1>Almohadonia</h1></Link>

        <SearchInput />

        <Link to="/carrito"><CartBtn totalItems={totalItems} /></Link>
      </div>

      <div className="containerBottom">
        <nav>
          <Link to="/">Productos</Link>
          <Link to="/">Cuenta</Link>
          <Link to="/">Favoritos</Link>
          <Link to="/">Acerca</Link>
        </nav>
      </div>
    </Header>
  );*/
}

export default Navbar;