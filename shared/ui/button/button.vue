<script lang="ts" setup>
import type { ButtonProps } from "@/shared/types/ui-components";
// Props
const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  color: undefined,
  size: undefined,
  bold: undefined,
});
</script>

<template>
  <button
    class="ts-button"
    type="button"
    :disabled="props.disabled"
    :class="[
      props.color ? `ts-button--${props.color}` : null,
      props.bold ? `ts-button--${props.bold}` : null,
      props.size ? `ts-button--${props.size}` : null,
      props.disabled ? `ts-button--disabled` : null,
      //   props.isLoading ? `inactive-button` : null,
    ]"
  >
    <slot name="left_icon"> </slot>
    <!-- <Loader :color="props.color" v-if="props.isLoading" /> -->
    <!-- <slot v-else></slot> -->
    <slot name="right_icon"></slot>
  </button>
</template>

<style lang="scss" scoped>
.ts-button {
}
</style>
