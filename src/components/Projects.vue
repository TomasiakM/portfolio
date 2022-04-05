<template>
    <section id="projects">
        <SectionHeader text="Projekty" />
        <div class="section-content">
            <div class="project-list">
                <ProjectItem
                    v-for="(project, i) in projects"
                    :key="i"
                    :project="project"
                />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionHeader from "./SectionHeader.vue";
import ProjectItem from "./ProjectItem.vue";

import projects from "@/assets/projects";

export default defineComponent({
    name: "Projects",
    components: {
        SectionHeader,
        ProjectItem,
    },
    data() {
        return {
            projects,
        };
    },
});
</script>


<style lang="scss" scoped>
.fade-enter-from {
    opacity: 0;
    transform: translateX(40px);
}

.fade-enter-active {
    transition: all 2s ease-in;
}

.section-content {
    display: flex;
    justify-content: center;
}
</style>