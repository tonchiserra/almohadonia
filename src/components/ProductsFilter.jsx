import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const ProductsFilter = ({ applyFilter }) => {

  const handleChange = ({ target }) => {
    applyFilter(target.value);
  }

  return(
    <FilterContainer>
      <div>
        <p>Ordenar por:</p>
        <select onChange={handleChange}>
          <option value=''>Por defecto</option>
          <option value='priceAsc'>Precio Ascendente</option>
          <option value='priceDesc'>Precio Descendente</option>
        </select>
      </div>
    </FilterContainer>
  );
}

export default ProductsFilter;