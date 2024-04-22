<template>
  <div  v-if="isLoading" class="loader__overlay" role="alert" aria-live="assertive" aria-busy="true">
    <div class="loader__circle" aria-hidden="true"></div>
    <p class="loader__text">Загрузка...</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from 'vuex';

const store = useStore();

const isLoading = computed(() => store.getters['loader/isLoading']);
</script>

<style scoped lang="scss">
@use '@/styles/main' as *;

.loader {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
  }

  &__circle {
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-top: 8px solid $color-primary-red;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
  }

  &__text {
    font-size: $font-size-large;
    margin-top: 10px;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>