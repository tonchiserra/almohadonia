import styled, { keyframes } from "styled-components";
import { Navigate } from 'react-router-dom';

import Button from './ui/Button';
import FavButton from './ui/FavButton';

const fly = keyframes`
  from {
    transform: translateY(0rem);
  }

  to {
    transform: translateY(2rem);
  }
`;

const DetailsContainer = styled.div`
  background-color: #fff;
  min-height: calc(100vh - var(--nav-height) - 4rem);
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 14rem; //13(price-container) + 1 de espacio

  .left {
    margin-top: 2rem;
    height: inherit;
    display: flex;
  }

  .img-container {
    height: 50vh;
    width: 90vw;
    border-radius: 5px;
    background-color: #A1E3F8;
    background: -prefix-linear-gradient(top, #A1E3F8, transparent);
    background: linear-gradient(to bottom, #408499, transparent);
    display: flex;
    justify-content: center;
    position: relative;
  }

  .img-container > img {
    height: 360px;
    animation: ${fly} 4s alternate infinite;
  }

  .right {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem;
    width: 100%;
  }

  .title {
    padding: 0;
    margin: 0;
    font-size: 2rem; 
  }

  .desc {
    padding: 0;
    margin: 0;
  }

  .desc * {
    font-size: 1rem;
    color: #777777;
    padding: 0;
    margin: 0;
  }

  .desc ul {
    margin: 0 0 0 1rem;
  }

  .desc ul li p {
    padding: .3rem 0;
  }

  .price-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 13rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background-color: #ffffff;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 1.3rem #88888822;
  }

  .price {
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
  }

  .btns {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
  }

  .btns > * {
    width: 100%;
  }

  @media screen and (min-width: 800px){
    & {
      flex-direction: row;
      justify-content: center;
      gap: 3rem;
      align-items: unset;
      padding: 0 1rem;
    }

    .img-container {
      height: 450px;
      width: 350px;
    }

    .right {
      padding: 1rem;
      gap: 2rem;
      background-color: #f4f4f4;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      justify-content: space-between;
      height: max-content;
    }

    .title {
      font-size: 3rem; 
    }

    .price-container {
      position: unset;
      bottom: unset;
      left: unset;
      height: unset;
      padding: 0;
      flex-direction: column;
      align-items: unset;
      justify-content: center;
      gap: 2rem;
      border-radius: 0;
      box-shadow: none;
      background-color: transparent;
    }

    .btns {
      flex-direction: row;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 1200px){
    & {
      padding: 0;
      gap: 6rem;
    }

    .right {
      width: max-content;
    }

    .btns {
      min-width: 500px;
    }
  }
`;

const DetailsProduct = ({ details, onAddToCart }) => {

  if(!details) return <Navigate to="/productos" />

  return(
    <DetailsContainer>
      <div className="left">
        <div className="img-container">
          <FavButton top />
          <img src={details.image.url} alt={details.image.filename} />
        </div>
      </div>
      <div className="right">
        <h2 className="title">{details.name}</h2>
        <div className="desc" dangerouslySetInnerHTML={{__html: details.description}}></div>
        <div className="price-container">
          <p className="price">{details.price.formatted_with_symbol}</p>
          <div className="btns">
            <Button secondary>Comprar ahora</Button>
            <Button onClick={() => onAddToCart(details.id, 1)}>Añadir al carrito</Button>
          </div>
        </div>
      </div>

    </DetailsContainer>
  );
}

export default DetailsProduct;