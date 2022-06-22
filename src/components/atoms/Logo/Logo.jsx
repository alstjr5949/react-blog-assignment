import styled from "styled-components";

const StyledLogo = styled.img`
  display: block;
`;

const LogoImg = ({ imgSrc }) => {
  return <StyledLogo src={imgSrc}></StyledLogo>;
};

export default LogoImg;
