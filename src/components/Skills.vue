<template>
    <section>
        <SectionHeader text="Umiejętności" />

        <div class="section-content">
            <div class="skill-list">
                <SkillItem
                    v-for="skill in skills"
                    :key="skill.id"
                    :data="skill"
                />
            </div>
        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import SectionHeader from "./SectionHeader.vue";
import SkillItem from "./SkillItem.vue";

export default defineComponent({
    name: "Skills",
    components: {
        SectionHeader,
        SkillItem,
    },
    data() {
        return {
            skills: [
                { id: 0, name: "Html", svg: "HtmlSVG" },
                { id: 1, name: "Css", svg: "CssSVG" },
                { id: 2, name: "JavaScript", svg: "JsSVG" },
                { id: 3, name: "Vue", svg: "VueSVG" },
                { id: 4, name: "React", svg: "ReactSVG" },
                { id: 5, name: "SCSS", svg: "ScssSVG" },
                { id: 6, name: "Node.js", svg: "NodeSVG" },
                { id: 7, name: "Express.js", svg: "ExpressSVG" },
                { id: 8, name: "MongoDB", svg: "MongoSVG" },
            ],
        };
    },
});
</script>


<style lang="scss" scoped>
.section-content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
}
.skill-list {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 400px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (min-width: 1400px) {
        gap: 16px;
    }
}
</style>