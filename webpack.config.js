const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ruleForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const ruleForJavaScript = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};

const rules = [ruleForJavaScript, ruleForStyles];

module.exports = (env, { mode }) => {
  console.log({ mode });
  const isProduction = mode === "production";
  const backendUrl = isProduction
    ? "https://nalancay-apitaxdown"
    : "http://localhost:3001";

  return {
    // entry: './src/index.js',
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backendUrl),
      }),
      new HtmlWebpackPlugin({ template: "src/index.html" }),
    ],
    module: { rules },
    devServer: {
      open: true,
      port: 3000,
      compress: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
  };
};
