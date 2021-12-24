import React from "react";
import { PortableText } from "../../common/portableText";
import { TextSection as TextSectionProps } from "types/sanity.objects";

const TextSection: React.FC<Omit<TextSectionProps, "_type" | "_key">> = ({
  heading,
  text,
}) => (
  <div tw="font-body text-black prose lg:prose-xl mx-auto max-w-2xl">
    {heading && <h3 tw="text-xl">{heading}</h3>}
    <PortableText blocks={text} />
  </div>
);

export default TextSection;
