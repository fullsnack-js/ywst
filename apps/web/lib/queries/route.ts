import { getClient, sanityClient } from "@lib/sanity";
import { Route } from "types/sanity.documents";
import { pageModules, portableTextMarks } from "./fragments";

const allRoutePathsQuery = `*[_type == "route" && defined(slug.current)][].slug.current`;

export const singleRouteQuery = `
  *[_type == "route" && slug.current == $slug]{
    routeId,
    "slug": slug.current,
    includeInSitemap,
    "landingPage":  page.link -> {
      _id,
      _type,
      title,
      _type == "legal" => {
        title,
        contact->{${portableTextMarks}},
        content,
        last_modified
      },
      _type == "page" => {
        pageId,
        title,
        tagline,
        content[]{${pageModules}}
      }
    }
  }
`;

export async function getAllRoutesWithSlug(): Promise<string[]> {
  return await sanityClient.fetch<string[]>(allRoutePathsQuery);
}

export async function getRoutePage({ slug }: { slug: string }) {
  return await sanityClient.fetch<Route>(singleRouteQuery, { slug });
}
