import ProfileImg from "./profile-img";

export default {
  title: "Atoms / ProfileImg",
  component: ProfileImg,
};

const Template = (args) => <ProfileImg {...args} />;

export const AboutProfileImg = Template.bind({});
AboutProfileImg.args = {
  imgSrc: "assets/profile.jpg",
  size: "large",
};

export const HeaderProfileImg = Template.bind({});
HeaderProfileImg.args = {
  imgSrc: "assets/profile.jpg",
  size: "middle",
};

export const AuthorProfileImg = Template.bind({});
AuthorProfileImg.args = {
  imgSrc: "assets/profile.jpg",
  size: "small",
};
