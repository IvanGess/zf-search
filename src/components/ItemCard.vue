<template>
  <section class="item-card">
    <div v-if="hasActiveItem">
      <slot></slot>
    </div>
    <div v-else class="item-card--waiting">
      <p> {{ selectItemText }} </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  hasActiveItem: Boolean,
  selectItemText: String
})
</script>

<style scoped lang="scss">
@use '@/styles/main' as *;

.item-card {
  padding: 30px 20px;
  display: flex;
  gap: 60px;
  width: 100%;

  &--waiting {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: $steel-gray;
  }
}
</style>