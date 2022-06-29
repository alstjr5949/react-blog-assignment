import styled from "styled-components";
import BlogCard from "../BlogCard/BlogCard";

const BlogCardsBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BlogCards = ({ postData = [] }) => {
  return (
    <BlogCardsBox>
      {postData.map((post) => (
        <li key={post.id}>
          <BlogCard
            href={`/blog/${post.id}`}
            thumbnail={post.thumbnail}
            category={post.category}
            title={post.title}
            profileImg={post.profileImg}
            userName={post.userName}
            created={post.created}
          >
            {post.contents.find((content) => content.type === "p").text}
          </BlogCard>
        </li>
      ))}
    </BlogCardsBox>
  );
};

export default BlogCards;
