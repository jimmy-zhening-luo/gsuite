import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const extensions = [".ts"],
noTreeshake = "no-treeshake";

/** @returns {import('rollup').Plugin} */
function noShake() {
  return {
    name: noTreeshake,
    resolveId(id, importer) {
      return importer
        ? null
        : {
            id,
            moduleSideEffects: noTreeshake,
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
    noShake(),
    nodeResolve({ extensions }),
    babel({
      extensions,
      babelHelpers: "runtime",
    }),
  ],
};
