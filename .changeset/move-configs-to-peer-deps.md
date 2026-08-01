---
"stylelint-config-standard-vue": major
---

Move the `stylelint-config-html`, `stylelint-config-recommended-vue`, and `stylelint-config-standard` dependencies to `peerDependencies`. This lets you control the versions of the underlying shared configs from your own `package.json`, so a new major release of one of them can no longer break installations of this config. npm v7+ installs peer dependencies automatically; with other package managers you may need to install them explicitly.
