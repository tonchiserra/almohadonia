import styled from "styled-components";
import { Link } from 'react-router-dom';

import CartBtn from './CartBtn';

import BarsIcon from '../assets/bars.svg';
import CrossIcon from '../assets/cross.svg';
import BrandIcon from '../assets/brand.svg';

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  height: var(--nav-height);
  width: 100vw;
  border-bottom: 1px solid #c4c4c4;
  background-color: #fff;
  z-index: 995;

  & .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 1200px;
    padding: 0 1rem;
    margin: 0 auto;
    height: var(--nav-height);
  }

  & .menu-btn {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    margin: 0;
    border-radius: 999px;
    transition: all 300ms ease-in-out;
    line-height:0;
  }

  #cross-btn {
    display: none;
  }

  & .menu-btn:hover {
    background-color: #e6e6e6;
  }

  & .menu-btn > img {
    margin: 0;
    padding: 0;
  }

  .brand {
    color: var(--first-color);
    margin: 0;
    transition: all 300ms ease-in-out;
    font-size: 1.5rem;
    height: 4rem;
  }

  .brand:hover {
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
  position: fixed;
  top: var(--nav-height);
  left: 0;
  width: 100vw;
  height: calc(100vh - var(--nav-height));
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
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
      width: max-content;
      height: 3rem;
      flex-direction: row;
      align-items: center;
      gap: unset;
      padding: 0;
      margin: 0 auto;
      transform: unset;
    }

    & > nav {
      flex-direction: row;
      align-items: center;
      width: unset;
      gap: 2rem;
    }

    & > nav > a {
      padding: 0;
      width: unset;
      text-align: unset;
      background-color: unset;
      font-size: 1rem;
      color: #222;
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
    let $barsBtn = document.getElementById("bars-btn");
    let $crossBtn = document.getElementById("cross-btn");

    if(n === '0'){
      $barsBtn.style.display = 'none'
      $crossBtn.style.display = 'unset'
    }else{
      $barsBtn.style.display = 'unset'
      $crossBtn.style.display = 'none'
    }

    $menu.style.transform = `translate(${n})`;

    document.addEventListener("click", (e) => {
      if(!e.target.matches("#link")) return false;
      $menu.style.transform = 'translate(-100vw)';
    })
  }

  return(
    <Header>
      <div className="container">
        <button id="bars-btn" className="menu-btn" onClick={() => handleMenu('0')}><img src={BarsIcon} alt="Menu" /></button>
        <button id="cross-btn" className="menu-btn" onClick={() => handleMenu('-100vw')}><img src={CrossIcon} alt="Menu" /></button>
        
        <Link to="/"><img className="brand" src={BrandIcon} alt="Almohadonia" /></Link>

        <Menu id="menu">
          <nav>
            <Link id="link" to="/productos">Productos</Link>
            <Link id="link" to="/cuenta">Cuenta</Link>
            <Link id="link" to="/favoritos">Favoritos</Link>
            <Link id="link" to="/acerca">Acerca</Link>
          </nav>
        </Menu>

        <Link to="/carrito"><CartBtn totalItems={totalItems} /></Link>
      </div>
    </Header>
  );
}

export default Navbar;