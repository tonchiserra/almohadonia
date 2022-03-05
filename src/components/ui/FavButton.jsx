import styled from 'styled-components';
import { useState } from 'react';

import heartFillIcon from '../../assets/heart_fill.svg';
import heartOutlineIcon from '../../assets/heart_outline.svg';

const StyledFavBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  padding: .25;
  margin: 0;
  position: absolute;
  bottom: ${props => props.top ? 'unset' : '.5rem'};
  top: ${props => props.top ? '.5rem' : 'unset'};
  right: .5rem;
  border-radius: 999px;
  transition: all 300ms ease-in-out;
  line-height:0;

  &:hover{
    background-color: #e6e6e6;
  }

  & > img {
    padding: 0;
    margin: 0;
  }
`;

const FavButton = ({ top }) => {
  const [fav, setFav] = useState(false);

  const handleFav = () => {
    setFav(!fav);
  }

  return(
    <StyledFavBtn onClick={handleFav} top={top} >
      <img 
        src={fav ? heartFillIcon : heartOutlineIcon} 
        alt="fav" 
      />
    </StyledFavBtn>
  );
}

export default FavButton; 