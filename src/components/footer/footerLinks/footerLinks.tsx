import { component$ } from "@builder.io/qwik";
import styles from "../footer.module.css";
import FooterLink from "./footerLink";
import { links } from "./footerLinks.data";

export default component$(() => {
  return (
    <div class={styles.linkWrap}>
      <FooterLink logoSrc={links.github.logo} linkUrl={links.github.url} />
      <FooterLink logoSrc={links.twitter.logo} linkUrl={links.twitter.url} />
    </div>
  );
});
