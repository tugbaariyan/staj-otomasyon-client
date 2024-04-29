<template>
  <button
    class="wrapper"
    :style="getDynamicStyles()"
    :class="classes"
    :disabled="disabled"
  >
    <span v-if="icon">
      <i :class="[icon, { 'big-icon': bigIcon }]"></i>
    </span>
    <span v-if="label">
      {{ label }}
    </span>
  </button>
</template>

<script>
export default {
  name: "UIButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "md",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Button",
    },
    icon: {
      type: String,
      default: "",
    },
    bigIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `size-${this.size}`,
        this.disabled ? "disabled type-disabled" : `type-${this.type}`,
      ];
    },
  },
  methods: {
    getDynamicStyles() {
      return {
        flexDirection: this.bigIcon ? "column" : "row",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include flexible($align: center, $justify: center, $gap: 0.5rem);
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: $font-md;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  .big-icon {
    font-size: 200%;
  }

  &:hover:not(.disabled) {
    opacity: 0.95;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transform: scale(1.05);
    i {
      transform: scale(1.2);
    }
  }

  &.disabled {
    cursor: not-allowed;
  }
}
</style>
