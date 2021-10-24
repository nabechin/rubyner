module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    ignorePatterns: ['.eslintrc.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-var-requires': "off"
    },
}
