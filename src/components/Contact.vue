<template>
    <footer>
        <SectionHeader text="Kontakt" />
        <div class="section-content">
            <div
                :class="['left-section', isLeftVisible && 'visible']"
                v-observe-visibility="{
                    callback: visibilityChangedLeft,
                    once: true,
                }"
            >
                <ContactSvg />
            </div>
            <div
                :class="['right-section', isRightVisible && 'visible']"
                v-observe-visibility="{
                    callback: visibilityChangedRight,
                    once: true,
                }"
            >
                <div>
                    <PhoneSvg />
                    <p>507 363 289</p>
                </div>
                <div>
                    <MailSvg />
                    <a href="mailto:marcintomasiak00@gmail.com">
                        marcintomasiak00@gmail.com
                    </a>
                </div>
                <div>
                    <GitHubSvg />
                    <a href="https://github.com/TomasiakM"
                        >github.com/TomasiakM</a
                    >
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SectionHeader from "./SectionHeader.vue";
import ContactSvg from "../svg/Contact.vue";
import PhoneSvg from "../svg/Phone.vue";
import MailSvg from "../svg/Mail.vue";
import GitHubSvg from "../svg/GitHub.vue";

export default defineComponent({
    name: "Contact",
    components: {
        SectionHeader,
        ContactSvg,
        PhoneSvg,
        MailSvg,
        GitHubSvg,
    },
    data() {
        return {
            isLeftVisible: false,
            isRightVisible: false,
        };
    },
    methods: {
        visibilityChangedLeft(isVisible: boolean) {
            this.isLeftVisible = isVisible;
        },
        visibilityChangedRight(isVisible: boolean) {
            this.isRightVisible = isVisible;
        },
    },
});
</script>

<style lang="scss" scoped>
.section-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * {
        max-width: 500px;
        width: 100%;
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
}

.left-section {
    @include fadeFromLeft;
    display: flex;
    justify-content: center;

    svg {
        max-width: 280px;
    }

    @media (min-width: 768px) {
        svg {
            max-width: none;
        }
    }
}

.right-section {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @include fadeFromRight;

    div {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        font-size: 18px;

        a {
            text-decoration: none;
            transition: all 0.15s ease-in-out;
            &:hover {
                color: $primary;
            }
        }

        svg {
            margin-right: 8px;
            width: 36px;
            height: auto;
        }
    }

    @media (min-width: 768px) {
        align-items: flex-start;
    }
}
</style>