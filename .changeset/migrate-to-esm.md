---
"stylelint-config-standard-vue": major
---

Migrate the package to ESM. On the supported Node.js versions, the configs can still be loaded from CommonJS via `require()`. The package now also defines an `exports` field; the `stylelint-config-standard-vue/scss` entry keeps working both with and without the `/index.js` suffix.
