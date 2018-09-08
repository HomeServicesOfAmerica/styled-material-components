const { BABEL_ENV, NODE_ENV } = process.env;
const modules = BABEL_ENV === 'cjs' || NODE_ENV === 'test' ? 'commonjs' : false;

module.exports = {
  presets: ['@babel/react', ['@babel/env', { modules }]],
  plugins: ['@babel/proposal-class-properties'],
};
