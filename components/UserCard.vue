<template>
  <div class="card">
    <p>name: {{ user.name }}</p>
    <p>birthDay: {{ user.birthDay | date }}</p>
    <p>gender: <GenderSelect :gender="user.gender"></GenderSelect></p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { User } from '~/types/User'
import GenderSelect from '~/components/GenderSelect.vue'

export default Vue.extend({
  name: 'UserCard',
  components: {
    GenderSelect,
  },
  props: {
    user: { type: Object as PropType<User> },
  },
})
</script>

<style scoped>
.card {
  border: 1px solid #4c4c4c;
  border-radius: 10px;
  padding: 1em;
  display: inline-block;
}
</style>
