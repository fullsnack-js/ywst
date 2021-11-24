import { Category } from "types/sanity.documents";
import Link from "next/link";
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
      {categories.map((category) => (
        <Link href={`${category.slug}`}>
          <li css={asideStyles.listItem({ isCat: true })} key={category._id}>
            #{category.title}
          </li>
        </Link>
      ))}
    </ul>
  </div>
);
