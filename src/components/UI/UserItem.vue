<template>
  <article>
    <figure class="user-item">
      <img alt="User photo" src="@/assets/img/unknown-small.png">
      <figcaption class="user-item__info" :class="{ active: isActive }">
        <p class="user-item__name">{{ user.username }}</p>
        <p class="user-item__email">{{ user.email }}</p>
      </figcaption>
    </figure>
  </article>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  user: Object
});

const store = useStore();
const isActive = computed(() => props.user?.id === store.getters.activeUser?.id);
</script>

<style scoped lang="scss">
@use '@/styles/main' as *;

.user-item {
  display: flex;
  box-shadow: $box-shadow-base;
  border-radius: $border-radius-base;
  max-height: 70px;
  cursor: pointer;

  &:hover {
    box-shadow: $box-shadow-hover;
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding: 16px 15px;
    gap: 4px;
    width: 100%;
    overflow: hidden;

    &.active {
      background: $light-gray;
      border-radius: 0 $border-radius-base $border-radius-base 0;
    }
  }

  &__name {
    font-weight: $font-weight-semi-bold;
  }

  &__email {
    color: $steel-gray;
  }

  &__name, &__email {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>