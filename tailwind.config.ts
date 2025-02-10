import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        teko: ["var(--font-teko)", "system-ui", "sans-serif"],
        dela: ["var(--font-dela)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          content: "hsl(var(--card-content))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      margin: {
        5: ".5rem",
        4.5: ".45rem",
        4: ".4rem",
        3.5: ".35rem",
        3: ".3rem",
        2.5: ".25rem",
        2: ".2rem",
        1.5: ".15rem",
        1: ".1rem",
        0.5: ".05rem",
      },
      padding: {
        5: ".5rem",
        4.5: ".45rem",
        4: ".4rem",
        3.5: ".35rem",
        3: ".3rem",
        2.5: ".25rem",
        2: ".2rem",
        1.5: ".15rem",
        1: ".1rem",
        0.5: ".05rem",
        main: "3.6rem",
      },
      gap: {
        6: ".6rem",
        5: ".5rem",
        4.5: ".45rem",
        4: ".4rem",
        3.5: ".35rem",
        3: ".3rem",
        2.5: ".25rem",
        2: ".2rem",
        1.5: ".15rem",
        1: ".1rem",
        0.5: ".05rem",
      },
    },
    animation: {
      "spin-gradient": "spin-gradient 2s ease infinite",
      spinAndScale: "spinAndScale 2s ease infinite",
    },
    keyframes: {
      "spin-gradient": {
        "0%, 100%": {
          backgroundPosition: "0% 50%",
        },
        "50%": {
          backgroundPosition: "100% 50%",
        },
      },
      spinAndScale: {
        "0%, 100%": {
          backgroundPosition: "0% 50%",
          scale: "1",
        },
        "50%": {
          backgroundPosition: "100% 50%",
          scale: "1.1",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
