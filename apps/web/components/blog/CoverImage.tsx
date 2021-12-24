import {
  sanityClient,
  custom16by9ImageBuilder,
  ImageObject,
} from "@lib/sanity";
import { Slug } from "@sanity/types";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

type Props = {
  title: string;
  imageObject: ImageObject;
  sizes?: string;
  slug?: Slug;
  priority?: boolean;
};

// "mainImage":{
// "_type":"image"
// "alt":"woman meditating at sunset"
// "asset":{...}
// "source":"Photo by @jareddrice on Unsplash"
// }

const CoverImage: React.FC<Props> = ({
  title,
  imageObject,
  sizes = null,
  slug = null,
  priority = false,
}) => {
  const imageProps = useNextSanityImage(sanityClient, imageObject, {
    imageBuilder: custom16by9ImageBuilder,
  });

  const image = (
    <Image
      {...imageProps}
      sizes={sizes ?? ""}
      alt={imageObject.alt ?? `Cover for ${title}`}
      layout="responsive"
      priority={priority}
    />
  );

  return (
    <div className="-mx-5 bg-gray-300 sm:mx-0">
      {slug ? (
        <NextLink href={`/blog/${slug?.current}`}>
          <a
            aria-label={title}
            tw="block shadow-lg hover:shadow-xl focus:shadow-xl transition-shadow duration-200">
            {image}
          </a>
        </NextLink>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
