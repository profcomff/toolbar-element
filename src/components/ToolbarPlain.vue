<template>
    <BaseLayout :title="options.text">
        <template #menu>
            <DesktopNav v-if="windowWidth >= 576" />
        </template>
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
import DesktopNav from './DesktopNav.vue';
import BaseLayout from './BaseLayout.vue';

export default {
    components: { DropdownMenu, DesktopNav, BaseLayout },
    mixins: [windowWidthMixin],
    props: {
        options: { type: Object, default: () => ({ text: 'Твой физфак!' }) },
    },
};
</script>

<style scoped>
div {
    color: #ffffff;
}
</style>
