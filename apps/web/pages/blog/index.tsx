import { getAllPosts } from "@lib/queries";
import { getClient } from "@lib/sanity";
import { GetStaticPropsResult } from "next";
import BlogPreviewList from "@components/blog/PreviewList";
import { DisplayPost } from "types/sanity.documents";
import { BlogLayout } from "@components/layouts";
import { DEFAULT_SETTINGS } from "constants/siteSettings";
import { ScrollHeader } from "@components/common/ScrollHeader";

interface BlogProps {
  posts: DisplayPost[];
}

const BlogIndex = ({ posts }: BlogProps): JSX.Element => {
  const { mainNav } = DEFAULT_SETTINGS;
  return (
    <>
      <div css={{ height: "200vh", background: "transparent" }}>
        <ScrollHeader navigation={mainNav} />
        <main>
          <BlogPreviewList posts={posts} />
        </main>
      </div>
    </>
  );
};

export async function getStaticProps({
  preview = process.env.NODE_ENV === "development",
}): Promise<GetStaticPropsResult<BlogProps>> {
  const posts = await getAllPosts(preview);
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
BlogIndex.getLayout = (page: React.ReactElement) => (
  <BlogLayout>{page}</BlogLayout>
);
export default BlogIndex;
