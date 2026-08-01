---
"stylelint-config-standard-vue": major
---

Move the `stylelint-config-html`, `stylelint-config-recommended-vue`, and `stylelint-config-standard` dependencies to `peerDependencies`. This lets you control the versions of the underlying shared configs from your own `package.json`, so a new major release of one of them can no longer break installations of this config.
