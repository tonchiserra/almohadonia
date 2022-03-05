import styled from "styled-components";
import { Link } from 'react-router-dom';

import FavButton from './ui/FavButton';

const StyledProduct = styled.article`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: ${ props => props.horizontal ? 'row' : 'column' };
  border-radius: 5px;
  height: ${ props => props.horizontal ? '130px' : '390px' };
  width: ${ props => props.horizontal ? '100%' : '288px' } ;
  transition: all 300ms ease-in-out;
  overflow: hidden;
  position: relative;
  border: 1px solid #c4c4c4;
  
  &:hover {
    box-shadow: 0px 16px 60px rgba(0,0,0,0.2);
  }

  .img-background {
    background-color: #fff;
  }

  & img {
    width: ${ props => props.horizontal ? '130px' : '300px' };
  }

  .desc-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: ${ props => props.horizontal ? 'flex-start' : 'space-between' };
    gap: ${ props => props.horizontal ? '1rem' : 'unset' };
    height: 100%;
  }

  & h5 {
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
    color: var(--text-color);
  }

  & p {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
  }
`;

const StyledLink = styled(Link)`
  transition: all 300ms ease-in-out;
  width: max-content;
  padding: 0;
  margin: 0;

  &:hover {
    opacity: .75;
  }
`;

const Product = ({ product, horizontal, showDetails }) => {

  return(
    <StyledProduct horizontal={horizontal}>
      <StyledLink to="/detalle" onClick={() => showDetails(product)} >
        <div className="img-background">
          <img src={product.image.url} alt={product.image.filename} />
        </div>
      </StyledLink>
      
      <div className="desc-container">
        <StyledLink to="/detalle" onClick={() => showDetails(product)} >
          <h5>{product.name}</h5>
        </StyledLink>
        <p>{product.price.formatted_with_symbol}</p>
        
        <FavButton />
      </div>
    </StyledProduct>
  );
}

export default Product;