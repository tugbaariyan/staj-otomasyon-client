<template>
  <default-layout v-if="layout" />
  <empty-layout v-else />
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import EmptyLayout from "./layouts/EmptyLayout.vue";
export default {
  name: "App",
  components: {
    EmptyLayout,
    DefaultLayout,
  },

  computed: {
    layout() {
      return this.$route.meta.isDefaultLayout;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
