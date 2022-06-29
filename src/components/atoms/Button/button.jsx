import styled from "styled-components";
import likeIcon from "../../../assets/icon-like.svg";
import likeIconWhite from "../../../assets/icon-like-white.svg";

const MainButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 4rem;
  border: 0;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1;
  padding: 0.2rem 1.9rem 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  cursor: pointer;
  &.btn-top {
    border-radius: 0.4rem 0.4rem 0 0;
    width: 6.4rem;
    height: 6.4rem;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    img {
      height: 3em;
      margin: -2rem 0;
    }
  }
  &.btn-like {
    width: 12rem;
    height: 4rem;
    padding-left: 3rem;
    border: 1px solid rgba(243, 124, 75, 0.5);
    background: #fff url(${likeIcon}) no-repeat 2.5rem 50% / 2.4rem;
    transition: all 0.3s;
    &:hover,
    &.active {
      background: rgb(243, 124, 75) url(${likeIconWhite}) no-repeat 2.5rem 50% /
        2.4rem;
      color: #fff;
    }
    &:focus {
      outline-color: rgba(243, 124, 75, 0.2);
      box-shadow: none;
    }
  }
  &.btn-back {
    border-radius: 0 0.4rem 0.4rem 0;
    font-size: 1.6rem;
    height: 6.4rem;
    width: 6.4rem;
    position: relative;
    img {
      height: 4rem;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;

const ButtonImg = styled.img`
  height: 1.2em;
  margin-top: -0.2rem;
  vertical-align: middle;
`;

const ButtonText = styled.p``;

const Button = ({
  text,
  imgSrc,
  backgroundColor,
  textColor,
  buttonType,
  ...props
}) => {
  return (
    <MainButton
      {...props}
      backgroundColor={backgroundColor}
      textColor={textColor}
      className={buttonType}
    >
      <ButtonImg src={imgSrc}></ButtonImg>
      <ButtonText>{text}</ButtonText>
    </MainButton>
  );
};

export default Button;
