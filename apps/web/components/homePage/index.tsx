import { Page, Route } from "types/sanity.documents";
import Contact from "./contact";
import RenderContentSections from "./RenderSection";

interface Props {
  page: Page;
  slug: Route["slug"];
}

const HomePage = ({ page, slug }: Props) => {
  return (
    <div>
      {slug === "contact" ? (
        <Contact title={page.title} tagline={page.tagline} />
      ) : (
        <h2>{page.title}</h2>
      )}
      {page.content?.length &&
        RenderContentSections({ sections: page.content })}
    </div>
  );
};

export default HomePage;
