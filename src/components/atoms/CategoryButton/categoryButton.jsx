import styled from "styled-components";

const CategoryBtn = styled.button`
  background: #f5f5f5;
  color: ${(props) => (props.blog ? "rgb(55, 170, 236)" : "#6f6f6f")};
  font-size: 1.2rem;
  border-radius: calc(0.4em * 2);
  padding: 0.2rem 1.2rem;
  border: 0;
`;

const CategoryButton = ({ category, blog }) => {
  return <CategoryBtn blog={blog}>{category}</CategoryBtn>;
};

export default CategoryButton;
