import { getClient, sanityClient } from "@lib/sanity";
import { DisplayPost } from "types/sanity.documents";
import { authorFields, portableTextMarks, postFields } from "./fragments";

export const postsQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    _id,
    content[]{
      ${portableTextMarks}
    },
    "author": author->{${authorFields}},
    "tags": tags[].value,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc) [0...2] {
    ${postFields}
  }
}`;

const allPostsSlugQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const blogIndexQuery = `
*[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
  ${postFields}
}`;

const getUniquePosts = (posts: DisplayPost[]) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

export async function getAllPostsSlug(): Promise<string[]> {
  const data = await sanityClient.fetch<string[]>(allPostsSlugQuery);
  return data;
}

export async function getAllPosts(preview: boolean): Promise<DisplayPost[]> {
  const currentClient = getClient(preview);
  const allPosts = await currentClient.fetch<DisplayPost[]>(blogIndexQuery);
  return getUniquePosts(allPosts);
}

export async function getPostAndMorePosts({
  slug,
  preview,
}: {
  slug: string;
  preview: boolean;
}) {
  const currentClient = getClient(preview);
  const { post, morePosts } = await currentClient.fetch(postsQuery, {
    slug,
  });
  return { post, morePosts: getUniquePosts(morePosts) };
}
