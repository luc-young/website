import { component$ } from "@builder.io/qwik";
import type { JSXNode } from "@builder.io/qwik";

import FooterLink from "./footerLink";
import { links } from "./footerLinks.data";

export default component$(() => {
  const renderedLinks: JSXNode[] = [];
  const renderLinks = () => {
    (Object.keys(links) as Array<keyof typeof links>).forEach(function (key) {
      renderedLinks.push(
        <FooterLink logoSrc={links[key]?.logo} linkUrl={links[key]?.url} />
      );
    });

    return renderedLinks;
  };

  return (
    <div class="flex justify-evenly items-center bg-gray-400 py-4">
      {renderLinks()}
    </div>
  );
});
