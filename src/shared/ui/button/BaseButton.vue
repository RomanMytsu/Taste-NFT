<script setup>
import { computed } from "vue"

const props = defineProps({
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md"].includes(value),
  },

  type: {
    type: String,
    default: "button",
  },
})

defineEmits(["click"])

const buttonClasses = computed(() => {
  return ["base-button", `base-button__size-${props.size}`]
})
</script>

<template>
  <button :type="type" :class="buttonClasses" v-bind="$attrs" @click="$emit('click', $event)">
    <slot>Connect wallet</slot>
  </button>
</template>

<style scoped lang="scss">
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 15px 30px 0 rgba(20, 102, 204, 0.16);
  background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
  border: none;

  font-family: $font-family;
  font-weight: 700;

  color: #fff;
  white-space: nowrap;
  transition:
    opacity 0.2s ease,
    transform 0.1s ease;

  &:hover {
    opacity: 0.9;
  }

  &__size-md {
    padding: 0 19px;
    height: 32px;
    font-size: 12px;
  }

  &__size-sm {
    font-size: 14px;
    padding: 0 32px;
    height: 40px;
  }
}
</style>
