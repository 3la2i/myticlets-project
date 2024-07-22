import flowbite from "flowbite-react/tailwind";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        black: "#221B2C",
        blk: "#191223",
        pin: "#FF204E",
        "prim-dark": "#1C1128",
        "second-dark": "#261736",
        "ter-dark": "#423760",
        "custom-red": "#8C07C5",
        "custom-red-hover": "#8c07c5",
        "text-prim": "#cabffd",
        "text-second": "#785B96",
      },
      width: {
        "fill-available": "-webkit-fill-available",
      },
      backgroundImage: {
        "gradient-prim":
          "linear-gradient(220deg, rgba(49,39,63,1) -1%, rgba(78,67,118,0.6083683473389356) 93%)",
        "gradient-second":
          "linear-gradient(220deg, rgba(69,45,103,0.44030112044817926) 1%, rgba(104,61,124,0.38707983193277307) 79%, rgba(180,97,144,0.27503501400560226) 97%)",
        "gradient-button":
          "linear-gradient (220deg, rgba(182, 17, 107, 1)100% , rgba(59, 21, 120, 1))100%",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
