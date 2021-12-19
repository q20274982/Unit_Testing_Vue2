<!-- 我的頁面 -->
<template>
  <div>
    <p v-if="error" data-testid="message-error">{{ error }}</p>
    <p v-else data-testid="message">{{ message.text }}</p>
  </div>
</template>

<script>
import { getMessage } from '@/services/axios'

export default {
  data() {
    return {
      message: '',
      error: null
    }
  },
  async created() {
    try {
      this.message = await getMessage()
    } catch (err) {
      this.error = 'Oops ! Something went wrong'
    }
  }
}
</script>

<style lang="scss" scoped></style>
