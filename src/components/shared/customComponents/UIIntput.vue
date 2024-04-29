<template>
  <div class="wrapper" :style="getDynamicStyles()">
    <label class="label">
      <span>{{ label }}</span>
      <span v-if="!column && label">:</span>
    </label>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="updateModelValue"
      v-if="type !== 'radio'"
      class="input"
      :disabled="disabled"
      :class="{ disabled }"
    />
    <div class="radio-buttons" v-else>
      <label
        v-for="(option, index) in options"
        :key="index"
        class="radio-button"
        :class="{ checked: isChecked(option) }"
      >
        <input
          class="radio"
          type="radio"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="updateModelValue(option.value)"
        />
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIInput",
  props: {
    modelValue: {
      type: [String, Number],
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "Metninizi Buraya giriniz",
    },
    column: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateModelValue(event) {
      if (this.type === "radio") {
        this.$emit("update:modelValue", event);
      } else if (this.type === "number") {
        this.$emit("update:modelValue", parseFloat(event.target.value));
      } else {
        this.$emit("update:modelValue", event.target.value);
      }
    },
    getDynamicStyles() {
      return {
        flexDirection: this.column ? "column" : "row",
      };
    },
    isChecked(option) {
      return this.modelValue === option.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include flexible($align: center, $justify: center, $gap: 0.5rem);
  .label {
    color: #333;
    font-weight: bold;
  }
  .input {
    padding: 0.5rem;
    border: 1px solid $borderColor;
    border-radius: 0.5rem;
    font-size: $font-md;
    outline: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      border-color: #aaa;
    }
    &:focus {
      border-color: $primary;
      outline: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
    &::placeholder {
      color: $placeholder;
    }

    &.disabled {
      cursor: not-allowed;
    }
  }

  .radio-buttons {
    @include flexible($justify: center);

    .radio-button {
      @include flexible($align: normal, $gap: 0.5rem);
      border: 1px solid $borderColor;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      font-weight: 500;
      &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16),
          0 2px 10px 0 rgba(0, 0, 0, 0.12);
      }
      &.checked {
        background-color: $primary;
        color: $white;
      }
      .radio {
        display: none;
      }
    }
  }
}
</style>
