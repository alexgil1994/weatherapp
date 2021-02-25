<template>
  <div>
    <div class="mb-8 grid grid-cols-4 col-gap-5">
      <div v-for="(item, index) in 4" :key="index" class="h-32 pt-6 pb-2 bg-white rounded-lg shadow-md">
        <div class="flex justify-center">
          <h3 class="text-2xl text-gray-700 font-medium">27 C</h3>
        </div>
        <div class="flex justify-end mr-3 mt-10">
          <h4 class="text-sm text-gray-600 font-medium">10:20</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>