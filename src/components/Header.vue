<template>
  <div class="overflow-y-hidden">
    <v-app-bar class="h-20" color="color-bar" dense dark fixed>
      <div class="flex flex-wrap my-auto sm:pt-4">
        <div>
          <v-toolbar-title class="text-2xl font-black">QuizApp</v-toolbar-title>
        </div>
        <div class="pl-4 mt-1">
          <h2 class="text-lg sm:text-xl">Question: {{ index }}</h2>
        </div>
        <div class="ml-auto mt-1 sm:mx-auto">
          <h2 class="text-lg sm:text-xl">
            {{ min > 9 ? min : "0" + min }}:{{ sec > 9 ? sec : "0" + sec }}
          </h2>
        </div>
        <div class="my-flex">
          <h2 class="text-lg sm:pl-4 sm:text-xl">
            Correct: {{ correctQuestions }}
          </h2>
          <h2 class="pl-4 text-lg sm:text-xl">
            Incorrect: {{ incorrectQuestions }}
          </h2>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { bus } from "@/main.js";
export default {
  props: {
    min: Number,
    sec: Number
  },
  data() {
    return {
      index: 1
    };
  },
  computed: {
    incorrectQuestions() {
      return this.$store.getters.incorrectQuestions;
    },
    correctQuestions() {
      return this.$store.getters.correctQuestions;
    }
  },
  mounted() {
    bus.$on("question_index", a => {
      this.index = a;
    });
  }
};
</script>
<style lang="scss" scoped>
.h-20 {
  height: 5rem !important;
}
.color-bar {
  background: linear-gradient(180deg, #71f294, #e5f956);
}
@media (max-width: 540px) {
  .my-flex {
    display: flex;
  }
}
</style>
