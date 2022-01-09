import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Product from './Product';

const ProductsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: calc(100vh - var(--nav-height));
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  gap: 1rem;
`;

const Products = ({ products, showDetails }) => {
  return(
    <ProductsContainer>
      
      {products.map((product) => (
        <Link to="/detalle" key={product.id} onClick={() => showDetails(product)}>
          <Product product={product} />
        </Link>
      ))}

    </ProductsContainer>

  );
}

export default Products;