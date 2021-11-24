import { groq } from "next-sanity";
// import { legalFields, pageFields } from "./fragments";

export const allRoutePathsQuery = groq`*[_type == "route" && defined(slug.current)][].slug.current`;

export const singleRouteQuery = groq`
  *[_type == "route" && slug.current == $slug]{
    routeId,
    "slug": slug.current,
    includeInSitemap,
    "landingPage":  page.reference -> {
      _id,
      _type,
      title,
      _type == "legal" => {
        title,
        contact->{...,},
        content,
        last_modified
      },
      _type == "page" => {
        pageId,
        title,
        tagline,
        content
      }
    }
  }
`;
