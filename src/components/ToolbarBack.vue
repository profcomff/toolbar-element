<template>
    <ButtonIcon
        icon="arrow_back"
        @click="back"
    />
    <div>{{ options.text }}</div>
    <DesktopNav v-if="windowWidth >= 576" />

    <DropdownMenu
        v-if="options.menu && options.menu.length > 0"
        :menu="options.menu"
    />
</template>

<script>
import ButtonIcon from './ButtonIcon';
import DropdownMenu from './DropdownMenu';
import DesktopNav from './DesktopNav.vue';
import { windowWidthMixin } from '../mixins';
export default {
    components: { DropdownMenu, ButtonIcon, DesktopNav },
    mixins: [windowWidthMixin],
    props: {
        options: { type: Object, default: () => ({ text: 'Твой физфак!' }) },
    },
    methods: {
        back() {
            window.history.back();
        },
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
