import Banner from "./Banner";
import BannerBg from "../../../assets/background.jpg";

export default {
  title: "Modules/ Banner",
  components: Banner,
};

const Template = (args) => <Banner {...args} />;

export const MainBanner = Template.bind({});
MainBanner.args = {
  imgSrc: BannerBg,
  subText: "React Blog",
  mainText: "My BLOG",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolor provident beatae deserunt magnam, illo neque. Maiores ipsum commodi dolorum beatae aliquid laboriosam est",
};
