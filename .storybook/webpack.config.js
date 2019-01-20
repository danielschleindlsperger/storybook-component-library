const path = require('path')

const SCSSLoader = {
  test: /\.(scss|sass|css)$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader'],
  include: path.resolve(__dirname, '../'),
}

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules.push(SCSSLoader)
  return config
}
