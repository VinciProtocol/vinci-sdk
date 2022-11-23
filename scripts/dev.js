// @ts-check
const { build } = require('esbuild')
const { resolve, relative } = require('path')
const args = require('minimist')(process.argv.slice(2))

const target = args._[0]
if (!target) {
  throw new Error('target not found in process argv')
}
const format = args.f || 'cjs'
const inlineDeps = args.i || args.inline
const pkg = require(resolve(__dirname, `../packages/${target}/package.json`))

// resolve output
const outputFormat = format === 'cjs' ? 'cjs' : 'esm'

const postfix = format

const outfile = resolve(__dirname, `../packages/${target}/dist/${target}.${postfix}.js`)
const relativeOutfile = relative(process.cwd(), outfile)

let external = []
if (!inlineDeps) {
  // cjs & esm-bundler: external all deps
  if (format === 'cjs' || format.includes('esm-bundler')) {
    external = [
      ...external,
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      'path',
      'url',
      'stream',
    ]
  }
}

build({
  entryPoints: [resolve(__dirname, `../packages/${target}/src/index.ts`)],
  outfile,
  bundle: true,
  external,
  sourcemap: true,
  format: outputFormat,
  globalName: pkg.buildOptions?.name,
  platform: format === 'cjs' ? 'node' : 'browser',
  define: {
    __COMMIT__: `"dev"`,
    __VERSION__: `"${pkg.version}"`,
    __DEV__: `true`,
    __TEST__: `false`,
  },
  watch: {
    onRebuild(error) {
      if (!error) console.log(`rebuilt: ${relativeOutfile}`)
    },
  },
}).then(() => {
  console.log(`watching: ${relativeOutfile}`)
})
