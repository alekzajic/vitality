module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true }, project: './tsconfig.json' },
  settings: { react: { version: 'detect' } },
  extends: [
    "airbnb",
    "airbnb-typescript",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports','prettier'],
  rules: {
    'react/prop-types': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000'],
          ['^(assert|constants|crypto|events|fs|path|querystring|stream|url)(/.*|$)'],
          ['^(react|solid|vite)', '^@?\\w'],
          ['^(@)(/.*|$)'],
          ['^\\.'],
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        "": "never",
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
   ],
   'import/prefer-default-export': 'off',
   'react/jsx-props-no-spreading': 'off',
  },
  ignorePatterns: ['*rc.js', '*.config.js'],
}
