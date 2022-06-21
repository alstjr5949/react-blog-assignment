import styled from "styled-components";

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
  padding: 0.2rem 0.8em 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  cursor: pointer;
`;

const ButtonImg = styled.img`
  height: 1.2em;
  margin-top: -0.2rem;
  vertical-align: middle;
`;

const ButtonText = styled.text``;

const Button = ({ text, imgSrc, backgroundColor, textColor, ...props }) => {
  return (
    <MainButton
      {...props}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <ButtonImg src={imgSrc}></ButtonImg>
      <ButtonText>{text}</ButtonText>
    </MainButton>
  );
};

export default Button;
