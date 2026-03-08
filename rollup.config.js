import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const extensions = [".ts"];

/** @returns {import('rollup').Plugin} */
function noTreeShake() {
  return {
    name: "no-treeshake",
    resolveId(
      id,
      importer,
    ) {
      return importer
        ? null
        : {
            id,
            moduleSideEffects: "no-treeshake",
          };
    },
  };
}

/** @type {import('rollup').RollupOptions} */
export default {
  input: "./src/index.ts",
  output: {
    file: "./build/index.js",
    format: "cjs",
  },
  plugins: [
    noTreeShake(),
    nodeResolve(
      {
        extensions,
      },
    ),
    babel(
      {
        extensions,
        babelHelpers: "runtime",
      },
    ),
  ],
};
