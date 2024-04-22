<template>
  <header class="navbar">
    <img class="navbar__logo" alt="Company logo" src="../assets/img/logo.svg">
    <nav>
      <ul class="navbar__item-list">
        <li v-for="item in navItems">
          {{ item }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  navItems: Array
});
</script>

<style scoped lang="scss">
@use '@/styles/main' as *;

.navbar {
  display: flex;
  flex: 0 1 auto;
  justify-content: space-between;

  &__logo {
    padding-top: 7px;
  }

  &__item-list {
    list-style-type: none;
    display: flex;
    gap: $gap-base;
    font-size: $font-size-medium;
    line-height: $line-height-large;
    cursor: pointer;
  }
}
</style>