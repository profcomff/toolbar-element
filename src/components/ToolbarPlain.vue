<template>
    <div>{{ options.text }}</div>
    <DropdownMenu
        v-if="options.menu && options.menu.length > 0"
        :menu="options.menu"
    />
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
</template>

<script>
import DropdownMenu from './DropdownMenu';
import * as singleSpa from 'single-spa';
import { windowWidthMixin } from '../mixins';
export default {
    components: { DropdownMenu },
    mixins: [windowWidthMixin],
    props: {
        options: { type: Object, default: () => ({ text: 'Твой физфак!' }) },
    },
    methods: {
        navigate(path) {
            singleSpa.navigateToUrl(path);
        },
    },
};
</script>

<style scoped>
div {
    color: #ffffff;
}
</style>
