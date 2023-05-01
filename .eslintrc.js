const ERROR = 2;
const WARN = 1;
const NONE = 0;

module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['react', 'react-hooks'],
  extends: ['prettier', 'airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 7,
    requireConfigFile: false,
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      classes: true,
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'implicit-arrow-linebreak': NONE,
    'linebreak-style': NONE,
    indent: [
      ERROR,
      ERROR,
      {
        SwitchCase: WARN,
        ignoredNodes: ['TemplateLiteral'],
      },
    ],
    'template-curly-spacing': NONE,
    'react/jsx-filename-extension': [
      WARN,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/display-name': NONE,
    'react/no-danger': NONE,
    'react/jsx-newline': [
      ERROR,
      {
        prevent: false,
        allowMultilines: false,
      },
    ],
    'react/no-children-prop': ERROR,
    'react/no-deprecated': ERROR,
    'react/no-direct-mutation-state': ERROR,
    'react/no-unescaped-entities': NONE,
    'react/destructuring-assignment': NONE,
    'react/function-component-definition': [
      ERROR,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'jsx-a11y/alt-text': NONE,
    'jsx-a11y/click-events-have-key-events': NONE,
    'jsx-a11y/label-has-associated-control': NONE,
    'jsx-a11y/label-has-for': NONE,
    'jsx-a11y/media-has-caption': NONE,
    'react/sort-comp': NONE,
    'jsx-a11y/no-static-element-interactions': NONE,
    'react/jsx-props-no-spreading': NONE,
    'react/prop-types': [ERROR, { ignore: ['children'] }],
    'react/require-default-props': ERROR,
    'react/jsx-one-expression-per-line': [
      NONE,
      {
        allow: 'single-child',
      },
    ],
    'no-param-reassign': [
      ERROR,
      {
        props: false,
      },
    ],
    'no-underscore-dangle': NONE,
    'react/forbid-prop-types': [
      ERROR,
      {
        forbid: ['any'],
      },
    ],
    'lines-between-class-members': NONE,
    'no-return-assign': NONE,
    'prefer-template': NONE,
    'class-methods-use-this': NONE,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': NONE,
    'import/prefer-default-export': NONE,
    'no-plusplus': NONE,
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'quote-props': NONE,
    'no-empty-function': [
      ERROR,
      {
        allow: ['arrowFunctions'],
      },
    ],
  },
};
