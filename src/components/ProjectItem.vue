<template>
    <div
        :class="['project-item-wrapper', isVisible && 'visible']"
        v-observe-visibility="{
            callback: visibilityChanged,
            once: true,
        }"
    >
        <div class="project">
            <img
                :src="require(`../assets/img/${project.image}`)"
                :alt="project.image"
            />
            <div class="details">
                <div>
                    <header>
                        <h5>{{ project.name }}</h5>
                        <span>({{ project.stack }})</span>
                    </header>
                </div>
                <div class="description">{{ project.description }}</div>
                <div class="links">
                    <a :href="project.live" target="_blank">Live</a>
                    <div>
                        <a :href="project.gitHub" target="_blank">Source</a>
                        <a
                            v-if="project.gitHub2"
                            :href="project.gitHub2"
                            target="_blank"
                            style="margin-left: 8px"
                            >Source 2</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { IProject } from "../assets/projects";

export default defineComponent({
    name: "ProjectItem",
    props: {
        project: {
            type: Object as PropType<IProject>,
            required: true,
        },
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
.project-item-wrapper {
    margin-bottom: 40px;
    max-width: 1000px;

    @include fadeFromBottom;

    &:last-child {
        margin-bottom: 0;
    }
}

.project {
    display: grid;
    background: $dark;
    border-radius: 4px;
    border: 1px solid rgba($color: $gray, $alpha: 0.3);
    grid-template-columns: 1fr;
    overflow: hidden;

    img {
        width: 100%;
    }

    .details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        min-height: 200px;

        header {
            color: $primary;
            font-size: 24px;

            span {
                font-size: 14px;
                color: $gray;
                display: block;
            }
        }

        .description {
            flex: 1;
            margin: 8px 0 16px;
            font-size: 14px;
        }

        .links {
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                font-size: 14px;
                text-decoration: none;
                background: $primary;
                border: 1px solid $primary;
                border-radius: 4px;
                padding: 4px 8px;
                transition: all 0.1s ease-in-out;

                &:hover {
                    background: transparent;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;

        .details {
            header {
                font-size: 22px;
                color: $primary;
            }

            .description {
                font-size: 16px;
                margin: 16px 0;
            }

            .links a {
                font-size: 16px;
                padding: 4px 12px;
            }
        }
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}
</style>