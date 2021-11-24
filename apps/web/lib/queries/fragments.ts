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
      "link": internalLink{
        title,
        "route": link->{
          ...,
          "slug": slug.current,
          "page": page.reference
        }
      }
    },
    linkType == "external" => {
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
