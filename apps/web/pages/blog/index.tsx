import { indexQuery } from "@lib/queries";
import { getClient } from "@lib/sanity";
import { GetStaticPropsResult } from "next";
import BlogPreviewList from "@components/blog/PreviewList";
import { DisplayPost } from "types/sanity.documents";

interface BlogProps {
  posts: DisplayPost[];
}

const BlogIndex = ({ posts }: BlogProps): JSX.Element => {
  return (
    <>
      <main>
        <BlogPreviewList posts={posts} />
      </main>
    </>
  );
};

export async function getStaticProps({
  preview = process.env.NODE_ENV === "development",
}): Promise<GetStaticPropsResult<BlogProps>> {
  const posts = await getClient(preview).fetch(indexQuery);
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts },
    revalidate: 60,
  };
}
export default BlogIndex;
