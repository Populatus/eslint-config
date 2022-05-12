module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '../basic/index.js',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
    }
  }
}
