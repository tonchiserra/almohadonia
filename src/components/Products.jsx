import styled from 'styled-components';
import { useState } from 'react';

import Product from './Product';
import SearchInput from './SearchInput';
import ProductsFilter from './ProductsFilter';
import Footer from './Footer';

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - var(--nav-height));
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 4rem 1rem;
  gap: 1rem;
  background-color: #fff;

  .filters-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  @media screen and (min-width: 500px){
    & {
      align-items: unset;
    }
  }

  @media screen and (min-width: 800px){
    .filters-container {
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 1200px){
    & {
      padding: 1rem 0 0 0;
    }
  }
`;

const ProductsList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding:0 0 5rem 0;
  gap: 1rem;

  @media screen and (min-width: 500px){
    & {
      flex-direction: row;
      align-items: unset;
    }
  }

  @media screen and (min-width: 800px){
    & {
      display: ${ props => props.horizontal ? 'grid' : 'flex' };
      grid-template-columns: ${ props => props.horizontal ? '1fr 1fr' : 'unset' };
    }
  }
`;

const Products = ({ products, showDetails, applyFilter }) => {
  const [horizontal, setHorizontal] = useState(true);

  const applyView = (view) => {
    setHorizontal(view)
  }

  return(
    <ProductsContainer>
 
      <div className='filters-container'>
        <SearchInput />
        <ProductsFilter applyFilter={applyFilter} applyView={applyView} />
      </div>
      
      <ProductsList horizontal={horizontal}>
        {products.map((product) => (
          <Product key={product.id} product={product} horizontal={horizontal} showDetails={showDetails} />
        ))}
      </ProductsList>

      <Footer />

    </ProductsContainer>

  );
}

export default Products;