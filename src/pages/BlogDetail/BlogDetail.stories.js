import BlogDetail from "./BlogDetail";

export default {
  title: "Pages/ BlogDetail",
  component: BlogDetail,
};

const Template = (args) => <BlogDetail {...args} />;

export const BlogDetailPage = Template.bind({});
