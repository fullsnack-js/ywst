import { DisplayPost as Post } from "types/sanity.documents";
import BlogPreviewCard from "./PreviewCard";

interface PreviewListProps {
  posts: Post[];
}

const PreviewList = ({ posts }: PreviewListProps) => {
  return (
    <div tw="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div tw="absolute inset-0">
        <div tw="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div tw="relative max-w-7xl mx-auto">
        <div tw="text-center">
          <h2 tw="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p tw="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div tw="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post, index) => (
            <BlogPreviewCard key={post._id ?? index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewList;
