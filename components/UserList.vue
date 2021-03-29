<template>
  <div>
    <template v-for="user in users">
      <NuxtLink :to="`/${user.id}`" :key="user.id">
        <UserCard :user="user"></UserCard>
      </NuxtLink>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import UserCard from '~/components/UserCard.vue'
import { User } from '~/types/User'
export default Vue.extend({
  name: 'UserList',
  components: {
    UserCard,
  },
  props: {
    users: { type: Array as PropType<User[]> },
  },
})
</script>

<style scoped></style>
