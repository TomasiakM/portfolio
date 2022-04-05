<template>
  <main :class="isOpen && 'open'">
    <Header id="home" />
    <Projects id="projects" />
    <Skills id="skills" />
    <Contact id="contact" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import Skills from "./Skills.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

export default defineComponent({
  name: "Main",
  props: {
    isOpen: Boolean,
  },
  components: {
    Header,
    Skills,
    Projects,
    Contact,
  },
});
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(0px);
  transition: transform 0.2s ease-in-out;

  &.open {
    transform: translateX(300px);
  }

  @media (min-width: 1024px) {
    transform: translateX(300px);
    width: calc(100% - 300px);
  }
}

section,
footer {
  width: 100%;
  padding: 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & > :last-child {
    flex: 1;
    margin-top: 40px;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
  @media (min-width: 1024px) {
    padding: 60px;

    & > :last-child {
      flex: 1;
      margin-top: 60px;
    }
  }
}
</style>