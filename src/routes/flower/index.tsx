import {
  component$,
  useVisibleTask$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import styles from "./flower.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const state = useStore({
    count: 0,
    number: 20,
  });

  useVisibleTask$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <div class="section">
      <div class="container center">
        <input
          type="range"
          value={state.number}
          max={50}
          onInput$={(ev) => {
            state.number = (ev.target as HTMLInputElement).valueAsNumber;
          }}
        />
        <div
          style={{
            "--state": `${state.number * 0.1}`,
          }}
          class={{
            host: true,
            pride: "true",
          }}
        >
          {Array.from({ length: state.number }, (_, i) => (
            <>
              {console.log(i + Math.random() * 100)}
              <div
                key={i}
                class={{
                  square: true,
                }}
                style={{
                  "--index": `${i + 1}`,
                  "--amount": `${i + Math.random() * 500}px`,
                }}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Flower",
};
