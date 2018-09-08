import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import flow from 'rollup-plugin-flow';

export default {
  input: 'src/index.js',
  output: [{
    file: '.build/styled-material-components.esm.js',
    format: 'esm',
    sourcemap: true,
  }, {
    file: '.build/styled-material-components.cjs.js',
    format: 'cjs',
    sourcemap: true,
  }],
  external: ['react', 'react-dom', 'react-is', 'styled-components'],
  plugins: [
    flow({
      pretty: true,
    }),
    sourcemaps(),
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    // terser({
    //   sourcemap: true,
    // }),
  ],
};
