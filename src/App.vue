<template>
    <Component
        :is="activeVariant"
        :options="options"
        :date="date"
    />
</template>

<script>
import { ToolbarBack, ToolbarCalendar, ToolbarPlain } from './components';

export default {
    components: {
        ToolbarBack,
        ToolbarCalendar,
        ToolbarPlain,
    },
    data: () => ({
        options: {},
        date: new Date(),
    }),
    beforeMount() {
        document.addEventListener(
            'change-header-layout',
            this.changeHeaderHandler,
        );
        document.addEventListener('change-date', this.changeDateHandler);
        document.addEventListener('sync-date', this.syncDateHandler);
    },
    beforeUnmount() {
        document.removeEventListener(
            'change-header-layout',
            this.changeHeaderHandler,
        );
        document.removeEventListener('change-date', this.changeDateHandler);
        document.remove('sync-date', this.syncDateHandler);
    },
    computed: {
        activeVariant() {
            switch (this.options.layoutName) {
                case 'calendar':
                    return ToolbarCalendar;
                case 'back':
                    return ToolbarBack;
            }
            return ToolbarPlain;
        },
    },
    methods: {
        changeHeaderHandler(e) {
            this.options = e.detail;
        },
        changeDateHandler(e) {
            this.date = e.detail.date;
        },
        syncDateHandler() {
            document.dispatchEvent(
                new CustomEvent('sync-date-response', {
                    detail: {
                        date: this.date,
                    },
                }),
            );
        },
    },
};
</script>
<style scoped>
.toolbarContainer {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    width: 100%;
    padding: 10px 4%;
    background: var(--bs-primary);
}
</style>
