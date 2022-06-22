import Thumbnail from "./thumbnailImg";

export default {
  title: "Atoms / ThumbnailImg",
  component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const BlogThumbnail = Template.bind({});
BlogThumbnail.args = {
  imgSrc: "./assets/post-background1.jpg",
};
