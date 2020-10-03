<template>
  <div>
    <Header :min="min" :sec="sec" />
    <QuestionsBox />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import QuestionsBox from "@/components/QuestionsBox";
export default {
  components: {
    Header,
    QuestionsBox
  },
  data() {
    return {
      min: 20,
      sec: 60
    };
  },
  watch: {
    sec: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.sec--;
          }, 1000);
        } else if (this.min > 0) {
          this.sec = 60;
          this.min--;
        } else {
          this.$router.push({ name: "Finish" });
        }
      },
      immediate: true
    }
  }
};
</script>

<style></style>
