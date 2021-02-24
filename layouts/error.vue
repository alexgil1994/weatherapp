<template>
  <div style="min-height: 600px">
    <div class="flex flex-wrap my-64 justify-center">
      <div class="w-full flex-col md:w-4/6 p-4 my-16 flex items-center text-gray-800">
        <h1 v-if="error.statusCode === 404" class="mb-4 font-medium text-2xl">
          {{ errorPage.title404 }}
        </h1>
        <h1 v-else-if="error.statusCode === 502" class="mb-4 font-medium text-2xl">
          {{ errorPage.title502 }}
        </h1>
        <h1 v-else class="mb-4 font-medium text-2xl">{{ errorPage.titleOther }}</h1>
        <p class="subheading">{{ errorPage.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "default",
  props: ["error"],
  head() {
    return {
      title: this.errorPage.title
    }
  },
  data() {
    return {
      errorPage: {
        title: "Υπήρξε κάποιο σφάλμα",
        title404: "404 Page Not Found",
        title502: "502 Bad Gateway",
        titleOther: "There was an error",
        text:
          "There was a problem trying to navigate to the requested page. This may occur because the page is no longer active. Check to to see for any mistakes occured"
      }
    }
  }
}
</script>