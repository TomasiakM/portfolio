<template>
  <div
    :class="['section-header', isVisible && 'visible']"
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
    }"
  >
    <header>
      {{ text }}
    </header>
    <span></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SectionHeader",
  props: {
    text: String,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    visibilityChanged(isVisible: boolean) {
      this.isVisible = isVisible;
    },
  },
});
</script>

<style lang="scss" scoped>
.section-header {
  font-size: 24px;

  @include fadeFromLeft;

  header {
    &::before,
    &::after {
      font-size: 28px;
      color: $gray;
    }

    &::before {
      content: "{";
      margin-right: 8px;
    }
    &::after {
      content: "}";
      margin-left: 8px;
    }
  }

  @media (min-width: 768px) {
    font-size: 28px;

    header {
      &::before,
      &::after {
        font-size: 32px;
        color: $gray;
      }
    }
  }
}

span {
  display: block;
  width: 40px;
  height: 4px;
  margin-top: 4px;
  position: relative;
  border-radius: 0 4px 4px 0;
  background: $primary;

  &::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 0;
    width: 20px;
    height: 4px;
    border-radius: 0 4px 4px 0;
    background: rgba($color: $primary, $alpha: 0.4);
  }

  @media (min-width: 768px) {
    width: 60px;

    &::after {
      width: 30px;
    }
  }
}
</style>