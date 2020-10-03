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
            <v-list-item-title class="headline mb-1 white--text">
              <h2 class="pl-6">Correct Questions: {{ correctQuestions }}</h2>
              <h2 class="pl-6">
                Incorrect Questions: {{ incorrectQuestions }}
              </h2>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions class="justify-center">
          <v-card-actions class="justify-center">
            <v-btn
              class="start-btn white--text"
              @click="RestartQuiz()"
              rounded
              color="red"
              >Restart</v-btn
            ></v-card-actions
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
  computed: {
    incorrectQuestions() {
      return this.$store.getters.incorrectQuestions;
    },
    correctQuestions() {
      return this.$store.getters.correctQuestions;
    }
  },
  methods: {
    RestartQuiz() {
      this.$store.dispatch("RESET_STATE");
      var router = this.$router;
      router.push({ name: "Game" });
    }
  }
};
</script>
