import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  // This is the entry point to our bundle.
  input: 'src/index.js',
  // Specify multiple outputs. We may want to look in browser output too later
  output: [{
    file: 'dist/styled-material-components.esm.js',
    format: 'esm',
    exports: 'named',
    sourcemap: true,
  }, {
    file: 'dist/styled-material-components.cjs.js',
    format: 'cjs',
    sourcemap: true,
  }],
  // Do not include these peer deps in our bundle
  external: ['react', 'react-dom', 'react-is', 'styled-components'],
  plugins: [
    // Build sourcemaps
    sourcemaps(),
    // resolve node modules
    resolve(),
    // babel config is done this way instead of in a .babelrc file
    babel({
      babelrc: false,
      exclude: 'node_modules/**', // only transpile our source code
      presets: ['@babel/react', ['@babel/env', { loose: true, modules: false }]],
      plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread', ['babel-plugin-styled-components', { pure: true }]],
    }),
    // Resolve commonsjs imports
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
