const path = require("path")

process.env.BROWSER = "none"

module.exports = {
  webpack: {
    resolve: {
      alias: {
        things: path.resolve(__dirname, "./src/things/"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  },
  jest: {
    transformIgnorePatterns: [
      "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
    ],
    configure: {
      moduleNameMapper: {
        "^things(.*)$": "<rootDir>/src/things$1",
      },
    },
  },
}
