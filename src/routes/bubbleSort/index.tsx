import {
  component$,
  useVisibleTask$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import styles from "./bubbleSort.css?inline";

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
      <h1 class="h1">Bubble Sort</h1>
      <div class="container center">
        <input
          maxLength={30}
          minLength={10}
          type="number"
          value={state.number}
          class="input"
          onInput$={(ev) => {
            if (state.number > 30) {
              state.number = 30;
            } else {
              state.number = (ev.target as HTMLInputElement).valueAsNumber;
            }
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
          <table class="table">
            <tbody>
              <tr>
                {Array.from({ length: state.number }, (_, i) => (
                  <>
                    <td
                      key={i}
                      class={{
                        square: true,
                      }}
                      style={{
                        "--index": `${i + 1}`,
                        "--amount": `${i + Math.random() * 480}px`,
                      }}
                    />
                  </>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Bubble Sort",
};
