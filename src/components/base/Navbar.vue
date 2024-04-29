<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar-wrapper">
    <div class="navbar-brand">
      <a href="https://www.ktun.edu.tr/" class="navbar-item">
        <img class="logo" src="@/assets/img/ktün.png" alt="KTUN" />
      </a>
    </div>
    <div class="navbar-menu">
      <ui-button
        label="Öğrencileri Görüntüle"
        v-if="userRole === 'teacher'"
        @click="goToStudentsPage"
      />
      <ui-button label="Belge Yükle" v-else @click="goToInternPage" />
      <ui-button label="Çıkış Yap" @click="signOut" />
      {{ userRole }}
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goToInternPage() {
      this.$router.push({ name: "fileUpload" });
    },
    goToStudentsPage() {
      this.$router.push("/all-students");
    },
    signOut() {
      this.$store.dispatch("user/signOut");
    },
  },
  computed: {
    userRole() {
      return this.$store.getters["user/getRole"];
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  display: flex;
  padding: 1rem 4rem;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 0 0 1rem 1rem;
}

.logo {
  width: 40px;
  height: auto;
}

.navbar-menu {
  @include flexible($justify: end);
  width: 100%;
}
</style>
