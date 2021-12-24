export const authorFields = `
  _id,
  name,
  bio,
  email,
  "slug": slug.current,
  "image": image.image{alt, "url":asset->url},
`;

export const navFields = `
  ...,
  navLink{
    linkType == "internal"=> {
      linkType,
      "link": internalLink{
        title,
        "route": link->{
          ...,
          "slug": slug.current,
          "landingPage": page.reference
        }
      }
    },
    linkType == "external" => {
      linkType,
      "link": externalLink{...,}
    },
  }
`;

export const portableTextMarks = `
...,
markDefs[]{
  ...,
  _type == "internalLink" => {
    title,
    "slug": @.link->slug.current,
    "type": @.link->_type
  }
}
`;

export const seoFields = `
  ...,
  "metaKeywords": metaKeywords[].value,
  metaImage{..., asset->},
`;

export const siteSettingsFields = `
  title,
  footerNav[]{${navFields}},
  mainNav[]{${navFields}},
  contactEmail,
  socials,
  seo{${seoFields}}
`;

export const postFields = `
  title,
  "mainImage": mainImage.image{..., asset->},
  excerpt,
  publishedAt,
  "categories": categories[] -> {
    "slug": slug.current,
    title
  } | order(lower(title)),
  "slug": slug.current,
  seo{${seoFields}},
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 120 )
`;

export const pageModules = `
  ...,
  _type == "imageSection" => {
    ...,
    "image": image.image{..., asset->}
  },
  _type == "textSection" => {
    ...,
    text[]{${portableTextMarks}}
  }
`;
