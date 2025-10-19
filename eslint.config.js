import linted from "linted";

export default linted({
  js: {
    rules: {
      "no-undef": 0,
      "no-unused-vars": 0,
    },
  },
  ts: {
    rules: {
      "ts/no-unused-vars": 0,
    },
  },
});
