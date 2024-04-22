<template>
  <div v-if="user">
    <figure class="user-card">
      <img class="user-card__item-image" alt="Company logo" src="@/assets/img/unknown-big.png">
      <figcaption  class="user-info">
        <div class="user-info__personal-data">
          <h2 class="user-info__name"> {{ user?.name }} </h2>
          <p class="user-info__email">email:  <span> {{ user?.email }} </span></p>
          <p class="user-info__phone">phone:  <span> {{ user?.phone }} </span></p>
        </div>
        <div class="user-info__about">
          <h3 class="user-info__title"> {{ aboutTitle }} </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </figcaption >
    </figure>
  </div>
</template>

<script setup>
defineProps({
  user: Object,
  aboutTitle: String
})
</script>

<style scoped lang="scss">
@use '@/styles/main' as *;

.user-card {
  padding: 30px 20px;
  display: flex;
  gap: 60px;
  width: 100%;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: $gap-base;
  padding-right: 10px;

  &__personal-data {
    font-weight: $font-weight-semi-bold;
    font-size: $font-size-medium;
    line-height: $line-height-large;
    color: $color-black;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 2px;

    & > p span {
      padding-left: 5px;
    }
  }

  &__email, &__phone {
    font-weight: $font-weight-semi-bold;
    line-height: $line-height-large;

    & > span {
      color: $steel-gray;
    }
  }

  &__about {
    line-height: $line-height-medium;
    color: $steel-gray;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__title {
    color: $color-black;
    font-weight: $font-weight-semi-bold;
    font-size: $font-size-medium;
    line-height: $line-height-large;
  }
}
</style>