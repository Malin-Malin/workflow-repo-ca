import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Browser environment for main app files
  {
    files: ["js/**/*.js", "css/**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  // Node.js environment for config and test files
  {
    files: [
      "*.config.js",
      "*.config.mjs",
      "tests/**/*.js",
      "playwright.config.js",
    ],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
]);
