import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from 'eslint-plugin-jest'

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,
      semi: ["error", "always"], //                      отсутствие ';'
      "no-var": "error", //                                Запрещает использование var, требует использования const или let
      indent: ["error", 2], //                              Контролирует отступы. По умолчанию использует 2 пробела.
      "no-multi-spaces": "error", //                       Запрещает множественные пробелы, кроме случаев выравнивания
      "space-in-parens": ["error", "never"], //            Контролирует пробелы внутри скобок.
      "no-multiple-empty-lines": ["error", { max: 2 }], //Ограничивает количество пустых строк подряд.
      "prefer-const": "error", //                          Требует использования const для переменных, которые не переопределяются.
      "no-use-before-define": "error", //                   Запрещает использование переменных до их объявления.
    },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  {
    files: ["src/**/*.test.js"],
    ...jest.configs['flat/recommended'],
  }
]);
