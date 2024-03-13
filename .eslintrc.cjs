module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["plugin:prettier/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "simple-import-sort", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.js", "*.ts", "*.astro"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages come first.
              ["^astro"],
              // Internal packages.
              ["^(@)(/.*|$)"],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.?(scss)$"],
            ],
          },
        ],
      },
    },
  ],
  rules: {
    "prettier/prettier": ["error"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": ["error", { vars: "all", args: "none", ignoreRestSiblings: false }],
    "@typescript-eslint/no-explicit-any": "off",
  },
};
