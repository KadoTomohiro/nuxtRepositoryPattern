<template>
  <span>{{ gender.label }}</span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Gender } from '~/types/User'

export default Vue.extend({
  name: 'GenderSelect',
  props: {
    gender: { type: Gender },
  },
  computed: {},
})
</script>

<style scoped></style>
