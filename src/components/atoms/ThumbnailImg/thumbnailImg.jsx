import styled from "styled-components";

const ThumbnailImg = styled.img`
  width: 100%;
`;

const Thumbnail = ({ imgSrc }) => {
  return <ThumbnailImg src={imgSrc}></ThumbnailImg>;
};

export default Thumbnail;
