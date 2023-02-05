<template>
    <div>{{ options.text }}</div>
    <DropdownMenu
        v-if="options.menu && options.menu.length > 0"
        :menu="options.menu"
    />
    <DesktopNav v-if="windowWidth >= 576" />
</template>

<script>
import DropdownMenu from './DropdownMenu';
import { windowWidthMixin } from '../mixins';
import DesktopNav from './DesktopNav.vue';

export default {
    components: { DropdownMenu, DesktopNav },
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
