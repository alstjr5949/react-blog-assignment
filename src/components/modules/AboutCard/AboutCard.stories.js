import AboutCard from "./AboutCard";

export default {
  title: "Modules / AboutCard",
  component: AboutCard,
};

const Template = (args) => <AboutCard {...args} />;

export const AsideAboutCard = Template.bind({});
AsideAboutCard.args = {
  imgSrc: "assets/profile.jpg",
  userName: "Chili",
  userInfo:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam error cumque molestiae, minus quod eius eos. Reprehenderit, incidunt pariatur laborum dolor tempore mollitia non harum eveniet in nesciunt. Illo, iusto.",
  category: ["Life", "Tech", "Good"],
};
