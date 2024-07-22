<template>
  <div class="spinner-container">
    <div class="spinner" v-if="spinner !== 0"></div>
  </div>
</template>

<script>
export default {
  name: "UISpinner",
  props: {
    spinner: { type: Number, default: 1 },
  },
};
</script>

<style scoped lang="scss">
.spinner-container {
  @include flexible($align: center, $justify: center);
  width: 100%;
  height: 100%;
  .spinner {
    border: 4px solid;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    width: 4rem;
    height: 4rem;
    border-color: red;
    border-top-color: transparent;
    animation-duration: 1s;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
