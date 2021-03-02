<template>
  <div>
    <div class="flex justify-between text-gray-600">
      <button @click="prevPage" :disabled="this.page == 1" class="h-8 w-8" title="Previous Page">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      </button>
      <button @click="nextPage" :disabled="this.page == 6" class="h-8 w-8" title="Next Page">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      page: 'weatherapi/getPage',
    }),
    methods: {
      prevPage() {
        if (this.page != 1) {
          this.$store.commit('weatherapi/setPage', (this.page - 1))
        }
      },
      nextPage() {
        if (this.page != 6) {
          this.$store.commit('weatherapi/setPage', (this.page + 1))
        }
      }
    },
  }
</script>

<style scoped>

</style>