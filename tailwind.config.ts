import type { Config } from "tailwindcss";
const { colors } = require("./app/designTokens/index");
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        map: "url(https://2image.s3.ir-thr-at1.arvanstorage.ir/map.jpg?versionId=)",
        "video-cover": "url(https://2image.s3.ir-thr-at1.arvanstorage.ir/video-cover.jpeg?versionId=)",
      },
      animation: {
        ripple: "ripple 0.6s linear infinite",
      },
    },
    colors,
  },
  plugins: [],
};
export default config;
