import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import FooterLinks from "./footerLinks/footerLinks";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <FooterLinks />
      <span class={styles.textWrap}>
        <span>{process.env.APP_NAME}</span>
        <span>version {process.env.APP_VERSION}</span>
        <span>{serverTime.value.date}</span>
      </span>
    </footer>
  );
});
