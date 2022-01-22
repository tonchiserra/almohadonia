import styled from "styled-components";
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import Button from './ui/Button';

const CartContainer = styled.div`
  min-height: calc(100vh - var(--nav-height) - 4rem);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 0 1rem ;

  & > h2 {
    font-size: 2rem;
    font-weight: normal;
    padding: 0;
    margin: 0 0 1rem 0;
  }

  .product-list {
    display: flex;
    flex-direction: column;
  }

  .subtotal {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #FFFFFF;
    border-top: 1px solid #c4c4c4;
  }

  .subtotal-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .subtotal-container p {
    font-size: 1.3rem;
    font-weight: normal;
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
          <div>
            <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
          </div>
          <Button><span>CHECK OUT</span></Button>
        </div>
      </div>
    </CartContainer>
  );
}

export default Cart;