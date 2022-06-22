import CategoryButton from "./categoryButton";

export default {
  title: "Atoms/ CategoryBtn",
  component: CategoryButton,
};

const Template = (args) => <CategoryButton {...args} />;

export const AboutCategoryBtn = Template.bind({});
AboutCategoryBtn.args = {
  category: "Life",
  blog: false,
};

export const BlogCategoryBtn = Template.bind({});
BlogCategoryBtn.args = {
  category: "Life",
  blog: true,
};
