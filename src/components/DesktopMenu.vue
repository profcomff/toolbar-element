<template>
    <menu class="desktop-menu">
        <DesktopMenuItem
            v-for="(item, i) in items"
            :key="item.title"
            v-bind="item"
            :active="pathname.startsWith(item.path)"
            @click="() => navigate(i)"
        />
    </menu>
</template>
<script>
import * as singleSpa from 'single-spa';
import DesktopMenuItem from './DesktopMenuItem.vue';
const items = [
    { title: 'Расписание', path: '/timetable' },
    { title: 'Сервисы', path: '/apps' },
];

export default {
    data() {
        return {
            items,
            pathname: window.location.pathname,
        };
    },
    methods: {
        navigate(i) {
            singleSpa.navigateToUrl(items[i].path);
        },
        beforeRoutingEventHandler() {
            this.pathname = window.location.pathname;
        },
    },
    components: { DesktopMenuItem },
    mounted() {
        window.addEventListener('single-spa:before-routing-event', this.beforeRoutingEventHandler);
    },
    unmounted() {
        window.removeEventListener('single-spa:before-routing-event', this.beforeRoutingEventHandler);
    },
};
</script>
<style scoped>
.active {
    color: var(--bs-secondary);
}
.desktop-menu {
    display: flex;
    gap: 12px;
    flex: 1;
    margin: 0;
    padding: 0;
}
</style>
