import Header from "./Header";

export default {
  title: "Modules/ Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});
MainHeader.args = {};
