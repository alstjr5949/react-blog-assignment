import styled from "styled-components";
import Button from "../../atoms/Button/button";
import CategoryButton from "../../atoms/CategoryButton/categoryButton";
import ProfileImg from "../../atoms/ProfileImg/profile-img";
import ArrowLeft from "../../../assets/ArrowLeft-blue.svg";
import * as S from "../../common/commonWrapper/commonWrapper";

const ContentsWrapper = styled.div`
  .wrap-box {
    position: relative;
    width: 91.2rem;
    margin: -30rem 0 auto auto;
    padding: 8rem;
    border-radius: 0.4rem;
    background: #fff;
    font-size: 4rem;
    transition: all 0.3s;
    max-width: 100%;
    hr {
      border: solid #ddd;
      border-width: 1px 0 0;
      margin: 3.2rem 0;
    }
    .btn-back {
      position: absolute;
      top: 8rem;
      left: 0;
    }
    @media (max-width: 1024px) {
      width: 100%;
      padding: 6rem;
      .author-wrap {
        height: 5.2rem;
        margin-bottom: 1rem;
      }
      .title-wrap {
        flex-direction: column;
        gap: 2rem;
      }
      .btn-back {
        height: 5.2rem;
        top: 6rem;
        width: 5.2rem;
      }
    }
    @media (max-width: 640px) {
      padding: 4rem;
      width: 100%;
      .author-wrap {
        margin-bottom: 1rem;
        padding-left: 3rem;
      }
      .btn-back {
        top: 4rem;
      }
    }
  }
`;

const AuthorInfoListBox = styled.ul`
  display: flex;
  gap: 1rem;
  color: #767676;
  font-size: 1.4rem;
  height: 6.4rem;
  li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .author img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
  }
  .created::before {
    content: "";
    display: block;
    width: 1px;
    height: 0.8em;
    margin-right: 1rem;
    background: #ddd;
  }
`;

const CategoryListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0 1rem;
  li {
    margin-right: 0.4rem;
    font-size: 1.2rem;
  }
`;

const TitleLikeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1.6rem;
  gap: 8rem;
  margin-bottom: 1rem;
  h2 {
    margin-bottom: 0;
    font-size: 3.2rem;
    font-weight: 700;
    width: 100%;
  }
  button {
    flex-shrink: 0;
  }
`;

const BlogContents = styled.div`
  p {
    font-size: 1.6rem;
    letter-spacing: -0.01em;
    line-height: 1.6;
    text-align: justify;
  }
  img {
    margin: 3.2rem 0;
    max-width: 100%;
  }
`;

const BlogDetailContents = ({ post }) => {
  return (
    <ContentsWrapper className="view">
      <S.MaxWidthWrapper>
        <section className="wrap-box">
          <AuthorInfoListBox className="author-wrap">
            <li className="author">
              <ProfileImg
                imgSrc={post?.profileImg}
                size="small"
                alt="profile"
              />
              {post?.userName}
            </li>
            <li className="created">{post?.created}</li>
          </AuthorInfoListBox>
          <CategoryListBox>
            {post?.category.map((category, index) => (
              <li key={`category${index}`}>
                <CategoryButton category={category} blog={true} />
              </li>
            ))}
          </CategoryListBox>
          <TitleLikeBox className="title-wrap">
            <h2>{post?.title}</h2>
            <Button text="Like" buttonType="btn-like"></Button>
          </TitleLikeBox>
          <hr />
          <BlogContents>
            {post?.contents.map((content) =>
              content.type === "p" ? (
                <p>{content.text}</p>
              ) : (
                <img src={content.src} alt="" />
              )
            )}
          </BlogContents>
          <Button imgSrc={ArrowLeft} buttonType="btn-back" />
        </section>
      </S.MaxWidthWrapper>
    </ContentsWrapper>
  );
};

export default BlogDetailContents;
