<template>
  <Hamburger :isOpen="isOpen" @changeOpen="isOpen = !isOpen" />
  <Aside :isOpen="isOpen" @close="isOpen = false" />
  <Main :isOpen="isOpen" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Aside from "./components/Aside.vue";
import Main from "./components/Main.vue";
import Hamburger from "./components/Hamburger.vue";

export default defineComponent({
  name: "App",
  components: {
    Aside,
    Main,
    Hamburger,
  },
  data() {
    return {
      isOpen: false,
    };
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  color: white;
}

body {
  background: $dark-medium;
}

#app {
  overflow: hidden;
}
</style>