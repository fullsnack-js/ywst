import { Category } from "types/sanity.documents";
import NextLink from "next/link";
import { asideStyles } from "./PostAside";

interface Props {
  categories: Category[];
}
export const CategoryList = ({ categories }: Props) => (
  <div css={asideStyles.root}>
    <h3 css={asideStyles.header}>
      <span>Categories</span>
    </h3>
    <ul css={asideStyles.list} tw="mx-0 my-3">
      {categories.map((category, index) => {
        console.log(category);
        return (
          <li
            key={category._id ?? index}
            css={asideStyles.listItem({ isCat: true })}>
            <NextLink href={`${category.slug}`}>
              <a>#{category.title}</a>
            </NextLink>
          </li>
        );
      })}
    </ul>
  </div>
);
