import Home from "./Home";

export default {
  title: "Pages / Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Homepage = Template.bind({});
