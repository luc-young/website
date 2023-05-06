import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Infobox from "~/components/infobox/infobox";

export default component$(() => {
  return (
    <div>
      <hr class="default-hr" />
      <div>
        <Infobox>
          Have a look at the <a href="bubbleSort">Bubble Sorter</a>
        </Infobox>
      </div>
      <hr class="default-hr" />
    </div>
  );
});

export const head: DocumentHead = {
  title: "luc Young",
  meta: [
    {
      name: "description",
      content: "Personal portfolio Site For Luc Young",
    },
  ],
};
