import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="mt-4">
      <div class="bg-gray-400 p-4 rounded-t-xl flex justify-between">
        <div class="text-lg font-bold">Devsite - Luc Young</div>
        <div>
          <ul class="flex space-x-8 font-semibold">
            <a href="/" title="Home">
              Home
            </a>
            <a href="/about" title="About">
              About
            </a>
            <a href="/projects" title="Projects">
              Projects
            </a>
            <a href="/info" title="info ">
              Info
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
});
