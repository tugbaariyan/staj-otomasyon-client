<template>
  <div class="students-page-wrapper">
    <student-card
      v-for="(student, index) in students"
      :key="index"
      :student="student"
    />
  </div>
</template>

<script>
import StudentCard from "@/components/StudentCard.vue";
export default {
  components: { StudentCard },
  name: "StudentsPage",
  data() {
    return {
      students: [],
    };
  },
  methods: {
    async getAllSutudents() {
      this.students = await this.$store.dispatch("user/getAll");
    },
  },
  mounted() {
    this.getAllSutudents();
  },
};
</script>

<style lang="scss" scoped>
.students-page-wrapper {
  @include flexible($align: center, $justify: center);
  height: 100%;
}
</style>
