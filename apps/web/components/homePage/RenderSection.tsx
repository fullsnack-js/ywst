import { isDefined } from "@utils/guards";
import * as React from "react";
import { Page } from "types/sanity.documents";
import { PageSection } from "types/sanity.objects";
import { FaqSectionUi, ImageSectionUi, TextSectionUi } from "./sections";

interface SectionProps {
  section: PageSection;
}

const renderPageSection = ({ section }: SectionProps) => {
  switch (section._type) {
    case "textSection":
      return (
        <TextSectionUi
          key={section._key}
          text={section.text}
          heading={section.heading}
        />
      );
    case "imageSection":
      return <ImageSectionUi key={section._key} {...section} />;
    case "faqs":
      return <FaqSectionUi key={section._key} {...section} />;
    default:
      console.warn("Failed to render section");
      if (process.env.NODE_ENV !== "production") {
        return <pre>{JSON.stringify(section, null, 2)}</pre>;
      }
      return null;
  }
};

interface ContentProps {
  sections: Page["content"];
}
export function RenderContentSections({ sections }: ContentProps) {
  if (!isDefined(sections) || !sections?.length) return null;
  const content = React.useMemo(() => {
    return sections.map((section) => renderPageSection({ section }));
  }, [sections]);
  return <>{content}</>;
}

export default RenderContentSections;
