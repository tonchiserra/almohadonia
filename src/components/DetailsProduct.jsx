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
  min-height: calc(100vh - var(--nav-height));
  max-width: 1200px;
  margin: auto;
  position: relative;

  .left {
    position: absolute;
    top: 0;
    right: 60vw;
    margin-top: 3rem;
    height: inherit;
    display: flex;
    justify-content: flex-end;
  }

  .img-container {
    height: 500px;
    width: 350px;
    border-radius: 20px;
    background-color: #A1E3F8;
    background: -prefix-linear-gradient(top, #A1E3F8, transparent);
    background: linear-gradient(to bottom, #408499, transparent);
  }

  .img-container > img {
    height: 360px;
    animation: ${fly} 4s alternate infinite;
  }

  .right {
    position: absolute;
    top: 0;
    right: 0;
    width: 60vw;
    margin-top: 3rem;
    padding-left: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
  }

  .title {
    padding: 0;
    margin: 0;
    font-size: 3rem; 
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
    gap: 1rem;
  }
`;

const DetailsProduct = ({ details, onAddToCart }) => {

  if(!details) return <Navigate to="/" />

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
          <Button secondary >COMPRAR AHORA</Button>
          <Button onClick={() => onAddToCart(details.id, 1)}>AÑADIR AL CARRITO</Button>
        </div>
      </div>
    </DetailsContainer>
  );
}

export default DetailsProduct;