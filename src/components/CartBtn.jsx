import styled from "styled-components";
import cartIcon from '../assets/cart.svg';

const StyledCartBtn = styled.div`
  transition: all 300ms ease-in-out;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e6e6e6;
  }

  & > div {
    position: relative;
    line-height:0;
  }
`;

const BubbleAlert = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  width: max-content;
  padding: .25rem;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #f73737;
  
  & > p {
    font-size: .7rem;
    font-weight: bold;
    color: #FFFFFF;
  }
`;

const CartBtn = ({ totalItems }) => {
  return(
    <StyledCartBtn>
      <div>
        <img src={cartIcon} alt="Carrito" />
        {totalItems < 1 ? null : <BubbleAlert><p>{totalItems > 9 ? '9+' : totalItems}</p></BubbleAlert>}
      </div>
    </StyledCartBtn>
  );
}

export default CartBtn;