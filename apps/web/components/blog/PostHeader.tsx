import { ImageObject } from "@lib/sanity";
import React from "react";
import { Category } from "types/sanity.documents";
import CoverImage from "./CoverImage";
import Date from "./Date";
// import PostTitle from "./PostTitle";
import tw, { styled, css, screen, theme } from "twin.macro";

const styles = {
  grid: [
    screen`sm`({
      ...tw`grid grid-cols-1 gap-x-8 grid-cols-3`,
    }),
  ],
  date: [
    css`
      margin: 2rem 0 3rem;
    `,
    tw`text-sm`,
  ],
  categories: [
    tw`border-t border-solid border-gray-300 mt-8 mx-0 mb-12`,
    css`
      ul {
        list-style-type: none;
        margin: 0.75rem 0;
        padding: 0;
      }
      ul li {
        padding: 0.25rem 0;
      }
    `,
  ],
};
type Props = {
  title: string;
  coverImage?: ImageObject;
  date: string;
  readingTime: number;
  categories: Category[];
};
// todo fallback image?

const PostTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 tw="text-5xl md:text-6xl lg:text-7xl font-display leading-relaxed  mb-12 md:text-left">
    {children}
  </h1>
);
const PostHeader: React.FC<Props> = ({
  title,
  coverImage,
  date,
  readingTime,
  categories,
}) => {
  const categoryList = categories.map((category) => (
    <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {category.title}
    </span>
  ));
  return (
    <>
      <div tw="mb-8 md:mb-16">
        <CoverImage
          title={title}
          imageObject={coverImage!}
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 600px, (max-width: 1023px) 728px, (max-width: 1279px) 984px, 1240px"
          priority
        />
      </div>
      <PostTitle>{title}</PostTitle>
      <div tw="max-w-2xl mx-auto">
        <div>{categoryList}</div>
        <div tw="font-secondary flex justify-between mb-6 text-lg">
          <Date dateString={date} />
          <div>{readingTime} minutes</div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
