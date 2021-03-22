<template>
  <div>
    <template v-for="user in users">
      <UserCard :user="user" :key="user.id"></UserCard>
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
  methods: {
    hoge() {},
  },
})
</script>

<style scoped></style>
