---
"stylelint-config-standard-vue": patch
---

Restrict the `stylelint-config-html` and `stylelint-config-recommended-vue` dependencies to v1. Their v2 releases are ESM-only and require Stylelint v16+, which breaks installations using older Stylelint versions.
