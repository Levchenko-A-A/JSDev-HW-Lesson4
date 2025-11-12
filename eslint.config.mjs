import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest';
import google from 'eslint-config-google';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  js.config.recommended,
  {
    ...google,
    rules: {
      ...google.rules,
      'require-jsdoc': 'off',
      'max-len': ['error', { code: 120 }],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      ...js.configs.recommended.rules,
      semi: ['error', 'always'], //                         отсутствие ';'
      'no-var': 'error', //                                 Запрещает использование var, требует использования const или let
      indent: ['error', 2], //                              Контролирует отступы. По умолчанию использует 2 пробела.
      'no-multi-spaces': 'error', //                        Запрещает множественные пробелы, кроме случаев выравнивания
      'space-in-parens': ['error', 'never'], //             Контролирует пробелы внутри скобок.
      'no-multiple-empty-lines': ['error', { max: 2 }], //  Ограничивает количество пустых строк подряд.
      'prefer-const': 'error', //                           Требует использования const для переменных, которые не переопределяются.
      'no-use-before-define': 'error', //                   Запрещает использование переменных до их объявления.
    },
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es6,
      },
    },
  },
  {
    files: ['src/**/*.test.js'],
    ...jest.configs['flat/recommended'],
  },
  eslintConfigPrettier,
]);
