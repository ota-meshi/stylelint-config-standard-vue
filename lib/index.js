import vueSpecificRules from "./vue-specific-rules.js";

const config = {
  // Stylelint v16+ requires the root config to provide a `rules` property.
  rules: {},
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "stylelint-config-standard",
        "stylelint-config-recommended-vue",
      ],
      rules: vueSpecificRules,
    },
  ],
};

export default config;
export { config as "module.exports" };
