import Button from "./button";
import LoginImg from "../../../assets/icon-login.svg";
import LogoutImg from "../../../assets/icon-logout.svg";
import ResisterImg from "../../../assets/icon-register.svg";
import WriteImg from "../../../assets/icon-modify-white.svg";
import ArrowTop from "../../../assets/ArrowTop.svg";

export default {
  title: "Atoms / Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const LoginButton = Template.bind({});
LoginButton.args = {
  text: "Login",
  imgSrc: LoginImg,
};

export const LogoutButton = Template.bind({});
LogoutButton.args = {
  text: "Logout",
  imgSrc: LogoutImg,
  backgroundColor: "#FFF",
};

export const ResisterButton = Template.bind({});
ResisterButton.args = {
  text: "Resister",
  imgSrc: ResisterImg,
};

export const WriteButton = Template.bind({});
WriteButton.args = {
  text: "Write",
  imgSrc: WriteImg,
  backgroundColor: "rgb(55, 170, 236)",
  textColor: "#FFF",
};

export const LikeButton = Template.bind({});
LikeButton.args = {
  text: "Like",
  buttonType: "btn-like",
};

export const TopButton = Template.bind({});
TopButton.args = {
  text: "Top",
  imgSrc: ArrowTop,
  backgroundColor: "rgb(55, 170, 236)",
  textColor: "#FFF",
  buttonType: "btn-top",
};
