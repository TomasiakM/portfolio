<template>
    <aside :class="isOpen && 'open'">
        <div class="img-wrapper">
            <img src="@/assets/me.jpg" alt="real pic" />
        </div>
        <div class="links">
            <a href="#" v-scroll-to="'#home'" @click="$emit('close')">Home</a>
            <a href="#" v-scroll-to="'#projects'" @click="$emit('close')"
                >Projekty</a
            >
            <a href="#" v-scroll-to="'#skills'" @click="$emit('close')"
                >Umiejętności</a
            >
            <a href="#" v-scroll-to="'#contact'" @click="$emit('close')"
                >Kontakt</a
            >
        </div>
        <div class="aside-footer">Portfolio - Marcin Tomasiak</div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "HelloWorld",
    props: {
        isOpen: Boolean,
    },
});
</script>

<style scoped lang="scss">
aside {
    background: $dark;
    height: 100vh;
    width: 300px;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    transform: translateX(-300px);
    transition: all 0.2s ease-in-out;

    &.open {
        transform: translateX(0px);
    }

    @media (min-width: 1024px) {
        transform: translateX(0px);
    }
}

.img-wrapper {
    padding: 12px 0;
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.4);

    img {
        display: block;
        margin: 0 auto;
        width: 80px;
        border-radius: 4px;
    }
    @media (min-width: 768px) {
        img {
            width: 130px;
        }
    }
}

.links {
    display: flex;
    flex-direction: column;

    a {
        padding: 8px 0;
        text-align: center;
        text-decoration: none;
        position: relative;
        font-weight: bold;
        color: rgba($color: #eeeeee, $alpha: 1);

        &:before {
            content: "";
            z-index: -11;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba($color: $primary, $alpha: 0.5);
            transform: translateX(-100%);
            transition: all 0.15s ease-in-out;
        }

        &:hover:before {
            transform: translateX(0);
        }
    }
}

.aside-footer {
    border-top: 1px solid rgba($color: #fff, $alpha: 0.4);
    padding: 12px 0;
    font-size: 14px;
    text-align: center;
    color: rgba($color: #eeeeee, $alpha: 1);
}
</style>
