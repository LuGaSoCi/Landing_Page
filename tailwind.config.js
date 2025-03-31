/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#f1f5f9",
        muted: "#f1f5f9",
        accent: "#f1f5f9",
        border: "#e2e8f0",
        input: "#e2e8f0",
        background: "#ffffff",
        foreground: "#0f172a",
        "primary-foreground": "#ffffff",
        "secondary-foreground": "#0f172a",
        "muted-foreground": "#64748b",
        "accent-foreground": "#0f172a",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
        card: "#ffffff",
        "card-foreground": "#0f172a",
        popover: "#ffffff",
        "popover-foreground": "#0f172a",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.3rem",
        sm: "0.1rem",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
