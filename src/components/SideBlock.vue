<template>
  <aside class="sideblock">
    <slot></slot>
  </aside>
</template>

<style scoped lang="scss">
@use '@/styles/main' as *;

.sideblock {
  max-width: 291px;
  border-right: 1px solid $light-gray;
  padding: 30px 0 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>