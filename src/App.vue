<template>
  <PageLayout>
    <TheNavbar :nav-items="messages['nav-items']"/>
    <CardLayout>
      <SideBlock>
        <SearchInput
            :title="messages['search-title']"
            :placeholder-text="messages['input-placeholder']"
        />
        <ItemList
            :items="users"
            :searchInitiated="searchInitiated"
            :title="messages['item-list-title']"
            :start-search-text="messages['start-search-text']"
            :no-result-text="messages['no-result-text']"
        >
          <UserList/>
        </ItemList>
      </SideBlock>
      <ItemCard
          :hasActiveItem="!!activeUser"
          :select-item-text="messages['select-item-text']"
      >
        <UserCard
            :user="activeUser"
            :about-title="messages['about-title']"
        />
      </ItemCard>
    </CardLayout>
  </PageLayout>
  <TheLoader/>
  <TheSnackbar/>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TheNavbar from "@/components/TheNavbar.vue";
import CardLayout from "@/components/CardLayout.vue";
import SideBlock from "@/components/SideBlock.vue";
import ItemCard from "@/components/ItemCard.vue";
import SearchInput from "@/components/UI/SearchInput.vue";
import ItemList from "@/components/ItemList.vue";
import PageLayout from "@/components/PageLayout.vue";
import TheLoader from "@/components/UI/TheLoader.vue";
import UserList from "@/components/UI/UserList.vue";
import UserCard from "@/components/UI/UserCard.vue";
import TheSnackbar from "@/components/UI/TheSnackbar.vue";
import { messages } from "@/consts/messages";

const store = useStore();
const users = computed(() => store.getters.users);
const activeUser = computed(() => store.getters.activeUser);
const searchInitiated = computed(() => store.getters.searchInitiated);
</script>
