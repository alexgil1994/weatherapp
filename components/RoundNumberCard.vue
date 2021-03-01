<template>
  <div class="inline">
    {{ this.roundedNumber }}
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: Number,
        default: null
      },
    },
    computed: {
      roundedNumber() {
        return Math.trunc(this.text)
      }
    },
  }
</script>

<style scoped>

</style>