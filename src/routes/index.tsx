import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Infobox from "~/components/infobox/infobox";

export default component$(() => {
  return (
    <>
      <div class="section">
        <div class="container topics">
          <div>
            <Infobox>
              Have a look at the <a href="flower">Flower App</a>{" "}
            </Infobox>
          </div>
        </div>
      </div>
    </>
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
