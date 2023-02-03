<template>
    <ButtonIcon
        icon="arrow_back"
        @click="back"
    />
    <div>{{ options.text }}</div>
    <div
        style="display: flex; gap: 12px; flex: 1"
        v-if="windowWidth >= 576"
    >
        <button
            style="color: white"
            @click="() => navigate('/timetable')"
        >
            Расписание
        </button>
        <button
            style="color: white"
            @click="() => navigate('/apps')"
        >
            Сервисы
        </button>
    </div>
    <DropdownMenu
        v-if="options.menu && options.menu.length > 0"
        :menu="options.menu"
    />
</template>

<script>
import ButtonIcon from './ButtonIcon';
import DropdownMenu from './DropdownMenu';
import * as singleSpa from 'single-spa';
import { windowWidthMixin } from '../mixins';
export default {
    components: { DropdownMenu, ButtonIcon },
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
        navigate(path) {
            singleSpa.navigateToUrl(path);
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
