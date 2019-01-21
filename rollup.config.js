const typescript = require('rollup-plugin-typescript2')
const postcss = require('rollup-plugin-postcss')

const pkg = require('./package.json')

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({ cacheRoot: './.cache', useTsconfigDeclarationDir: true }),
    // extracts two .css files right now (probably one for each .js file)
    postcss({
      extract: true,
      extensions: ['.scss', '.sass', '.css'],
      minimize: true,
      autoModules: true, // support .module.scss
    }),
  ],
}
