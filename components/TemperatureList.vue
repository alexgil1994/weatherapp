<template>
  <div>
      <!-- <pre>{{tempTimeList}}</pre> -->
    <div class="mb-8 grid grid-cols-4 col-gap-5">
      <div v-for="(card, index) in this.tempTimeList" :key="index" class="h-32 pt-6 pb-2 bg-white rounded-lg shadow-md">
        <div class="flex justify-center">
          <h3 class="text-2xl text-gray-700 font-medium"><RoundNumberCard :text="card[1]"></RoundNumberCard> C</h3>
        </div>
        <div class="flex justify-end mr-3 mt-10">
          <h4 class="text-sm text-gray-600 font-medium"><RefactorDateCard :text="card[0]"></RefactorDateCard></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      tempTimeList: 'weatherapi/getTempTimeListPage',
    }),
  }
</script>

<style scoped>

</style>