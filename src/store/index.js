import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    correct_questions: 0,
    incorrect_questions: 0
  },
  getters: {
    getQuestions: state => {
      return state.questions;
    },
    incorrectQuestions: state => {
      return state.incorrect_questions;
    },
    correctQuestions: state => {
      return state.correct_questions;
    }
  },
  mutations: {
    importQuestions(state, value) {
      state.questions = value;
    },
    Answered(state, value) {
      state.questions[value].answered = true;
    },
    CorrectQuestions(state) {
      state.correct_questions++;
    },
    IncorrectQuestions(state) {
      state.incorrect_questions++;
    },
    ResetState(state) {
      state.correct_questions = 0;
      state.incorrect_questions = 0;
    }
  },
  actions: {
    IMPORT_QUESTIONS({ commit }) {
      axios
        .get(`https://myapi-3df62.firebaseio.com/results.json`)
        .then(result => {
          console.log(result.data);
          commit("importQuestions", result.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    ANSWERED({ commit }, value) {
      commit("Answered", value);
    },
    CORRECT_QUESTIONS({ commit }) {
      commit("CorrectQuestions");
    },
    INCORRECT_QUESTIONS({ commit }) {
      commit("IncorrectQuestions");
    },
    RESET_STATE({ commit, dispatch }) {
      commit("ResetState");
      dispatch("IMPORT_QUESTIONS");
    }
  },
  modules: {}
});
