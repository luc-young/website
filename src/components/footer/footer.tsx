import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import FooterLinks from "./footerLinks/footerLinks";

export default component$(() => {
  const serverTimeDate = useServerTimeLoader();
  const timeDate = serverTimeDate.value.date.split("T");

  return (
    <footer>
      <FooterLinks />
      <div class="flex py-2 px-6 justify-between bg-gray-600 text-white">
        <span>{timeDate[1].slice(0, 8)}</span>
        <span>version {process.env.APP_VERSION}</span>
        <span>{timeDate[0].replace(/-/gi, "/")}</span>
      </div>
    </footer>
  );
});
