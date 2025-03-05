import { css } from 'lit';

export const globalStyles = css`
  @layer reset {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    /* https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/ */
    html {
      -moz-text-size-adjust: none;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    /* https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html */
    [role='list'] {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    body {
      min-block-size: 100vh;
      line-height: 1.6;
    }

    h1,
    h2,
    h3,
    button,
    input,
    label {
      line-height: 1.1;
    }

    h1,
    h2,
    h3,
    h4 {
      text-wrap: balance;
    }

    p,
    li {
      text-wrap: pretty;
    }

    img,
    picture {
      max-inline-size: 100%;
      display: block;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }
  }

  @layer base {
    :root {
      --clr-white: hsl(0, 0%, 100%);
      --clr-black: hsl(0, 0%, 7%);

      --clr-orange-500: hsl(28, 43%, 28%);
      --clr-red-500: hsl(359, 34%, 24%);
      --clr-beige-500: hsl(26, 14%, 90%);

      --ff-heading: 'Outfit', sans-serif;
      --ff-body: 'Fira Sans', sans-serif;

      --fs-300: 0.875rem;
      --fs-400: 1rem;
      --fs-500: 1.125rem;
      --fs-600: 1.25rem;
      --fs-700: 1.5rem;
      --fs-800: 2rem;
      --fs-900: 3.75rem;
      --fs-1000: 3.75rem;

      @media (width > 760px) {
        --fs-300: 0.875rem;
        --fs-400: 1rem;
        --fs-500: 1.25rem;
        --fs-600: 1.5rem;
        --fs-700: 2rem;
        --fs-800: 3rem;
        --fs-900: 5rem;
        --fs-1000: 7.5rem;
      }
    }
    /* in another selector for syntax highlighting reasons only */
    :root {
      --text-main: var(--clr-black);
      --text-high-contrast: var(--clr-white);

      --background-main: var(--clr-beige-500);
      --background-dark: var(--clr-black);

      --font-size-heading-sm: var(--fs-700);
      --font-size-heading-regular: var(--fs-800);

      --font-size-sm: var(--fs-300);
      --font-size-regular: var(--fs-400);
      --font-size-md: var(--fs-500);
      --font-size-lg: var(--fs-600);

      --border-radius-1: 0.25rem;
      --border-radius-2: 0.5rem;
      --border-radius-3: 0.75rem;
    }
  }

  @layer base {
    body {
      font-family: var(--ff-body);
      font-size: var(--font-size-regular);
      color: var(--text-main);
      background-color: var(--background-main);
    }

    h1,
    h2,
    h3,
    h4 {
      font-family: var(--ff-heading);
      font-weight: 700;
    }

    a:hover,
    a:focus-visible {
      color: var(--text-brand-light);
    }
  }

  @layer utilities {
    .visually-hidden {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }

  @media (prefers-color-scheme: dark) {
    body {
      color: var(--clr-white);
    }
  }
`;

const sheet = new CSSStyleSheet();
sheet.replaceSync(globalStyles.cssText);

export const globalStyleSheet = sheet;
