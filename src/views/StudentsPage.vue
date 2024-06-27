<template>
  <div>
    <div class="students-page-wrapper">
      <student-card
        v-for="(student, index) in students"
        :key="index"
        :student="student"
      />
    </div>
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
    async getAllStudents() {
      this.students = await this.$store.dispatch("user/getAll");
    },
  },
  mounted() {
    this.getAllStudents();
  },
};
</script>

<style lang="scss" scoped>
.students-page-wrapper {
  @include flexible($align: center, $justify: center);
  height: 100%;
}
</style>
