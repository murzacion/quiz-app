<template>
  <v-container class="pt-24">
    <v-card class="mx-auto" max-width="600">
      <v-img
        class="white--text align-end"
        height="275px"
        src="../assets/quiz_logo.png"
      >
        <v-card-title>Vue Quiz</v-card-title>
      </v-img>
      <v-card-text class="text--primary text-center text-lg">
        <div>{{ questions[index].question }}</div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-text class="text--primary text-center text-base">
        List of answers
      </v-card-text>
      <v-card
        class="mx-auto"
        max-width="550"
        :disabled="questions[index].answered || isCorect !== null"
      >
        <v-list flat>
          <v-list-item-group>
            <v-list-item
              v-for="(item, i) in questions[index].incorrect_answers"
              :key="i"
            >
              <v-list-item-content>
                <v-card-text
                  class="text-base leading-normal"
                  v-text="item"
                  @click.prevent="selectedAnswer(i)"
                  :class="answerClass(i)"
                ></v-card-text>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <div class="pt-6 pb-6 text-center ">
        <v-btn
          v-if="index > 0"
          class="prev-btn mx-6 white--text"
          @click="prev_question()"
          white
          >Prev</v-btn
        >
        <v-btn
          class="submit-btn mx-6 white--text"
          @click="submit()"
          white
          :disabled="
            questions[index].answered ||
              isCorect !== null ||
              selectedIndex === null
          "
          >Submit</v-btn
        >
        <v-btn
          v-if="index < 19"
          class="next-btn mx-6 white--text"
          @click="next_question()"
          white
          >Next</v-btn
        >
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { bus } from "@/main.js";
export default {
  data() {
    return {
      index: 0,
      selectedIndex: null,
      isCorect: null
    };
  },
  computed: {
    questions() {
      return this.$store.getters.getQuestions;
    }
  },
  methods: {
    next_question() {
      this.index++;
      this.selectedIndex = null;
      this.isCorect = null;
      bus.$emit("question_index", this.index + 1);
    },
    prev_question() {
      this.index--;
      this.selectedIndex = null;
      this.isCorect = null;
      bus.$emit("question_index", this.index + 1);
    },
    selectedAnswer(i) {
      console.log(i);
      this.selectedIndex = i;
    },
    submit() {
      this.isCorect = false;
      if (
        this.questions[this.index].incorrect_answers[this.selectedIndex] ===
        this.questions[this.index]["correct_answer"]
      ) {
        this.isCorect = true;
        this.$store.dispatch("CORRECT_QUESTIONS");
      } else {
        this.$store.dispatch("INCORRECT_QUESTIONS");
      }
      this.$store.dispatch("ANSWERED", this.index);
    },
    answerClass(i) {
      let answerClass = "";
      if (!this.questions[this.index].answered && this.selectedIndex === i) {
        answerClass = "selected";
      } else if (
        this.questions[this.index].answered &&
        this.questions[this.index].correct_answer ===
          this.questions[this.index].incorrect_answers[i]
      ) {
        answerClass = "correct-answer font-bold";
      } else if (
        this.questions[this.index].answered &&
        this.selectedIndex === i &&
        this.questions[this.index].correct_answer !==
          this.questions[this.index].incorrect_answers[i]
      ) {
        answerClass = "incorrect-answer";
      }
      return answerClass;
    }
  }
};
</script>

<style>
.v-btn {
  outline: 0 !important;
}
.next-btn {
  background-color: #00e676 !important;
}
.prev-btn {
  background-color: #ffee58 !important;
}
.submit-btn {
  background-color: #f44336 !important;
}
.correct-answer {
  color: #68d391;
}
.incorrect-answer {
  color: #e53e3e;
}
.selected {
  color: #3182ce;
}
</style>
