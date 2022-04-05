<template>
    <div
        :class="['skill', isVisible && 'visible']"
        v-observe-visibility="{
            callback: visibilityChanged,
            once: true,
        }"
    >
        <component :is="data.svg"></component>
        <span>{{ data.name }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import HtmlSVG from "../svg/skills/Html.vue";
import CssSVG from "../svg/skills/Css.vue";
import JsSVG from "../svg/skills/Js.vue";
import ScssSVG from "../svg/skills/Scss.vue";
import ReactSVG from "../svg/skills/React.vue";
import VueSVG from "../svg/skills/Vue.vue";
import NodeSVG from "../svg/skills/Node.vue";
import ExpressSVG from "../svg/skills/Express.vue";
import MongoSVG from "../svg/skills/Mongo.vue";

export default defineComponent({
    name: "SkillItem",
    props: {
        data: {
            type: Object as PropType<{ id: number; name: string; svg: string }>,
            required: true,
        },
    },
    data() {
        return {
            isVisible: false,
        };
    },
    components: {
        HtmlSVG,
        CssSVG,
        JsSVG,
        ScssSVG,
        ReactSVG,
        VueSVG,
        NodeSVG,
        ExpressSVG,
        MongoSVG,
    },
    methods: {
        visibilityChanged(isVisible: boolean) {
            this.isVisible = isVisible;
        },
    },
});
</script>

<style lang="scss" scoped>
.skill {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: $dark;
    border: 1px solid rgba($color: $gray, $alpha: 0.3);
    border-radius: 4px;
    min-height: 120px;
    @include fadeFromBottom;

    svg {
        justify-self: center;
        width: 80%;
        max-width: 60px;
        margin: auto;
    }

    span {
        margin-top: 10px;
    }

    @media (min-width: 768px) {
        padding: 20px;
    }
    @media (min-width: 1024px) {
        min-height: 160px;
        svg {
            max-width: 80px;
        }
    }
}
</style>
