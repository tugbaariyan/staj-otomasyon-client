<template>
  <div class="ui-modal-wrapper" v-if="display">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UIModal",
  props: {
    display: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.ui-modal-wrapper {
  position: fixed;
  top: 50%;
  min-width: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 2;
  border: 1px solid black;
  border-radius: 0.5rem;
  overflow: hidden;

  .modal {
    @include flexible($direction: column);
    width: calc(100% - 2rem);
    height: 100%;
    .modal-header {
      background-color: $borderColor;
      color: $black;
      padding: 1rem;
      width: 100%;
    }
    .modal-content {
      width: 100%;
      padding: 1rem;
    }
    .modal-footer {
      @include flexible($justify: flex-end);
      width: 100%;
      height: 15%;
      padding: 1rem;
      position: static;

      border-top: 1px solid black;
      .footer-button-wrapper {
        @include flexible($justify: space-between);
      }
    }
  }
}
</style>
