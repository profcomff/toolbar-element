<template>
    <BaseLayout
        :title="options.text"
        :menu="options.menu"
    />
</template>

<script>
import BaseLayout from './BaseLayout.vue';

export default {
    components: { BaseLayout },
    props: {
        options: { type: Object, required: true },
    },
};
</script>
