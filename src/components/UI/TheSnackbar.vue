<template>
  <Transition>
    <div v-if="snackbar.show" :class="`snackbar snackbar--${snackbar.color}`">
      {{ snackbar.message }}
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const snackbar = computed(() => store.getters['snackbar/snackbar']);
</script>

<style scoped lang="scss">
.snackbar {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  z-index: 1000;

  &--success { background-color: #4CAF50; }
  &--warning { background-color: #FFC107; }
  &--error { background-color: #F44336; }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
