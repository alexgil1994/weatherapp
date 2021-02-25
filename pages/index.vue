<template>
  <div>
    <div class="md:w-4/5 md:mx-auto">
      <!-- Header -->
      <div class="mt-16 ml-5 md:ml-0 mb-6">
        <h1 class="text-lg text-gray-700">Choose a location</h1>
      </div>
      <!-- Map -->
      <Map/>
      <div class="md:mt-20 md:mb-24 flex flex-wrap justify-between items-center lg:justify-around">
        <!-- Location Data -->
        <LocationData class="my-10 md:my-0 w-full md:w-2/6"/>
        <!-- Graph Location Data -->
        <Graph class="w-full mx-4 mt-10 mb-20 sm:w-3/4 sm:mx-auto md:w-3/6 md:mx-0 md:my-0"/>
      </div>
      <!-- List of paginated temperatures -->
      <div class="mx-4 pb-32 sm:w-2/3 xl:w-1/2 sm:mx-auto">
        <div>
          <!-- Sorting buttons -->
          <TemperatureListSorting/>
          <!-- List -->
          <TemperatureList/>
          <!-- Pagination -->
          <TemperatureListPagination/>

        </div>  
      </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
