module.exports = function ({ types: babelTypes }) {
  return {
    name: "deadly-simple-plugin-example",
    visitor: {
      Identifier(path, state) {
        if (state.opts[path.node.name]) {
          path.node.name = state.opts[path.node.name];
        }
      },
    },
  };
};
