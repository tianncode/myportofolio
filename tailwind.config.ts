export default {
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(6deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
};
