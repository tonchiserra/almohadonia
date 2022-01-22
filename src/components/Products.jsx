import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Product from './Product';
import ProductsFilter from './ProductsFilter';

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - var(--nav-height) - 4rem);
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 0 1rem;

  @media screen and (min-width: 500px){
    & {
      align-items: unset;
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
  padding: 1rem 0;
  gap: 1rem;

  @media screen and (min-width: 500px){
    & {
      flex-direction: row;
      align-items: unset;
    }
  }
`;

const Products = ({ products, showDetails, applyFilter }) => {
  return(
    <ProductsContainer>

      <ProductsFilter applyFilter={applyFilter} />
      
      <ProductsList>
        {products.map((product) => (
          <Link to="/detalle" key={product.id} onClick={() => showDetails(product)}>
            <Product product={product} />
          </Link>
        ))}
      </ProductsList>

    </ProductsContainer>

  );
}

export default Products;