import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import perfectionist from 'eslint-plugin-perfectionist'


export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    perfectionist
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        newlinesBetween: 'never',
        groups: [
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
      },
    ],
    'perfectionist/sort-array-includes': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      }
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      },
    ],
    'perfectionist/sort-interfaces': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        newlinesBetween: 'never',
        groupKind: 'mixed',
      },
    ],
    'perfectionist/sort-intersection-types': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        newlinesBetween: 'never',
      },
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      },
    ],
    'perfectionist/sort-maps': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      },
    ],
    'perfectionist/sort-modules': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        newlinesBetween: 'never',
        groups: [
          'declare-enum',
          'export-enum',
          'enum',
          ['declare-interface', 'declare-type'],
          ['export-interface', 'export-type'],
          ['interface', 'type'],
          'declare-class',
          'class',
          'export-class',
          'declare-function',
          'export-function',
          'function'
        ],
      },
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        groupKind: 'mixed',
      },
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      },
    ],
    'perfectionist/sort-object-types': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        newlinesBetween: 'never',
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        newlinesBetween: 'never',
      },
    ],
    'perfectionist/sort-sets': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      },
    ],
    'perfectionist/sort-switch-case': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      },
    ],
    'perfectionist/sort-union-types': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        newlinesBetween: 'never',
      },
    ],
    'perfectionist/sort-variable-declarations': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
        disallowTypeAnnotations: false,
      },
    ],
  },
})
