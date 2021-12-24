import { urlFor, usePreviewSubscription } from "@lib/sanity";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import PostHead from "@components/blog/PostHead";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { postsQuery, getPostAndMorePosts, getAllPostsSlug } from "@lib/queries";
import Post from "@components/blog/BlogPost";
import { Post as BlogPost } from "types/sanity.documents";

type Params = {
  slug: string;
};

interface DataProps {
  post: BlogPost;
  morePosts: BlogPost[];
}

interface Props {
  data: DataProps;
  preview: boolean;
}

const BlogPostPage = ({ data, preview }: Props): JSX.Element => {
  const router = useRouter();

  const slug = data?.post?.slug;

  const { data: freshData } = usePreviewSubscription(postsQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && Boolean(slug),
  });

  if (!freshData?.post || (!router.isFallback && !slug)) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(data?.post);
  const {
    publishedAt,
    title,
    excerpt,
    categories,
    seo,
    mainImage,
    estimatedReadingTime,
    body,
    author,
  } = freshData.post;

  return (
    <>
      {/* <GlobalStyles /> */}
      {/* <PostHead
        title={title}
        author={author!.name!}
        description={seo?.description || excerpt || ""}
        ogImage={urlFor(mainImage.asset).url()!}
      /> */}
      <main>
        <Post post={freshData.post} />
      </main>
    </>
  );
};
export async function getStaticProps({
  params,
  preview = process.env.NODE_ENV === "development",
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
  const { post, morePosts } = await getPostAndMorePosts({
    slug: params!.slug,
    preview,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts,
      },
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsSlug();
  return {
    paths: allPosts?.map((slug: any) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default BlogPostPage;
