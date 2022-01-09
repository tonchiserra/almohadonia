import styled from "styled-components";

const StyledCartProduct = styled.article`
  display: grid;
  grid-template-columns: .3fr 1fr 2.2fr 1fr .5fr;
  align-items: center;
  height: 5rem;
  width: 100%;
  padding: 0 1rem;
  border-bottom: 1px solid #c4c4c4;

  & button {
    background-color: transparent;
    color: #777;
    font-size: 1rem;
    font-weight: bold;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease-in-out;
  }

  & button:hover {
    background-color: #e6e6e6;
  }

  & img {
    height: 100%;
  }

  & h5 {
    font-size: 1rem;
    color: #222;
  }

  .cant-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
  }

  .price {
    text-align: right;
  }
`;

const CartProduct = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  return(
    <StyledCartProduct>
      <button onClick={() => onRemoveFromCart(item.id)}>x</button>
      <img src={item.image.url} alt={item.image.filename} />
      <h5>{item.name}</h5>
      <div className="cant-container">
        <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
      </div>
      <p className="price">{item.line_total.formatted_with_symbol}</p>
    </StyledCartProduct>
  );
}

export default CartProduct;