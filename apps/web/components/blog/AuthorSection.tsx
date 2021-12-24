import { Author } from "types/sanity.documents";
import { urlFor } from "@lib/sanity";
import { asideStyles } from "./PostAside";

interface Props {
  author: Author;
}

export const AuthorSection = ({ author }: Props) => (
  <section css={asideStyles.root}>
    <h3 css={asideStyles.header} tw="mx-0 mb-0">
      <span>Author</span>
    </h3>
    <ul css={asideStyles.list}>
      {" "}
      <li
        tw="text-sm md:flex justify-center items-center my-4 mx-0"
        key={author._id}>
        <div tw="space-y-4">
          <img
            tw="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
            src={
              urlFor(author!.image!).width(1024).height(1024).fit("crop").url()!
            }
            alt=""
          />
          <div tw="space-y-2">
            <div tw="text-xs font-medium lg:text-sm">
              <h3>{author.name}</h3>
              <p tw="text-indigo-600">Co-Founder / CTO</p>
            </div>
          </div>
        </div>
        {/* <div>
         <div css={asideStyles.avatar}>
            <img
              src={
                urlFor(author!.image!).width(100).height(100).fit("crop").url()!
              }
              alt="author.name"
            />
          </div>
        </div>
        <div>*/}
        {/* <strong>{author.name}</strong> */}
        {/* </div> */}
      </li>
    </ul>
  </section>
);
