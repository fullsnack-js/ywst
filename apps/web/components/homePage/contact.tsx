import { PortableText } from "@components/common/portableText";
import { SanityBlock } from "types/sanity.objects";

interface Props {
  title?: string;
  tagline?: SanityBlock;
}

export default function Contact({ title = "Contact Susan", tagline }: Props) {
  const Tagline = () => <PortableText blocks={tagline} />;
  const DEFAULT_TAGLINE = `Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.`;
  return (
    <div tw="mx-auto">
      <div tw="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div tw="relative max-w-xl mx-auto">
          <svg
            tw="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true">
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse">
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  tw="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            tw="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true">
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse">
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  tw="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <div tw="text-center">
            <h2 tw="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            <p tw="mt-4 text-lg leading-6 text-gray-500">
              {tagline && <Tagline />}
            </p>
          </div>
          <div tw="mt-12">
            <form
              action="#"
              method="POST"
              tw="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label
                  htmlFor="first-name"
                  tw="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div tw="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    tw="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  tw="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div tw="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    tw="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div tw="sm:col-span-2">
                <label
                  htmlFor="email"
                  tw="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div tw="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    tw="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div tw="sm:col-span-2">
                <label
                  htmlFor="message"
                  tw="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div tw="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    tw="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div tw="sm:col-span-2">
                <button
                  type="submit"
                  tw="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
