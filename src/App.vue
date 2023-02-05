<template>
    <div class="toolbarContainer">
        <Component
            :is="activeVariant"
            :options="options"
        />
    </div>
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
    }),
    beforeMount() {
        document.addEventListener('change-header-layout', e => {
            Object.assign(this.options, e.detail);
        });
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
};
</script>
<style scoped>
.toolbarContainer {
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding: 10px 4%;
    height: 56px;
    background: var(--bs-primary);
}
</style>
