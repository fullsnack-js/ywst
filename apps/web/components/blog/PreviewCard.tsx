import { DisplayPost } from "types/sanity.documents";
import Date from "@components/common/Date";
import NextLink from "next/link";
import { urlFor } from "@lib/sanity";

interface PreviewProps {
  post: DisplayPost;
}

const CategoryList = ({
  categories,
}: {
  categories: DisplayPost["categories"];
}) => (
  <div>
    {categories.map((category, index) => (
      <a
        key={category._id ?? index}
        href={`http://localhost:3000${category.slug}`}
        tw="inline-block pr-2.5">
        <span tw="capitalize bg-indigo-100 text-indigo-800 inline-flex items-center px-3.5 py-0.5 rounded-full text-sm font-medium">
          {category.title}
          {"  "}
        </span>
      </a>
    ))}
  </div>
);

const BlogPreviewCard = ({ post }: PreviewProps) => {
  return (
    <div
      key={post.title}
      tw="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div tw="flex-shrink-0">
        <NextLink href={`/blog/${encodeURIComponent(post.slug)}`}>
          <img
            tw="h-48 w-full object-cover"
            src={urlFor(post.mainImage).height(1024).width(1024).url()!}
          />
        </NextLink>
      </div>
      <div tw="flex-1 bg-white p-6 flex flex-col justify-between">
        <div tw="flex-1">
          <CategoryList categories={post.categories} />
          <NextLink href={`/blog/${encodeURIComponent(post.slug)}`}>
            <a tw="block mt-2">
              <p tw="text-xl font-semibold text-gray-900">{post.title}</p>
              <p tw="mt-3 text-base text-gray-500">{post.excerpt}</p>
            </a>
          </NextLink>
        </div>
        <div tw="mt-6 flex items-center">
          <div tw="flex-shrink-0">
            <a href="">
              <span tw="sr-only">Susan Turis</span>
              <img
                tw="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearh-48 w-full ea&facepad=2&w=256&h=256&q=80"
                alt="susanturis"
              />
            </a>
          </div>
          <div tw="ml-3">
            <p tw="text-sm font-medium text-gray-900">
              <a href="#" tw="hover:underline">
                Susan Turis
              </a>
            </p>
            <div tw="flex space-x-1 text-sm text-gray-500">
              <Date dateString={post.publishedAt} />
              <span aria-hidden="true">&middot;</span>
              <span>{post.estimatedReadingTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
