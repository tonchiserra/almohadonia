import styled from "styled-components";
import crossIcon from '../assets/cross.svg';

const StyledCartProduct = styled.article`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  position: relative;
  gap: 1rem; 
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  padding: .5rem;
  background-color: #f4f4f4;

  & button {
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: transparent;
    color: #222222;
    transition: all 300ms ease-in-out;
    border: 1px solid #222;
  }

  & button:hover {
    background-color: #222222;
    color: #fff;
  }

  & .cross {
    position: absolute;
    top: .25rem;
    right: .25rem;
    color: #222;
    border: none;
    border-radius: 100px;
  }

  & .cross:hover {
    background-color: #e6e6e6;
  }

  & .img-container {
    background-color: #ffffff44;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 110px;
    box-shadow: 0 0 1.3rem #88888822;
  }

  & img {
    height: 100px;
    width: 100px;
  }

  & .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 100%;
    height: 100%;
    padding: .5rem 0;
  }

  & h5 {
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
  }

  & .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  & .price {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  & .cant-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
  }

  & .cant-container p {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
`;

const CartProduct = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  return(
    <StyledCartProduct>
      <button className="cross" onClick={() => onRemoveFromCart(item.id)}>
        <img src={crossIcon} alt="x"/>
      </button>

      <div className="img-container">
        <img src={item.image.url} alt={item.image.filename} />
      </div>

      <div className="info">
        <h5>{item.name}</h5>

        <div className="price-container">
          <p className="price">{item.line_total.formatted_with_symbol}</p>
          <div className="cant-container">
            <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
          </div>
        </div>
        
      </div>
    </StyledCartProduct>
  );
}

export default CartProduct;