<template>
  <button @click="$emit('changeOpen')" :class="isOpen && 'open'">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  background: $primary;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 11111;
  overflow: hidden;

  span {
    display: block;
    width: 28px;
    height: 3px;
    background: white;
    position: absolute;
    left: 9px;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &:nth-child(1) {
      top: 15px;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-child(3) {
      bottom: 15px;
    }
  }

  &.open span {
    &:nth-child(1) {
      transform-origin: 0 0;
      transform: rotate(45deg);
      top: 12px;
      left: 14px;
    }
    &:nth-child(2) {
      transform: translateY(-50%) translateX(40px);
      opacity: 0;
    }
    &:nth-child(3) {
      transform-origin: 0 0;
      bottom: 11px;
      transform: rotate(-45deg);
      left: 12px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Hamburger",
  props: {
    isOpen: Boolean,
  },
});
</script>