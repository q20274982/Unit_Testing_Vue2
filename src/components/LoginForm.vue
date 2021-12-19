<!-- 我的頁面 -->
<template>
  <form @submit.prevent="onSubmit">
    <input
      data-testid="name-input"
      type="text"
      v-model="name"
      aria-label="input"
    />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: this.name })
    }
  }
}
</script>

<style lang="scss" scoped></style>
