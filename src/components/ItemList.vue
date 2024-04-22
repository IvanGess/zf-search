<template>
  <section class="item-list">
    <h2 class="item-list__title"> {{ title }} </h2>
    <p class="item-list__result" v-if="!searchInitiated && !items?.length"> {{ startSearchText }} </p>
    <p class="item-list__result" v-else-if="searchInitiated && !items?.length"> {{ noResultText }} </p>
   <slot></slot>
  </section>
</template>

<script setup>
defineProps({
  items: Array,
  title: String,
  searchInitiated: Boolean,
  startSearchText: String,
  noResultText: String
})
</script>

<style scoped lang="scss">
@use '@/styles/main' as *;

.item-list {
  display: flex;
  flex-direction: column;
  gap: 17px;

  &__title {
    font-weight: $font-weight-semi-bold;
    font-size: $font-size-medium;
    line-height: $line-height-large;
  }

  &__result {
    color: $steel-gray;
  }
}
</style>