<template>
  <!-- Navbar Buraya yazılacak -->
  <div class="default-layout">
    <navbar />
    <div class="router-view">
      <router-view />
    </div>
    <footer-vue />
  </div>
  <!-- Footer buraya yazılacak. -->
</template>

<script>
import Navbar from "@/components/base/Navbar.vue";
import FooterVue from "@/components/base/Footer.vue";
export default {
  components: { Navbar, FooterVue },
  name: "DefaultLayout",
};
</script>

<style>
.default-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.router-view {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 90%;
  padding: 1rem 4rem;
  overflow: hidden;
}
</style>
