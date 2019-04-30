module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader")
        }
      ]
    },
    {
      test: /\.css$/,
      loaders: [
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            config: {
              path: "./"
            }
          }
        }
      ]
    }
  );
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
