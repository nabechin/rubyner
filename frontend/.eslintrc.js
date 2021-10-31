module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    root: true,
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
      project: ['./tsconfig.json']
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-var-requires': "off"
    },
}
