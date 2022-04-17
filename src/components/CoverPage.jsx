import styled from 'styled-components';
import cover from '../assets/cover.svg';

const CoverPageContainer = styled.div`
  display: none;

  @media screen and (min-width: 800px){
    & {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 2rem 0;
      background-color: #f4f4f4;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      height: 350px;
    }

    & h3 {
      font-size: 3rem;
      padding: 0;
      margin: 0;
      text-align: left;
      max-width: 450px;
      color: var(--first-color);
    }

    & img {
      max-height: 350px;
    }
  }

  @media screen and (min-width: 1200px){

  }
`;

const CoverPage = () => {
  return(
    <CoverPageContainer>
      <h3>Los mejores almohadones en un solo lugar</h3>
      <img src={cover} alt="cover_image" />
    </CoverPageContainer>
  );
}

export default CoverPage;