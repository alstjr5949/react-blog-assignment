import LogoImg from "./Logo";
import MainLogoImg from "../../../assets/Logo.svg";

export default {
  title: "Atoms/ LogoImg",
  component: LogoImg,
};

const Template = (args) => <LogoImg {...args} />;

export const MainLogo = Template.bind({});
MainLogo.args = {
  imgSrc: MainLogoImg,
};
