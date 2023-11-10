/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, Arial, sans-serif",
        serif: "'Playfair Display', 'Times New Roman', serif",
        monospace: "Inconsolata, 'Courier New', monospace",
      },
      fontSize: {
        "2xs": "clamp(0.64rem, calc(0.66rem + 0.02vw), 0.65rem)",
        xs: "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem)",
        sm: "clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem)",
        base: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
        xl: "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)",
        "2xl": "clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem)",
        "3xl": "clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)",
        "4xl": "clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)",
        "5xl": "clamp(2.8rem, calc(2.45rem + 1.77vw), 3.82rem)",
        "6xl": "clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)",
      },
      spacing: {
        0: "0em",
        1: "clamp(0.13em, calc(0.13em + 0vw), 0.13em)",
        2: "clamp(0.31em, calc(0.31em + 0vw), 0.31em)",
        3: "clamp(0.56em, calc(0.54em + 0.11vw), 0.63em)",
        4: "clamp(0.88em, calc(0.85em + 0.11vw), 0.94em)",
        5: "clamp(1.13em, calc(1.08em + 0.22vw), 1.25em)",
        6: "clamp(1.69em, calc(1.62em + 0.33vw), 1.88em)",
        7: "clamp(2.25em, calc(2.16em + 0.43vw), 2.5em)",
        8: "clamp(3.38em, calc(3.24em + 0.65vw), 3.75em)",
        9: "clamp(4.5em, calc(4.33em + 0.87vw), 5em)",
        10: "clamp(6.75em, calc(6.49em + 1.3vw), 7.5em)",
      },
    },
  },
  plugins: [],
};
