import { RiLinksLine } from "react-icons/ri";
import { generateSlugField } from "../common/slug";
import { internalLink } from "../objects/fields";

export default {
  name: "route",
  title: "Route",
  type: "document",
  icon: RiLinksLine,
  fieldsets: [{ name: "visibility", title: "Visibility" }],
  fields: [
    {
      name: "routeId",
      type: "string",
      title: "Route Id",
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    {
      ...internalLink(["page", "legal"]),
      name: "page",
      title: "Page Reference",
      description: "Select the page that this route should point to",
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    {
      ...generateSlugField({
        name: "slug",
        source: "routeId",
        maxLength: 100,
      }),
      hidden: ({ parent }) => !parent?.page,
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    {
      title: "Include in sitemap",
      description: "For search engines. Will be generateed to /sitemap.xml",
      name: "includeInSitemap",
      type: "boolean",
      fieldset: "visibility",
    },
    {
      title: "Disallow in robots.txt",
      description: "Hide this route for search engines like google",
      name: "disallowRobots",
      type: "boolean",
      fieldset: "visibility",
    },
  ],
  preview: {
    select: {
      routeId: "routeId",
      slug: "slug.current",
    },
    prepare({ routeId, slug = "Slug not set" }) {
      return {
        title: routeId,
        subtitle: `/${slug}`,
      };
    },
  },
};
