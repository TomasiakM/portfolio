<template>
  <header
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
    }"
  >
    <div class="left-side">
      <div class="hidden">{{'<Frontend Developer />'}}</div>
      <v-typical
        class="blink"
        :steps="['Cześć!']"
        :loop="1"
        :wrapper="'div'"
      ></v-typical>
      <v-typical
        class="blink"
        :steps="[600, 'Jestem Marcin,']"
        :loop="1"
        :wrapper="'div'"
      ></v-typical>
      <v-typical
        class="blink"
        :steps="[1800, '<Frontend Developer />']"
        :loop="1"
        :wrapper="'div'"
      ></v-typical>
    </div>
    <HelloSvg :class="isVisible && 'visible'" />
  </header>
</template>
<script lang="ts">
import HelloSvg from "@/svg/Hello.vue";
import { defineComponent } from "@vue/runtime-core";
import VTypical from "vue-typical";

export default defineComponent({
  name: "Header",
  data() {
    return {
      isVisible: false,
    };
  },
  components: {
    HelloSvg,
    VTypical,
  },
  methods: {
    visibilityChanged(isVisible: boolean) {
      this.isVisible = isVisible;
    },
  },
});
</script>
<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 100vh;

  svg {
    width: 200px;
    height: auto;

    @include fadeFromRight;
  }

  .left-side {
    font-size: 22px;

    div {
      height: 28px;

      &.hidden {
        opacity: 0;
        height: 0px;
      }

      &:last-child {
        color: $primary;
      }
    }
  }

  @media (min-width: 768px) {
    .left-side {
      font-size: 24px;
    }
    svg {
      width: 350px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    .left-side {
      font-size: 28px;
    }
  }
}
</style>