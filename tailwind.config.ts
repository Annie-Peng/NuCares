import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      // 設計稿兩種尺寸：390px,
      sm: "390px",
      lg: "1296px",
    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        4: "4px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
      },
      fontSize: {
        12: "12px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
      },
      fontWeight: {
        thin: "400",
        normal: "500",
        bold: "600",
      },
      borderRadius: {
        10: "10px",
        50: "50px",
      },
      colors: {
        tertiary: {
          //Mine Shaft - black
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#454545",
          900: "#3D3D3D",
          950: "#2D2D2D",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
