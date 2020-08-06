// See https://www.codementor.io/@rajjeet/step-by-step-create-a-react-project-from-scratch-11s9skvnxv
// for more details.

const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    home: path.resolve(__dirname, "src/index.jsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          // creates style nodes from JS strings
          "style-loader",
          // translates CSS into CommonJS
          "css-loader",
          // compiles Sass to CSS, using Node Sass by default
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico|txt)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[hash:16].[ext]",
              outputPath: "images",
              publicPath: "dist/images",
              // name: "assets/[hash:16].[ext]",
            }
          }
        ],
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    ignored: ["**/node_modules/**", /node_modules/],
  }
};
