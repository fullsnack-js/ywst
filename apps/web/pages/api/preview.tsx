import { NextApiHandler } from "next";
import { previewClient } from "@lib/sanity";
import { allPostsSlugQuery } from "lib/queries";

// eslint-disable-next-line consistent-return
const handler: NextApiHandler = async (req, res) => {
  const { secret, type, slug } = req.query;

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (secret !== process.env.SANITY_STUDIO_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!slug || !type) {
    return res.status(401).json({ message: "No slug or type given" });
  }
  // Check if the page with the given `slug` exists
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const pageSlugs = await previewClient.fetch(allPostsSlugQuery, {
    slug,
  });

  // eslint-disable-next-lpostSlugsQueryine @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const pageSlug = pageSlugs.find((resultSlug: string) => resultSlug === slug);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!pageSlug) {
    return res.status(401).json({ message: "No page data found" });
  }
  console.log({ pageSlugs });
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities

  if (type === "post") {
    res.writeHead(307, { Location: `/blog/${slug}` });
  } else {
    res.writeHead(307, { Location: `/${slug}` });
  }

  res.end();
};

export default handler;
