import { JSXNode, component$ } from "@builder.io/qwik";
import styles from "../footer.module.css";
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

  return <div class={styles.linkWrap}>{renderLinks()}</div>;
});
