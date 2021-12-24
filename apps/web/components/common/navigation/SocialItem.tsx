import { getIcon } from "@utils/socialIcons";
import { Social } from "types/sanity.objects";

export const SocialItem = ({ type, url }: Social) => {
  const Icon = getIcon(type);
  return (
    <a key={type} href={url} tw="text-gray-400 hover:text-gray-500">
      <span tw="sr-only">{type}</span>
      <Icon tw="h-6 w-6" aria-hidden="true" />
    </a>
  );
};
