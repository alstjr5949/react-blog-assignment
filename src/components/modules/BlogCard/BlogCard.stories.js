import BlogCard from "./BlogCard";

export default {
  title: "Modules / BlogCard",
  component: BlogCard,
};

const Template = (args) => <BlogCard {...args} />;

export const BlogCardModule = Template.bind({});
BlogCardModule.args = {
  thumbnail: "/assets/post-img1.jpg",
  category: ["Life", "style"],
  title: "Dipisicing elit. Inventore illum nostrum perferendis.",
  profileImg: "/assets/profile.jpg",
  userName: "Chilli",
  created: "2022.04.01",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, consectetur repudiandae corrupti repellendus neque magnam quas quidem, iste sint quibusdam assumenda harum. Ipsam fugiat ducimus sequi magnam nisi optio deleniti!",
};
