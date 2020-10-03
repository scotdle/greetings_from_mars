<template>
    <div class="the-image">
        <div class="the-image__container">
            <v-img v_bind:lazy-src="imageSrc" max-width="100%" v-bind:src="imageSrc"> </v-img>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: ['imageSrc'],

        data: () => ({

        })
    };
</script>

<style lang="scss" scoped>
@import "../scss/components/imageContainer.scss";
</style>