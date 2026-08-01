"use strict";

module.exports = {
  // Stylelint v16+ requires the root config to provide a `rules` property.
  rules: {},
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue/scss",
      ],
      rules: require("../lib/vue-specific-rules"),
    },
  ],
};
