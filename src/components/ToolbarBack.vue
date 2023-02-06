<template>
    <BaseLayout
        :title="options.text"
        :backable="true"
    >
        <template #actions>
            <DropdownMenu
                v-if="options.menu && options.menu.length > 0"
                :menu="options.menu"
            />
        </template>
    </BaseLayout>
</template>

<script>
import DropdownMenu from './DropdownMenu';
import { windowWidthMixin } from '../mixins';
import BaseLayout from './BaseLayout.vue';

export default {
    components: { DropdownMenu, BaseLayout },
    mixins: [windowWidthMixin],
    props: {
        options: { type: Object, default: () => ({ text: 'Твой физфак!' }) },
    },
    methods: {
        getButtons() {
            return JSON.parse(localStorage.getItem('navbar-buttons'));
        },
    },
};
</script>

<style scoped>
span,
div {
    color: #ffffff;
    margin-right: 16px;
}
</style>
