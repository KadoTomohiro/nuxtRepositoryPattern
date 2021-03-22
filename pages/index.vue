<template>
  <div class="container">
    <UserList :users="users"></UserList>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserList from '~/components/UserList.vue'
import { User } from '~/types/User'

type Data = {
  users: User[]
}

export default Vue.extend({
  components: {
    UserList,
  },
  data(): Data {
    return {
      users: [],
    }
  },
  created() {
    this.$repositories.user.getAll().then((users) => (this.users = users))
  },
})
</script>

<style></style>
