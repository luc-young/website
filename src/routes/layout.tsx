import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="page">
      <main class="bg-gray-400 py-1 px-4 ">
        <Header />

        <Slot />
      </main>

      <Footer />
    </div>
  );
});
