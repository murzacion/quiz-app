<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch("IMPORT_QUESTIONS");
  }
};
</script>
<style scoped>
.v-main {
  background-color: #f5f5f5;
}
</style>
