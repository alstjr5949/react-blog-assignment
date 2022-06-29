import styled from "styled-components";
import Button from "../../atoms/Button/button";
import * as S from "../../common/commonWrapper/commonWrapper";

import ArrowTop from "../../../assets/ArrowTop.svg";

const StyledFooter = styled.footer`
  margin-top: 10rem;
  background-color: #fff;
`;

const FooterWrapper = styled(S.MaxWidthWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  position: relative;
  button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Corp = styled.small`
  font-size: 1.6rem;
  color: #767676;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Corp>©Weniv Corp.</Corp>
        <Button
          text="Top"
          imgSrc={ArrowTop}
          backgroundColor="rgb(55,180,236)"
          textColor="#FFF"
          buttonType="btn-top"
        />
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
