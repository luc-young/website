import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="section">
        <div class="container topics">
          <div>
            Have a look at the <a href="/demo/flower">Flower App</a>{" "}
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
