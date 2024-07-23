<template>
  <div>
    <div class="students-page-wrapper">
      <div class="select-section">
        <select class="staj_turu_form" v-model="selected">
          <option value="all">Hepsi</option>
          <option value="approved">Onaylananlar</option>
          <option value="pending">Onay Bekleyenler</option>
          <option value="denied">Reddedilenler</option>
        </select>
      </div>
      <div class="student-section">
        <student-card
          v-for="(student, index) in students"
          :key="index"
          :student="student"
        />
        <div v-if="students.length === 0">
          <h1>Öğrenci Bulunamadı</h1>
        </div>
      </div>
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
      selected: "all",
    };
  },
  watch: {
    selected(newVal) {
      console.log(newVal);
      if (this.selected === "all") {
        this.getAllStudents();
      } else {
        this.getDocumentsWithStatus(newVal);
      }
    },
  },
  methods: {
    async getAllStudents() {
      this.students = await this.$store.dispatch("user/getAll");
    },
    async getDocumentsWithStatus(status) {
      const response = await this.$store.dispatch(
        "document/getDocumentsWithStatus",
        status
      );
      this.students = response.map((data) => {
        return data.uploader;
      });
    },
  },
  mounted() {
    this.getAllStudents();
  },
};
</script>

<style lang="scss" scoped>
.students-page-wrapper {
  @include flexible($align: center, $justify: center, $direction: column);
  height: 100%;
  .student-section {
    @include flexible($align: center, $justify: center, $wrap: wrap);
  }
}
</style>
