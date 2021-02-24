<template>
  <div>
    <transition name="fade">
      <!-- Dynamic :class for dynamic tailwind bg color -->
      <div v-if="enabled" @click="disableNotification" :class="`bg-${notificationColor}-700`" class="w-50 rounded text-white p-2 fixed bottom-0 mb-4 right-0 mx-4">
        <div>{{ notificationText }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    computed: mapGetters ({
      enabled: 'notification/getEnabled',
      notificationText: 'notification/getText',
      notificationColor: 'notification/getColor'
    }),
    methods: {
      ...mapMutations({
        disableNotification: 'notification/disableNotification'
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>