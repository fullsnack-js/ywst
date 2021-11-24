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
  type?: DocType;
  _type?: DocType;
}

export const pathResolver = ({ slug, type, _type }: PathProps) => {
  if (!type || !_type) return "Missing document type!";
  const docType = _type ?? type;
  const pathPrefix = prefixMap[docType];
  return `${pathPrefix}/${slug}`;
};
