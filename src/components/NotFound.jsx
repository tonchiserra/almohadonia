import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNotFound = styled.div`
  min-height: calc(100vh - var(--nav-height) - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h3 {
    font-size: 2rem;
    color: #222;
    text-align: center;
  }

  & p {
    font-size: 1rem;
    color: #222;
    text-align: center;
  }

  & a {
    color: var(--first-color);
  }

  & a:hover {
    opacity: .75;
  }
`;

const NotFound = () => {
  return(
    <StyledNotFound>
      <h3>Oops... Destino no encontrado</h3>
      <p>Tal vez quieras ver nuestros <Link to="/productos">productos</Link>.</p>
    </StyledNotFound>
  );
}

export default NotFound;