---
"stylelint-config-standard-vue": major
---

Update peer dependencies: `postcss-html` now requires `^2.0.0`, and `stylelint` now requires `>=16.0.0`. The `stylelint-config-html` dependency now requires v2, and `stylelint-config-standard` now requires v36 or newer. The configs now also define an empty top-level `rules`, so that configs that only extend them work with Stylelint v16+, which rejects root configs without a `rules` property.
