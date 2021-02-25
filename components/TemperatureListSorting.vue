<template>
  <div>
    <div class="mb-3 flex justify-between">
      <h3 class="mr-4">Sorting</h3>
      <div>
        <button @click="sortDescending" class="h-6 w-6 mx-3" title="Descending">
          <svg class="w-full h-full text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
          </svg>
        </button>
        <button @click="sortAscending" class="h-6 w-6" title="Ascending">
          <svg class="w-full h-full text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      sortDescending() {
      
      },
      sortAscending() {
        
      },
    },
  }
</script>

<style scoped>

</style>