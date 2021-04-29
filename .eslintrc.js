module.exports = {
  // extends: [require.resolve('@umijs/fabric/dist/eslint')],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
  ],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
    REACT_APP_TEST: true,
    location: true,
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jasmine: true,
  },
  'parserOptions': {
    'ecmaVersion': 7,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
  ],
  rules: {
    'camelcase': 'off',
    'import/no-absolute-path': 0,
    'import/no-extraneous-dependencies': 1,
    'no-underscore-dangle': 0,
    semi: [2, 'always'],
    quotes: [2, 'single'],
    indent: [0, 2],
    'react/destructuring-assignment': 0,
    'linebreak-style': [2, 'unix'],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', 'tsx'] },
    ],
    'react/forbid-prop-types': 0,
    'max-len': [
      'warn',
      { comments: 200 },
      { code: 120 },
    ],
    'import/no-unresolved': 0,
    'react/prop-types': 1,
    'import/prefer-default-export': 1,
    'no-return-assign': 1,
    'consistent-return': 1,
    '@typescript-eslint/ban-ts-comment': 0,
    'react/no-array-index-key': 1,
    'no-continue': 'warn',
    'no-restricted-syntax': 'warn',
    'no-case-declarations': 'warn',
    'global-require': 'warn',
    'object-curly-newline': 0,
    'import/extensions': 0,
    'no-param-reassign': 0,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/sort-comp': 0,
    'react/state-in-constructor': 0,
    'no-console': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent-props': 0,
    'jsx-a11y/anchor-is-valid': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/jsx-closing-bracket-location': 0,
    'quote-props': 0,
    'no-nested-ternary': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/jsx-curly-newline': 0,
    'no-tabs': 0,
  },
};
