import { Legal, Route } from "types/sanity.documents";
import Date from "@components/common/Date";
import { TextSectionUi as BlockContent } from "@components/homePage/sections";

interface Props {
  page: Legal;
  slug: Route["slug"];
}

const LegalPage = ({ page, slug }: Props) => {
  const { email, name } = page.contact;
  return (
    <div tw="container p-8">
      <div>
        <h2>{page.title}</h2>
        <BlockContent text={page.content} />
        <h5 tw="text-xl font-semibold">Contact</h5>
        <p>
          Name: {name} Email:{" "}
          <a
            tw="hocus:(bg-blue-400 p-0.5 underline text-white)"
            href={`mailto:${email}`}>
            {email}
          </a>
        </p>
        Last Modified: <Date dateString={page.last_modified} />
      </div>
    </div>
  );
};

export default LegalPage;
