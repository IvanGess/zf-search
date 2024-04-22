<template>
  <ul class="user-list" ref="scrollableElement" @scroll="checkIfLoadMoreNeeded">
    <li
        v-for="user in users"
        :key="user.id"
    >
      <UserItem
          :user="user"
          @click="setActiveUser(user)"
      />
    </li>
  </ul>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onUpdated, ref } from "vue";
import UserItem from "@/components/UI/UserItem.vue";
import { SET_ACTIVE_USER } from "@/consts/mutation-types";
import { loadMoreUsers } from "@/consts/action-types";

const store = useStore();
const scrollableElement = ref(null);
const users = computed(() => store.getters.users);

onUpdated(() => {
  checkIfLoadMoreNeeded();
  scrollToTop();
})

function setActiveUser(user) {
  store.commit(SET_ACTIVE_USER, user);
}

function checkIfLoadMoreNeeded() {
  const { scrollTop, clientHeight, scrollHeight } = scrollableElement.value;
  if ((scrollTop + clientHeight >= scrollHeight)) {
    store.dispatch(loadMoreUsers);
  }
}

function scrollToTop() {
  if (scrollableElement.value) {
    scrollableElement.value.scrollTop = 0;
  }
}
</script>

<style scoped lang="scss">
.user-list {
  padding: 10px;
  margin: -10px 0 0 -10px;
  height: calc(100vh - 380px);;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 17px;

  & > li {
    width: 240px;
  }
}
</style>