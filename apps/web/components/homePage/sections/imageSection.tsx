import {
  sanityClient,
  customImageBuilder,
  urlFor,
  // ImageObject,
} from "@lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { ImageSection } from "types/sanity.objects";
import { PortableText } from "@components/common/portableText";

type Props = Pick<ImageSection, "image" | "caption">;

const ImageBlock = ({ image, caption }: Props) => {
  const { alt, asset } = image!;
  const imageProps = useNextSanityImage(sanityClient, image, {
    imageBuilder: customImageBuilder,
  });
  return (
    <figure>
      <Image
        {...imageProps}
        // src={asset.url}
        layout="responsive"
        alt={alt ?? ""}
        tw="bg-gray-300"
      />
      {caption && (
        <figcaption tw="px-5 sm:px-12 md:px-16 lg:px-32 xl:px-48">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
const ImageComponent = ({ heading, caption, text, image }: ImageSection) => {
  return (
    <>
      {heading && <h1>{heading}</h1>}
      {image && <ImageBlock image={image} caption={caption ?? ""} />}
      {text && <PortableText content={text} />}
    </>
  );
};
export default ImageComponent;
