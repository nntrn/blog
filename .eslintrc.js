module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // extends: ['react-app'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'array-bracket-spacing': [ 'error', 'always', { singleValue: false } ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'key-spacing': [ 'error', { beforeColon: false, afterColon: true } ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-this': 'off',
    'eol-last': [ 'error', 'always' ],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: false } ],
    'lines-around-comment': 'off',
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always',
      },
    ],
    'padding-line-between-statements': 'off',
    'prefer-object-spread': 'error',
    'quote-props': [ 'off', 'as-needed', { keywords: false, unnecessary: true, numbers: false } ],
    quotes: [ 'error', 'single', { avoidEscape: true } ],
    'require-jsdoc': 'off',
    'semi-spacing': [ 'error', { before: false, after: true } ],
    'semi-style': [ 'error', 'last' ],
    'sort-keys': [ 'off', 'asc', { caseSensitive: false, natural: true } ],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    'switch-colon-spacing': [ 'error', { after: true, before: false } ],
    'template-tag-spacing': [ 'error', 'never' ],
    'unicode-bom': [ 'error', 'never' ],
    'wrap-regex': 'off',
    'spaced-comment': [ 'error', 'always' ],
    'object-curly-newline': 'off',
    'function-paren-newline': [ 'off', 'consistent' ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'indent': [ 2, 2,
      {'SwitchCase': 1}
    ],
    'react/prop-types': 0,
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-typos': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',
 
    'react/react-in-jsx-scope': 0

  },
}
