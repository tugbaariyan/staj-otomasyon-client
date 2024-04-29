<template>
  <div class="empty-layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "EmptyLayout",
};
</script>

<style lang="scss" scoped>
.empty-layout {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
