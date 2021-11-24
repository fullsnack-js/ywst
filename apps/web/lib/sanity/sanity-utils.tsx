import {
  SanityAsset,
  SanityImageObject,
  SanityImageSource,
  SanityReference,
} from "@sanity/image-url/lib/types/types";
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import { config } from "./config";
import {
  ImageUrlBuilder,
  useNextSanityImage,
  UseNextSanityImageBuilderOptions,
} from "next-sanity-image";
// import Image from "@/components/blocks/image";

export type SanityImageDimensions = {
  width: number;
  height: number;
  aspectRatio: number;
};

export type ImageObject = SanityImageSource & {
  alt?: string;
  caption?: string;
};

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);

export const getSanityRefId = (image: ImageObject): string => {
  if (typeof image === "string") {
    return image;
  }

  const obj = image as SanityImageObject;
  const ref = image as SanityReference;
  const img = image as SanityAsset;

  if (typeof image === "string") {
    return image;
  }

  if (obj.asset) {
    // eslint-disable-next-line no-underscore-dangle
    return obj.asset._ref || (obj.asset as SanityAsset)._id;
  }

  // eslint-disable-next-line no-underscore-dangle
  return ref._ref || img._id || "";
};

export const custom16by9ImageBuilder = (
  imageUrlBuilder: ImageUrlBuilder,
  options: UseNextSanityImageBuilderOptions
): ImageUrlBuilder => {
  const width =
    options.width || Math.min(options.originalImageDimensions.width, 1240);
  return imageUrlBuilder
    .width(width)
    .height(Math.floor(width * 0.5625))
    .format("webp");
};

export const customImageBuilder = (
  imageUrlBuilder: ImageUrlBuilder,
  options: UseNextSanityImageBuilderOptions
): ImageUrlBuilder => {
  const width =
    options.width || Math.min(options.originalImageDimensions.width, 1240);
  return imageUrlBuilder
    .width(width)
    .height(Math.floor(width / options.originalImageDimensions.aspectRatio))
    .format("jpg");
};

export const getImageDimensions = (
  image: SanityImageSource
): SanityImageDimensions => {
  const id = getSanityRefId(image);
  const dimensions = id.split("-")[2];
  const [width, height] = dimensions
    .split("x")
    .map((num: string) => parseInt(num, 10));
  const aspectRatio = width / height;
  return { width, height, aspectRatio };
};

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
