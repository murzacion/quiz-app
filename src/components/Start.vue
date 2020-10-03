<template>
  <div>
    <v-container class="pt-56">
      <v-card
        class="mx-auto"
        max-width="600"
        min-height="200"
        outlined
        style="background: linear-gradient(90deg, #71f294, #e5f956);"
      >
        <v-list-item three-line>
          <v-list-item-content class="text-center">
            <v-list-item-title class="headline mb-1 white--text"
              >Are you ready to start?</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-actions class="justify-center">
          <v-btn
            class="start-btn white--text"
            @click="getQuestions()"
            rounded
            color="red"
            >Start</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "start",
  data() {
    return {};
  },
  methods: {
    getQuestions() {
      var router = this.$router;
      router.push({ name: "Game" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
