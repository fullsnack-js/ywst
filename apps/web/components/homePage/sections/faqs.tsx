import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import tw from "twin.macro";
import { FaqSection as Faqs } from "types/sanity.objects";
import { PortableText } from "../../common/portableText";

export default function FaqSection({
  items: faqs,
  title = `Frequently Asked Questions`,
}: Faqs) {
  return (
    <div tw="bg-gray-50">
      <div tw="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div tw="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 tw="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title} ??
          </h2>
          <dl tw="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs?.map((faq) => (
              <Disclosure as="div" key={faq.question} tw="pt-6">
                {({ open }) => (
                  <>
                    <dt tw="text-lg">
                      <Disclosure.Button tw="text-left w-full flex justify-between items-start text-gray-400">
                        <span tw="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span tw="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            css={[
                              tw`h-6 w-6 transform rotate-0`,
                              open && tw`-rotate-180`,
                            ]}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel
                      as="dd"
                      css={[tw`px-4 pt-4 pb-2`]}
                      tw="mt-2 pr-12">
                      <p tw="text-base text-gray-500">
                        <PortableText blocks={faq.answer} />
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
