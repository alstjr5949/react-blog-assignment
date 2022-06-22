import SocialIcon from "./socialIcon";
import FacebookImg from "../../../assets/Facebook.svg";
import TwitterImg from "../../../assets/Twitter.svg";
import InstagramImg from "../../../assets/Instagram.svg";
import GithubImg from "../../../assets/Github.svg";

export default {
  title: "Atoms / SocialIcon",
  component: SocialIcon,
};

const Template = (args) => <SocialIcon {...args} />;

export const FacebookIcon = Template.bind({});
FacebookIcon.args = {
  imgSrc: FacebookImg,
};

export const TwitterIcon = Template.bind({});
TwitterIcon.args = {
  imgSrc: TwitterImg,
};

export const InstagramIcon = Template.bind({});
InstagramIcon.args = {
  imgSrc: InstagramImg,
};

export const GithubIcon = Template.bind({});
GithubIcon.args = {
  imgSrc: GithubImg,
};
