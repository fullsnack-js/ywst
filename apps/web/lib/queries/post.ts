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
export const indexQuery = `
*[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
  ${postFields}
}`;
export const allPostsSlugQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;
export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}`;
