"use strict"

module.exports = {
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
}
