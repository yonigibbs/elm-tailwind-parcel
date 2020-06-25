const process = require("process")
const postcssElmTailwind = require("postcss-elm-tailwind")

module.exports = {
    plugins: [
        require("tailwindcss"),
        ...(process.env.NODE_ENV === "production" ? [] : [postcssElmTailwind]),
        require("autoprefixer")
    ]
};