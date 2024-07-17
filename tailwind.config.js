/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basewhite: "var(--basewhite)",
        "neutral-300": "var(--neutral-300)",
        "neutral-50": "var(--neutral-50)",
        "neutral-500": "var(--neutral-500)",
        "primary-500": "var(--primary-500)",
        "primary-900": "var(--primary-900)",
      },
      fontFamily: {
        "body-extra-large-regular": "var(--body-extra-large-regular-font-family)",
        "body-large-medium": "var(--body-large-medium-font-family)",
        "body-large-regular": "var(--body-large-regular-font-family)",
        "body-large-semi-bold": "var(--body-large-semi-bold-font-family)",
        "body-medium-medium": "var(--body-medium-medium-font-family)",
        "body-medium-regular": "var(--body-medium-regular-font-family)",
        "body-medium-semi-bold": "var(--body-medium-semi-bold-font-family)",
        "body-small-regular": "var(--body-small-regular-font-family)",
        "body-small-semi-bold": "var(--body-small-semi-bold-font-family)",
        "headline-headline-2-medium": "var(--headline-headline-2-medium-font-family)",
        "headline-headline-4-semi-bold": "var(--headline-headline-4-semi-bold-font-family)",
        "headline-headline-5-medium": "var(--headline-headline-5-medium-font-family)",
        "headline-headline-5-semi-bold": "var(--headline-headline-5-semi-bold-font-family)",
      },
    },
  },
  plugins: [],
};
