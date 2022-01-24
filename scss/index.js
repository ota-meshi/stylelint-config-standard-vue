"use strict"

module.exports = {
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
}
