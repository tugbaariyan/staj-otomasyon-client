<template>
  <div class="student-detail-page-wrapper">
    {{ student }}
  </div>
</template>

<script>
export default {
  name: "StudentDetailPage",
  data() {
    return {
      student: {},
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    async getStudentByID() {
      this.student = await this.$store.dispatch("user/getById", this.id);
    },
  },
  mounted() {
    this.getStudentByID();
  },
};
</script>

<style lang="scss" scoped>
.student-detail-page-wrapper {
  @include flexible();
}
</style>
