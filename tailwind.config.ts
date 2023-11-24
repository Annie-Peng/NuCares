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
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
        40: "40px",
        46: "46px",
        50: "50px",
        74: "74px",
        80: "80px",
      },
      fontSize: {
        12: "12px",
        14: "14px",
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
          50: "#EDF5F5",
          100: "#D6EBEE",
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
          450: "#DD9287",
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
        primaryGradient: "linear-gradient(to bottom, #A8DAE2 0%,#FFDBC9 50%)",
        whiteGradient:
          "linear-gradient(to bottom, transparent 80%,#FFFFFF 100%)",
        emailIcon: "url(../../public/images/icons/email.svg)",
        passwordIcon: "url(../../public/images/icons/password.svg)",
        eyeCloseIcon: "url(../../public/images/icons/eyeClose.svg)",
        eyeOpenIcon: "url(../../public/images/icons/eyeOpen.svg)",
        mobileIcon: "url(../../public/images/icons/mobile.svg)",
        nameIcon: "url(../../public/images/icons/name.svg)",
        birthdayIcon: "url(../../public/images/icons/birthday.svg)",
        clipPathIcon: "url(../../public/images/icons/clipPath.svg)",
        calendarIcon: "url(../../public/images/icons/calendar.svg)",
        arrowDownIcon: "url(../../public/images/icons/arrowDown.svg)",
      },
      fontFamily: {
        "GenSenRounded-900": ["GenSenRounded-900", "sans-serif"],
        "GenSenRounded-700": ["GenSenRounded-700", "sans-serif"],
      },
      boxShadow: {
        goBackOuter: "3px 3px 4px 0px rgba(0, 0, 0, 0.35) inset",
        goBack:
          "-6px -5px 10px 0px rgba(0, 0, 0, 0.15) inset, 3px 3px 7px 0px rgba(255, 255, 255, 0.50) inset, 6px 6px 6.6px 0px rgba(0, 0, 0, 0.50)",
        goBackActive: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
export default config;
