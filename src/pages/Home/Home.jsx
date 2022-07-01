import Banner from "../../components/modules/Banner/Banner";
import BannerBg from "../../assets/background.jpg";
import styled from "styled-components";
import AboutCard from "../../components/modules/AboutCard/AboutCard";
import BlogCards from "../../components/modules/BlogCards/BlogCards";
import * as S from "../../components/common/commonWrapper/commonWrapper";

const Main = styled.main`
  .max-width {
    display: flex;
    flex-direction: row-reverse;
    gap: 2.4rem;
    position: relative;
  }
  @media (max-width: 1024px) {
    .max-width {
      flex-direction: column;
    }
  }
`;

const Home = ({ blogData, userData }) => {
  return (
    <>
      <Banner
        imgSrc={BannerBg}
        subText={blogData?.blog?.subTitle}
        mainText={blogData?.blog?.mainTitle}
        description={blogData?.blog?.description}
      ></Banner>
      <Main>
        <S.MaxWidthWrapper className="max-width">
          <BlogCards postData={blogData?.posts} />
          <AboutCard
            imgSrc={userData?.profileImg}
            userName={userData?.name}
            userInfo={userData?.userInfo}
            category={userData?.category}
          />
        </S.MaxWidthWrapper>
      </Main>
    </>
  );
};

export default Home;
