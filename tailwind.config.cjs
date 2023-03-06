/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
//.cjs 是 CommonJS 的扩展名，它是 Node.js 中的一种模块规范。
// CommonJS 是一种 JavaScript 模块规范，用于在服务器端和命令行应用程序中组织和加载代码。
// 在 CommonJS 中，每个文件都是一个模块，并且可以通过 require() 函数来加载其他模块，这些模块可以在同一个应用程序中共享和重用。
// 在 Node.js 中，.cjs 文件扩展名通常用于表示 CommonJS 模块，以便与 ES modules （.mjs）进行区分。
