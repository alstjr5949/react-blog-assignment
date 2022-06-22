import styled from "styled-components";

const StyledSocialIcon = styled.img`
  width: 1.6rem;
  display: block;
  cursor: pointer;
`;

const SocialIcon = ({ imgSrc }) => {
  return <StyledSocialIcon src={imgSrc}></StyledSocialIcon>;
};

export default SocialIcon;
