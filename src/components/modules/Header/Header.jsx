import styled from "styled-components";
import { MainLogo } from "../../atoms/Logo/Logo.stories";
import MainLogoImg from "../../../assets/Logo.svg";
import * as S from "../../common/commonWrapper/commonWrapper";
import ProfileImg from "../../atoms/ProfileImg/profile-img";
import Button from "../../atoms/Button/button";
import writeImg from "../../../assets/icon-modify-white.svg";
import logoutImg from "../../../assets/icon-logout.svg";

const StyledHeader = styled.header`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    padding: 1rem 0;
  }
`;

const Nav = styled.nav``;

const NavListBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavList = styled.li`
  list-style: none;
`;

const Header = () => {
  return (
    <StyledHeader>
      <S.MaxWidthWrapper>
        <h1>
          <a href="/">
            <MainLogo imgSrc={MainLogoImg} />
          </a>
        </h1>
        <Nav>
          <NavListBox>
            <NavList>
              <a href="#">
                <ProfileImg imgSrc="assets/profile.jpg" size="middle" />
              </a>
            </NavList>
            <NavList>
              <Button
                text="Write"
                imgSrc={writeImg}
                backgroundColor="rgb(55,170,236)"
                textColor="#FFF"
              />
            </NavList>
            <NavList>
              <Button text="Logout" imgSrc={logoutImg} backgroundColor="#fff" />
            </NavList>
          </NavListBox>
        </Nav>
      </S.MaxWidthWrapper>
    </StyledHeader>
  );
};

export default Header;
