import { Post as BlogPost } from "types/sanity.documents";
import { AuthorSection } from "./AuthorSection";
import { CategoryList } from "./CategoryList";
import tw, { styled, css, screen, theme } from "twin.macro";
export const asideStyles = {
  aside: [tw`font-body col-span-1 md:col-span-1 p-3`],
  header: [
    tw`font-semibold mt-2 `,
    css({
      span: tw`border-b-2 border-yellow-700`,
    }),
  ],
  root: [tw`border-t border-solid border-gray-400 mt-8 mx-0 mb-12 ml-4`],
  list: [
    tw`m-0 list-none p-0`,
    css({
      "li > div:last-child": tw`ml-2 flex-1`,
    }),
  ],
  listItem: ({ isCat }: { isCat?: boolean }) => [
    tw`text-sm md:flex justify-center items-center my-4 mx-0`,
    isCat && tw`py-1 my-2 px-0 capitalize`,
  ],

  avatar: [
    css`
      width: 3em;
      height: 3em;
      ${tw`bg-gray-300 relative overflow-hidden`};
      border-radius: 50%;

      img {
        ${tw`w-full h-full align-top object-cover`}
      }
    `,
  ],
};

interface AsideProps {
  color: string;
  opacity: string;
}
const heroPattern = ({ color, opacity }: AsideProps) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="${color}" fill-opacity="${opacity}"><polygon fill-rule="evenodd" points="8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4"/></g></svg>`;
const Aside = ({
  color,
  opacity,
  children,
}: {
  color: string;
  opacity: string;
  children: React.ReactNode | React.ReactNode[];
}) => {
  const pattern = heroPattern({ color, opacity });
  const StyledAside = styled.aside(() => [
    css({
      backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(pattern)})`,
    }),
  ]);
  return <StyledAside>{children}</StyledAside>;
};
export const NewsDiv = ({
  color,
  opacity,
  children,
}: {
  color: string;
  opacity: string;
  children: React.ReactNode | React.ReactNode[];
}) => {
  const pattern = heroPattern({ color, opacity });
  const StyledDiv = styled.div(() => [
    css({
      backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(pattern)})`,
    }),
  ]);
  return <StyledDiv>{children}</StyledDiv>;
};
interface Props {
  post: Pick<BlogPost, "author" | "categories">;
}
const PostAside = ({ post }: Props) => (
  <Aside
    color={"#dbe0e5"}
    opacity={"0.6"}
    tw="p-8 bg-gray-500 font-body col-span-1 md:col-span-1">
    <div tw="text-sm font-medium px-3 mt-8 mx-0 mb-8"></div>
    {/* <AuthorProfileCard author={post.author} /> */}
    <AuthorSection author={post.author} />
    <CategoryList categories={post.categories} />
  </Aside>
);

export default PostAside;
