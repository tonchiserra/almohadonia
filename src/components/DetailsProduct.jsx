import styled, { keyframes } from "styled-components";
import { Navigate } from 'react-router-dom';
import Button from './ui/Button';

const fly = keyframes`
  from {
    transform: translateY(0rem);
  }

  to {
    transform: translateY(2rem);
  }
`;

const DetailsContainer = styled.div`
  background-color: #ffffff;
  min-height: calc(100vh - var(--nav-height) - 4rem);
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .left {
    margin-top: 3rem;
    height: inherit;
    display: flex;
  }

  .img-container {
    height: 50vh;
    width: 90vw;
    border-radius: 20px;
    background-color: #A1E3F8;
    background: -prefix-linear-gradient(top, #A1E3F8, transparent);
    background: linear-gradient(to bottom, #408499, transparent);
    display: flex;
    justify-content: center;
  }

  .img-container > img {
    height: 360px;
    animation: ${fly} 4s alternate infinite;
  }

  .right {
    margin-top: 3rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
  }

  .title {
    padding: 0;
    margin: 0;
    font-size: 2rem; 
  }

  .desc {
    font-size: 1rem;
    color: #777777;
    padding: 0;
    margin: 0;
  }

  .price {
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }

  .btns {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
    margin-bottom: 5rem;
  }

  .btns > * {
    width: 100%;
  }

  @media screen and (min-width: 800px){
    & {
      flex-direction: row;
      justify-content: center;
      align-items: unset;
      padding: 0 1rem;
    }

    .img-container {
      height: 450px;
      width: 350px;
    }

    .right {
      padding-left: 3rem;
      gap: 2rem;
    }

    .title {
      font-size: 3rem; 
    }

    .btns {
      flex-direction: row;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 1200px){
    & {
      padding: 0;
    }

    .right {
      padding-left: 6rem;
    }
  }
`;

const DetailsProduct = ({ details, onAddToCart }) => {

  if(!details) return <Navigate to="/productos" />

  return(
    <DetailsContainer>
      <div className="left">
        <div className="img-container">
          <img src={details.image.url} alt={details.image.filename} />
        </div>
      </div>
      <div className="right">
        <h2 className="title">{details.name}</h2>
        <p className="desc">{details.description}</p>
        <p className="price">{details.price.formatted_with_symbol}</p>
        <div className="btns">
          <Button secondary ><span>COMPRAR AHORA</span></Button>
          <Button onClick={() => onAddToCart(details.id, 1)}><span>AÑADIR AL CARRITO</span></Button>
        </div>
      </div>
    </DetailsContainer>
  );
}

export default DetailsProduct;