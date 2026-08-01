# stylelint-config-standard-vue

## 2.0.0

### Major Changes

- [#62](https://github.com/ota-meshi/stylelint-config-standard-vue/pull/62) [`9130282`](https://github.com/ota-meshi/stylelint-config-standard-vue/commit/9130282b86b72a35cfa22072c61c2df3b9ebf382) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Drop support for old Node.js versions. Node.js `^22.12 || >=24` is now required.

- [#66](https://github.com/ota-meshi/stylelint-config-standard-vue/pull/66) [`cd63ea3`](https://github.com/ota-meshi/stylelint-config-standard-vue/commit/cd63ea3f0ac678a3fa35a5e6018b0f6481ea25ee) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Migrate the package to ESM. On the supported Node.js versions, the configs can still be loaded from CommonJS via `require()`. The package now also defines an `exports` field; the `stylelint-config-standard-vue/scss` entry keeps working both with and without the `/index.js` suffix.

- [#65](https://github.com/ota-meshi/stylelint-config-standard-vue/pull/65) [`1f6760a`](https://github.com/ota-meshi/stylelint-config-standard-vue/commit/1f6760ac708c7a96d792afd8ad73a65e4963c542) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Move the `stylelint-config-html`, `stylelint-config-recommended-vue`, and `stylelint-config-standard` dependencies to `peerDependencies`. This lets you control the versions of the underlying shared configs from your own `package.json`, so a new major release of one of them can no longer break installations of this config.

- [#64](https://github.com/ota-meshi/stylelint-config-standard-vue/pull/64) [`06bc920`](https://github.com/ota-meshi/stylelint-config-standard-vue/commit/06bc92049d3fe443a26f5f142db3b0b16b6492b1) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Update peer dependencies: `postcss-html` now requires `^2.0.0`, and `stylelint` now requires `>=16.0.0`. The `stylelint-config-html` dependency now requires v2, and `stylelint-config-standard` now requires v36 or newer. The configs now also define an empty top-level `rules`, so that configs that only extend them work with Stylelint v16+, which rejects root configs without a `rules` property.

- [#72](https://github.com/ota-meshi/stylelint-config-standard-vue/pull/72) [`8238747`](https://github.com/ota-meshi/stylelint-config-standard-vue/commit/82387473d215acaaf0a3965e61a97aa2da384963) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Update peer dependencies: `stylelint-config-recommended-vue` now requires `>=2.0.0`.

### Minor Changes

- [#67](https://github.com/ota-meshi/stylelint-config-standard-vue/pull/67) [`325a74b`](https://github.com/ota-meshi/stylelint-config-standard-vue/commit/325a74b107028f80d29957150d52fe12c86c18dc) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Declare `stylelint-config-standard-scss` as an optional peer dependency (`>=13.0.0`). It is not installed automatically and is only needed when using the `stylelint-config-standard-vue/scss` config, but package managers can now validate its version when it is installed.
