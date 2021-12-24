import { Post as BlogPost } from "types/sanity.documents";
import CoverImage from "./CoverImage";
import PostBody from "./PostBody";
import PostAside from "./PostAside";
import tw from "twin.macro";
import Date from "@components/common/Date";

type Props = {
  post: BlogPost;
};

const Container = tw.div`p-6 sm:p-8 mx-auto max-w-5xl box-border`;
const PostTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 tw="pt-2 text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-relaxed mb-12 md:text-left">
    {children}
  </h1>
);
const Post: React.FC<Props> = ({ post }) => {
  const { author, categories, publishedAt } = post;
  const asideProps = { publishedAt, author, categories };
  return (
    <article tw="container mx-auto">
      <CoverImage title={post.title} imageObject={post.mainImage} />
      <Container>
        <div tw="grid grid-cols-1 md:grid-cols-3 gap-x-4 w-full">
          <div tw="background-image[none] col-span-1 md:col-span-2">
            <PostTitle>{post.title}</PostTitle>
            <Date dateString={post.publishedAt} />
            <PostBody content={post.content} />
          </div>
          <PostAside post={asideProps} />
        </div>
      </Container>
    </article>
  );
};

export default Post;
