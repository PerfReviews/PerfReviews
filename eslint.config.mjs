import coreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const config = [
  {
    ignores: [".next/**", "out/**", "build/**", ".content-collections/**"],
  },
  ...coreWebVitals,
  prettier,
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@next/next/no-img-element": "off",
    },
  },
];

export default config;
