<template>
  <main class="layout">
    <slot></slot>
  </main>
</template>

<style scoped lang="scss">
@use '@/styles/main' as *;

.layout {
  width: 100%;
  flex: 1 1 auto;
  border-radius: $border-radius-base;
  box-shadow: $box-shadow-base;
  margin: 20px auto 0;
  display: flex;
}
</style>