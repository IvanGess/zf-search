<template>
  <div class="page-layout">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/main' as *;

.page-layout {
  padding: 50px;
  font-family: Montserrat, sans-serif;
  background-color: $main-background;
  display: flex;
  flex-flow: column;
  height: 100%;
  color: $very-dark-gray;
  font-size: $font-size-base;
  font-weight: $font-weight-base;
}
</style>