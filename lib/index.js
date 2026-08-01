"use strict";

module.exports = {
  // Stylelint v16+ requires the root config to provide a `rules` property.
  rules: {},
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "stylelint-config-standard",
        "stylelint-config-recommended-vue",
      ],
      rules: require("./vue-specific-rules"),
    },
  ],
};
