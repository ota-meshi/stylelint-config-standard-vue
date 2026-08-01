import vueSpecificRules from "../lib/vue-specific-rules.js";

const config = {
  // Stylelint v16+ requires the root config to provide a `rules` property.
  rules: {},
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue/scss",
      ],
      rules: vueSpecificRules,
    },
  ],
};

export default config;
export { config as "module.exports" };
