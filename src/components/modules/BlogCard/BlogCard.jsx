import styled from "styled-components";
import CategoryButton from "../../atoms/CategoryButton/categoryButton";
import ProfileImg from "../../atoms/ProfileImg/profile-img";
import Thumbnail from "../../atoms/ThumbnailImg/thumbnailImg";

// a 링크는 추후에 다 Link로 교체
const StyledLink = styled.a`
  display: block;
  overflow: hidden;
  border-radius: 0.4rem;
  background: #fff;
  font-size: 2rem;
  display: block;
  overflow: hidden;
  border-radius: 0.4rem;
  background: #fff;
  font-size: 2rem;

  article > img {
    width: 100%;
  }
  .contents-wrap {
    padding: 1.6rem 2.4rem 2.4rem;
    h3,
    .post-description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      line-height: 1.4;
    }
    h3 {
      height: calc(1.8rem * 1.4 * 2);
      margin: 1rem 0;
      font-size: 1.8rem;
      font-weight: bold;
      -webkit-line-clamp: 2;
      letter-spacing: -0.02em;
    }
    .post-description {
      height: calc(1.4rem * 1.4 * 3);
      margin-top: 1.6rem;
      color: #767676;
      font-size: 1.4rem;
      -webkit-line-clamp: 3;
      text-indent: 0.5em;
    }
    @media (max-width: 540px) {
      h3 {
        height: auto;
        -webkit-line-clamp: 1;
      }
      .post-description {
        height: auto;
        -webkit-line-clamp: 2;
      }
    }
  }
`;

const BlogCardWrapper = styled.article``;

const CategoryListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    margin-right: 0.4rem;
    font-size: 1.2rem;
  }
`;

const AuthorInfoListBox = styled.ul`
  display: flex;
  gap: 1rem;
  color: #767676;
  font-size: 1.2rem;
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

const BlogCard = ({
  thumbnail,
  category = [],
  title,
  profileImg,
  userName,
  created,
  children,
}) => {
  return (
    <StyledLink href="#">
      <BlogCardWrapper>
        <Thumbnail imgSrc={thumbnail} />
        <div className="contents-wrap">
          <CategoryListBox>
            {category.map((category, index) => (
              <li key={`category${index}`}>
                <CategoryButton category={category} blog={true} />
              </li>
            ))}
          </CategoryListBox>
          <h3>{title}</h3>
          <AuthorInfoListBox>
            <li className="author">
              <ProfileImg imgSrc={profileImg} size="small" alt="profile" />
              {userName}
            </li>
            <li className="created">{created}</li>
          </AuthorInfoListBox>
          <p className="post-description">{children}</p>
        </div>
      </BlogCardWrapper>
    </StyledLink>
  );
};

export default BlogCard;
