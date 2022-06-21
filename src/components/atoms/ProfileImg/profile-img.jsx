import styled from "styled-components";
import PropTypes from "prop-types";

const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 50%;
  &.middle {
    width: 4.4rem;
    height: 4.4rem;
  }
  &.small {
    width: 2em;
    height: 2em;
  }
`;

const ProfileImg = ({ imgSrc, size, ...props }) => {
  return (
    <>
      <ProfileImage src={imgSrc} className={size} {...props}></ProfileImage>
    </>
  );
};

ProfileImg.propTypes = {
  size: PropTypes.oneOf(["small", "middle", "large"]),
};

ProfileImg.defaultProps = {
  size: "large",
};

export default ProfileImg;
