import styled from "styled-components";
import CategoryButton from "../../atoms/CategoryButton/categoryButton";
import ProfileImg from "../../atoms/ProfileImg/profile-img";
import SocialIcon from "../../atoms/SocialIcon/socialIcon";

// iconImg
import facebook from "../../../assets/Facebook.svg";
import twitter from "../../../assets/Twitter.svg";
import instagram from "../../../assets/Instagram.svg";
import github from "../../../assets/Github.svg";

const AboutAside = styled.aside`
  flex-basis: calc((100% - 2.4rem * 3) / 4);
  flex-shrink: 0;
  align-self: flex-start;
  padding: 4rem 2.4rem 7rem;
  box-sizing: border-box;
  border-radius: 0.4em;
  background: #fff;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
  h2,
  h3 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;
    letter-spacing: 0.1em;
  }
  h3 {
    margin-top: 6rem;
  }
  .user-profile {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 50%;
  }
  .user-name {
    color: rgb(55, 170, 236);
    font-weight: bold;
    font-size: 1.6rem;
    margin: 1.2rem 0 0.8rem;
  }
  .user-description {
    font-size: 1.4rem;
    padding: 0 0.4rem;
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    li a {
      background: #f5f5f5;
      color: #6f6f6f;
      font-size: 1.2rem;
      border-radius: calc(0.4em * 2);
      padding: 0.2rem 1.2rem;
    }
  }
  .sns {
    display: flex;
    gap: 0.6rem;
    justify-content: center;
    margin-top: -0.4rem;
    a {
      display: block;
      padding: 0.4rem;
      line-height: 1;
    }
    img {
      width: 1.6rem;
      display: block;
    }
  }
`;

const AboutCard = ({ imgSrc, userName, userInfo, category = [] }) => {
  return (
    <AboutAside>
      <h2>About Me</h2>
      <ProfileImg src={imgSrc} size="large" alt="" />
      <p className="user-name">{userName}</p>
      <p className="user-description">{userInfo}</p>
      <h3>Categories</h3>
      <ul className="categories">
        {category.map((category, index) => (
          <li key={`${category}${index}`}>
            <CategoryButton category={category} blog={false} />
          </li>
        ))}
      </ul>
      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <a to="#">
            <SocialIcon imgSrc={facebook} alt="facebook"></SocialIcon>
          </a>
        </li>
        <li>
          <a to="#">
            <SocialIcon imgSrc={twitter} alt="twitter"></SocialIcon>
          </a>
        </li>
        <li>
          <a to="#">
            <SocialIcon imgSrc={instagram} alt="instagram"></SocialIcon>
          </a>
        </li>
        <li>
          <a to="#">
            <SocialIcon imgSrc={github} alt="github"></SocialIcon>
          </a>
        </li>
      </ul>
    </AboutAside>
  );
};

export default AboutCard;
