<template>
  <div class="home-page-wrapper">
    <h1>Selam {{ userName }}, Staj Otomastonuma hoş geldin...</h1>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  computed: {
    userName() {
      return this.$store.getters["user/getUser"].firstName;
      // return this.$store.state.user.user.firstName;
    },
  },
};
</script>

<style scoped>
.home-page-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
