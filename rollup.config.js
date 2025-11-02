import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const extensions = [".ts"],
noShake = () => ({
  name: "no-treeshake",
  resolveId(id, importer) {
    return !importer
      ? {
          id,
          moduleSideEffects: "no-treeshake",
        }
      : null;
  },
});

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
