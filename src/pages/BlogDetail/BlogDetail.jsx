import { useParams } from "react-router-dom";
import Banner from "../../components/modules/Banner/Banner";
import BlogDetailContents from "../../components/modules/BlogDetailContents/BlogDetailContents";

const BlogDetail = ({ blogData }) => {
  let { id } = useParams();

  const posts = blogData.posts;
  const post = posts?.find((post) => post.id + "" === id);

  const created = post.created;
  const strCreated = created.split(".");

  const createdDate =
    new Date(strCreated[0], strCreated[1], strCreated[2]) + "";

  const day = createdDate.slice(0, 3);
  const month = createdDate.slice(4, 7);
  const date = createdDate.slice(8, 10);

  return (
    <>
      <Banner
        imgSrc={post.mainBg}
        bannerType="blog-banner"
        subText={month}
        mainText={date}
        description={day}
      ></Banner>
      <BlogDetailContents post={post}></BlogDetailContents>
    </>
  );
};

export default BlogDetail;
