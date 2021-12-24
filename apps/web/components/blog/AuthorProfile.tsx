import { Author } from "types/sanity.documents";
import { urlFor } from "@lib/sanity";
import { PortableText } from "@components/common/portableText/Block";

type Props = {
  author: Author;
  location?: string;
};

const DEFAULT_IMAGE = "https://avatars.githubusercontent.com/u/67946056?v=4";
const DEFAULT_LOCATION = "Brooklyn, NY, USA";
const DEFAULT_BIO = "Iyengar Yoga instructor in Brooklyn, NYC";
export const AuthorProfileCard = ({
  author,
  location = DEFAULT_LOCATION,
}: Props) => {
  const { image, name, email, bio } = author;
  const imageUrl = urlFor(image!).width(1024).height(1024).fit("crop").url()!;
  return (
    <div tw="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
      <div tw=" w-96 mx-auto bg-white  shadow-xl hover:shadow">
        <img
          tw="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
          src={imageUrl}
          alt=""
        />
        <div tw="text-center mt-2 text-3xl font-medium">{name}</div>
        <div tw="text-center mt-2 font-light text-sm">{email}</div>
        <div tw="text-center font-normal text-lg">{location}</div>
        <div tw="px-6 text-center mt-2 font-light text-sm">
          <p>{bio && <PortableText blocks={bio} />}</p>
        </div>
        {/* <hr tw="mt-8" />
        <div tw="flex p-4">
          <div tw="w-1/2 text-center">
            <span tw="font-bold">1.8 k</span> Followers
          </div>
          <div tw="w-0 border border-gray-300"></div>
          <div tw="w-1/2 text-center">
            <span tw="font-bold">2.0 k</span> Following
          </div>
        </div> */}
      </div>
    </div>
  );
};
