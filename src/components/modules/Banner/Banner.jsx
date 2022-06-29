import styled from "styled-components";
import * as S from "../../common/commonWrapper/commonWrapper";

const StyledBanner = styled.div`
  position: relative;
  background: url(${(props) => props.imgSrc}) no-repeat 50% 50% / cover;
  height: 43rem;
  margin-bottom: -7em;
`;

const SubText = styled.p`
  border: 1px solid rgba(249, 249, 249, 0.3);
  border-width: 1px 0;
  padding: 1rem 0 0.8rem;
  font-size: 2rem;
  letter-spacing: 0.2em;
`;

const MainText = styled.em`
  font-weight: bold;
  font-size: 5.4rem;
  margin: 1.6rem 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: left;
  word-break: break-all;
  padding: 0 0.8rem;
`;

const BannerContents = styled.div`
  width: 28rem;
  padding: 7rem 0 14.5rem;
  text-align: center;
  line-height: 1.5;
  color: #f9f9f9;
  & > * {
    position: relative;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc((100% - 1224px) / 2 + 44rem);
    height: 100%;
    background: rgba(40, 48, 63, 0.5);
  }
  &.blog-banner {
    font-size: 5rem;
    padding-left: 0.8em;
    font-weight: bold;
    text-align: left;
    line-height: 1.1;
    color: #fff;
    p {
      border: 0;
      font-size: 5rem;
      letter-spacing: 0;
      padding: 0;
    }
    em {
      display: block;
      font-size: 2em;
      margin: -0.15em 0;
    }
    @media (max-width: 1260px) {
      font-size: 3rem;
      p {
        display: inline;
        font-size: 3rem;
      }
      em {
        display: inline;
        font-size: 1.4em;
        padding: 0 0.2em;
      }
    }
    @media (max-width: 768px) {
      text-align: center;
      padding-left: 0;
    }
  }
  @media (max-width: 1280px) {
    &::before {
      width: 44rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    &::before {
      width: 100%;
    }
  }
`;

const Banner = ({ imgSrc, subText, mainText, description, bannerType }) => {
  return (
    <StyledBanner imgSrc={imgSrc}>
      <S.MaxWidthWrapper>
        <BannerContents className={bannerType}>
          <SubText className={bannerType}>{subText}</SubText>
          <MainText className={bannerType}>{mainText}</MainText>
          <Description className={bannerType}>{description}</Description>
        </BannerContents>
      </S.MaxWidthWrapper>
    </StyledBanner>
  );
};

export default Banner;
