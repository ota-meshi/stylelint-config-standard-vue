<style lang="scss">
a {
  color: red;
}

// SCSS
.b {
  // stylelint-disable-next-line scss/at-if-no-null
  @if $x == null {
    color: red;
  }
}

@mixin my-mixin {
  color: blue;
}

.c {
  @include my-mixin;
}

// Vue
:global(.foo),
::v-deep(.foo),
::v-slotted(.foo),
::v-global(.foo),
:deep(.foo),
:slotted(.foo) {
  color: red;
}

.d {
  width: v-bind(camelCase);
}
</style>