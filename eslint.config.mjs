import type { Config } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig: Config[] = [...nextVitals, ...nextTs];

export default eslintConfig;
