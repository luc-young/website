import { Slot, component$ } from "@builder.io/qwik";
import styles from "./infobox.module.css";

export default component$(() => {
  return (
    <div class={styles.infobox}>
      <Slot />
    </div>
  );
});
