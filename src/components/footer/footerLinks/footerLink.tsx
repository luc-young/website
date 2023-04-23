import { component$ } from "@builder.io/qwik";

type LinkData = {
  linkUrl: string;
  logoSrc: string;
};

export default component$(({ linkUrl, logoSrc }: LinkData) => {
  return (
    <a href={linkUrl} title={`lucjdyoung ${linkUrl}`}>
      <img src={logoSrc} alt="some file" height="70" width="70" />
    </a>
  );
});
