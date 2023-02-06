<template>
    <menu class="desktop-menu">
        <DesktopMenuItem
            v-for="(item, i) in items"
            :key="item.title"
            v-bind="item"
            :active="active === i"
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
            active: items.reduce(
                (acc, cur, i) =>
                    window.location.pathname.startsWith(cur.path) ? i : acc,
                0,
            ),
        };
    },
    methods: {
        navigate(i) {
            this.active = i;
            document.dispatchEvent(
                new CustomEvent('change-page', {
                    detail: {
                        path: items[i].path,
                    },
                }),
            );
            singleSpa.navigateToUrl(items[i].path);
        },
    },
    components: { DesktopMenuItem },
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
