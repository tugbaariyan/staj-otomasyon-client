<template>
  <div class="student-cart-wrapper">
    <span>Ad: {{ student.firstName }} </span>
    <span>Soyad: {{ student.lastName }} </span>
    <ui-button
      label="Öğrenciyi Görüntüle"
      type="info"
      @click="goToStudentPage(student._id)"
      
    />
    
  </div>
</template>

<script>
export default {
  name: "StudentCard",
  props: {
    student: Object,
  },
  methods: {
    goToStudentPage(userId) {
      this.$router.push(`/student-detail/${userId}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.student-cart-wrapper {
  @include flexible($direction: column, $align: center);
  border: 1px solid $borderColor;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
