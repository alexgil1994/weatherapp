<template>
  <div>
    {{ this.refactoredDate }}:00
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: null
      },
    },
    computed: {
      refactoredDate() {
        return this.text.substring(11,13)
      }
    },
  }
</script>

<style scoped>

</style>