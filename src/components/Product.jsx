import styled from "styled-components";

const StyledProduct = styled.article`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: 390px;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #c4c4c4;
  
  &:hover {
    box-shadow: 0px 16px 60px rgba(0,0,0,0.2);
  }

  .img-background {
    background-color: #DEDEDE;
  }

  & img {
    height: 300px;
  }

  .desc-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  & h5 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: var(--text-color);
  }

  & p {
    margin: 0;
    padding: 0;
  }
`;

const Product = ({ product }) => {

  return(
    <StyledProduct>
      <div className="img-background">
        <img src={product.image.url} alt={product.image.filename} />
      </div>
      <div className="desc-container">
        <h5>{product.name}</h5>
        <p>{product.price.formatted_with_symbol}</p>
      </div>
    </StyledProduct>
  );
}

export default Product;