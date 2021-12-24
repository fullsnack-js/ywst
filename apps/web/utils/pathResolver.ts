import { isEmptyString } from "./guards";

export const prefixMap = {
  page: "",
  legal: "",
  route: "",
  class: "/schedule",
  post: "/blog",
  category: "/blog/category",
};

type DocType = keyof typeof prefixMap;

interface PathProps {
  slug: string;
  _type: DocType;
}

export const pathResolver = ({ slug, _type }: PathProps) => {
  if (!_type || !slug) return "Missing document type and/or slug!";
  const docType = _type;
  const pathPrefix = prefixMap[docType];
  return isEmptyString(pathPrefix) ? `/${slug}` : `${pathPrefix}/${slug}`;
};
