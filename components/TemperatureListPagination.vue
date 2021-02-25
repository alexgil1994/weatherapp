<template>
  <div>
    <div class="flex justify-between text-gray-600">
      <button @click="prevPage" class="h-8 w-8" title="Descending">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      </button>
      <button @click="nextPage" class="h-8 w-8" title="Descending">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      prevPage() {
      
      },
      nextPage() {
        
      }
    },
  }
</script>

<style scoped>

</style>