<template>
  <div class="search">
    <label class="search__title">
      {{ title }}
      <input
          v-model="userInput"
          @input="handleInput"
          class="search__input"
          type="text"
          :placeholder="placeholderText"
      >
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { debounce } from "@/utils/common-utils";
import { RESET_CURRENT_PAGE, RESET_DATA_LOADED, RESET_SEARCH } from "@/consts/mutation-types";
import { fetchUsers } from "@/consts/action-types";
import {debounceDelay} from "@/consts/common";

defineProps({
  title: String,
  placeholderText: String
})

const store = useStore();
const userInput = ref('');


const handleInput = debounce(() => {
  store.commit(RESET_CURRENT_PAGE);
  store.commit(RESET_DATA_LOADED);

  const searchTerms = userInput.value.split(/[\s,]+/).filter(Boolean);
  if (searchTerms.length > 0) {
    store.dispatch(fetchUsers, searchTerms);
    return;
  }

  store.commit(RESET_SEARCH);
}, debounceDelay);
</script>

<style scoped lang="scss">
@use '@/styles/main' as *;

.search {
  display: flex;
  flex-direction: column;
  gap: $gap-base;

  &__title {
    font-weight: $font-weight-semi-bold;
    font-size: $font-size-medium;
    line-height: $line-height-large;
  }

  &__input {
    border: 1px solid $color-border;
    border-radius: $border-radius-secondary;
    width: 240px;
    box-sizing: border-box;
    height: 44px;
    color: $steel-gray;
    padding-left: 16px;
    letter-spacing: 1px;
    margin-top: 15px;

    &:focus-visible {
      outline: $steel-gray auto 1px;
    }
    &:-moz-focusring {
      outline: $steel-gray solid 1px;
    }
  }
}
</style>