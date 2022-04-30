import styled from "styled-components";

import view1Icon from '../assets/view_1.svg';
import view2Icon from '../assets/view_2.svg';

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & .order-by {
    display: none;
  }

  select {
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    height: 3rem;
    padding: 0 .5rem;
    border-radius: 5px;
  }

  select:hover {
    border: 1px solid #c4c4c4;
  }

  & .viewBtns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (min-width: 500px){
    & .order-by {
      display: unset;
    }
  }
`;

const StyledViewBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  width: 1.5rem;
  padding: 0;
  margin: 0;
  border-radius: 999px;
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: .75;
  }

  & img {
    padding: 0;
    margin: 0;
  }
`;

const ProductsFilter = ({ applyFilter, applyView }) => {

  const handleChange = ({ target }) => {
    applyFilter(target.value);
  }

  return(
    <FilterContainer>
      <div>
        <p className="order-by">Ordenar por:</p>
        <select onChange={handleChange}>
          <option value=''>Por defecto</option>
          <option value='priceAsc'>Precio Ascendente</option>
          <option value='priceDesc'>Precio Descendente</option>
        </select>
      </div>

      <div className="viewBtns">
        <StyledViewBtn onClick={() => applyView(false)}><img src={view1Icon} alt="view1" /></StyledViewBtn>
        <StyledViewBtn onClick={() => applyView(true)}><img src={view2Icon} alt="view2" /></StyledViewBtn>
      </div>
    </FilterContainer>
  );
}

export default ProductsFilter;