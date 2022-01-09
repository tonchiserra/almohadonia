import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #222;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;

  & > p {
    color: #fff;
    padding: 0;
    margin: 0;
  }

  & > p > a {
    color: var(--first-color);
  }

  & > p > a:hover {
    opacity: .75;
  }
`;

const Footer = () => {
  return(
    <FooterContainer>
      <p>E-commerce developed by <a href="https://gserra.netlify.app/" target="_blank" rel="noopener noreferrer">Gonzalo Serra</a>.</p>
    </FooterContainer>
  );
}

export default Footer;