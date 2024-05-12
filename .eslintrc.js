/** @type {import("eslint").Linter.Config} */

const config = {
  parser: "@typescript-eslint/parser",
  root: true,
  plugins: ["@typescript-eslint"],
  extends: ["next/core-web-vitals", "eslint:recommended", "next"],
  rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/no-explicity-any": "warn",
    "max-depth": ["error", 4],
    "no-console": [
      "warn",
      { allow: ["error", "info", "time", "timeEnd", "warn"] },
    ],
    "no-unused-cars": "off",
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};

module.exports = config;
