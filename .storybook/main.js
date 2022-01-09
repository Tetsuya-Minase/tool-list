module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "typescript": {"reactDocgen": false},
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(tsx|ts|js|mjs|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('linaria/loader'),
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
            ...(config.linaria || {}),
            extension: '.linaria.module.css'
          }
        }
      ]
    });
    return config;
  }
}
