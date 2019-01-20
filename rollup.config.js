const typescript = require('rollup-plugin-typescript2')
const collectSass = require('rollup-plugin-collect-sass')

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
    // don't extract css files for now
    collectSass({}),
  ],
}
