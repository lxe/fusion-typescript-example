/* eslint-env node */

module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',

    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',

    // Uses eslint-config-prettier to disable ESLint rules from
    // @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',

    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],

  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-prettier',
    'eslint-plugin-react-hooks',
  ],

  rules: {
    // Use TS/Flow instead of prop-types
    'react/prop-types': 'off',

    // https://reactjs.org/docs/hooks-faq.html#what-exactly-do-the-lint-rules-enforce
    'react-hooks/rules-of-hooks': 'error',

    // https://github.com/facebook/react/issues/14920
    'react-hooks/exhaustive-deps': 'warn',

    // This option will merge and override any config set with .prettierrc files
    // https://github.com/prettier/eslint-plugin-prettier#options
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        parser: 'typescript',
      },
    ],
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      files: ['.*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
