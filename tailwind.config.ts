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
      dropShadow: {
        textShadow: "1px 1px 5px rgba(0, 0, 0, 0.35)",
      },
      spacing: {
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        28: "28px",
        30: "30px",
        32: "32ox",
        40: "40px",
        46: "46px",
        50: "50px",
        74: "74px",
        80: "80px",
      },
      fontSize: {
        12: "12px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
      },
      fontWeight: {
        thin: "400",
        normal: "500",
        bold: "600",
      },
      borderRadius: {
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        35: "35px",
        50: "50px",
      },
      colors: {
        black: {
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
        primary: {
          //Powder Blue - blue
          50: "#f0fafb",
          100: "#daf0f3",
          200: "#a8dae2",
          300: "#89cbd7",
          400: "#51acbf",
          500: "#3690a4",
          600: "#30768a",
          700: "#2c6172",
          800: "#2b505f",
          900: "#284551",
          950: "#162c36",
        },
        secondary: {
          //Tonys Pink - pink
          50: "#fcf5f4",
          100: "#fae8e6",
          200: "#f7d6d1",
          300: "#f0b9b1",
          400: "#e9a197",
          500: "#d76b5c",
          600: "#c25040",
          700: "#a34032",
          800: "#87382d",
          900: "#71342b",
          950: "#3d1712",
        },
        tertiary: {
          //Tuft Bush - orange
          50: "#fef6f2",
          100: "#ffebe1",
          200: "#ffdbc9",
          300: "#fec1a3",
          400: "#fb9d6e",
          500: "#f27c41",
          600: "#e06122",
          700: "#bc4f19",
          800: "#9b4419",
          900: "#813d1b",
          950: "#461d09",
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
