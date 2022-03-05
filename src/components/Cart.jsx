import styled from "styled-components";
import { Link } from 'react-router-dom';

import CartProduct from './CartProduct';
import Button from './ui/Button';

const CartContainer = styled.div`
  min-height: calc(100vh - var(--nav-height));
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 7rem;
  background-color: #fff;

  & > h2 {
    font-size: 1.5rem;
    font-weight: normal;
    padding: 0;
    margin: 0 0 1rem 0;
    text-align: center;
    font-weight: bold;
  }

  .product-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .subtotal {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 1.3rem #88888822;
  }

  .subtotal-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }
  
  .subtotal-container p {
    font-size: 1.3rem;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  .no-products-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .no-products-container a {
    color: #408499;
  }

  .no-products-container a:hover {
    opacity: .75;
  }

  @media screen and (min-width: 1200px){
    & {
      padding: 2rem 0 0 0 ;
    }

    .subtotal-container p {
      font-weight: bold;
    }
  }
`;

const StyledLink = styled(Link)`
  pointer-events: ${props => props.disabled ? 'none' : 'unset'};
  width: 100%;
`;

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart }) => {

  if(!cart.line_items) return null;

  return(
    <CartContainer>
      <h2>Carrito</h2>
      
      {cart.total_items === 0 
        ? <div className="no-products-container">
            <p>Tu carrito está vacío. <Link to="/productos">Comienza a llenarlo</Link>.</p>
          </div> 
        : <section className="product-list">
            {cart.line_items.map(item => ( <CartProduct key={item.id} item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />))}
          </section>
      }
      
      <div className="subtotal">
        <div className="subtotal-container">
          <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
          <StyledLink to="/checkout" disabled={cart.total_items <= 0 ? true : false}>
            <Button disabled={cart.total_items <= 0 ? true : false}>Continuar compra</Button>
          </StyledLink>
        </div>
      </div>
    </CartContainer>
  );
}

export default Cart;