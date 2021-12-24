import { urlFor } from "@lib/sanity";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Seo } from "types/sanity.objects";
import SEO from "../../next-seo.config";

interface Props {
  seo?: Seo;
  defaultSeo?: Seo;
}

const ComponentSeo = ({ seo, defaultSeo }: Props) => {
  const router = useRouter();
  const title = seo?.metaTitle ?? defaultSeo?.metaTitle ?? SEO.title;
  const description =
    seo?.metaDescription ?? defaultSeo?.metaTitle ?? SEO.description;
  const url = `${SEO.openGraph.url}${router.asPath.replace("/", "")}`;
  const openGraphTitle = seo?.metaTitle ?? defaultSeo?.metaTitle ?? SEO.title;
  const openGraphDescription =
    seo?.metaDescription ?? defaultSeo?.metaDescription ?? SEO.description;
  const imageUrl =
    (seo?.metaImage?.asset &&
      urlFor(seo.metaImage.asset)
        .auto("format")
        .width(600)
        .height(600)
        .url()) ??
    SEO.openGraph.images[0].url;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title: openGraphTitle,
        description: openGraphDescription,
        images: [
          {
            url: imageUrl,
            alt: description,
            width: 1280,
            height: 720,
          },
        ],
      }}
    />
  );
};

export default ComponentSeo;
