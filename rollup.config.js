const pkg = require('./package.json')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')

module.exports = {
  input: 'src/index.js',
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
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve({ extensions: ['.mjs', '.js', '.jsx', '.json'] }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
