<template>
  <UserCard :user="user"></UserCard>
</template>

<script lang="ts">
import Vue from 'vue'
import UserCard from '~/components/UserCard.vue'
import { Gender, User } from '~/types/User'

type Data = {
  user: User
}

export default Vue.extend({
  components: { UserCard },
  data(): Data {
    return {
      user: {
        id: '',
        name: '',
        birthDay: new Date(),
        gender: new Gender('1'),
      },
    }
  },
  async crated() {
    const id = this.$route.params.id
    this.user = await this.$repositories.user.get(id)
    console.log(this.user)
  },
})
</script>

<style scoped></style>
