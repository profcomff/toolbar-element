<template>
    <div class="toolbarContainer">
        <KeepAlive>
            <Component
                :is="activeVariant"
                :options="options"
                @navigate="navigate"
            />
        </KeepAlive>
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
        layoutName: 'plain',
        text: 'Твой физфак!',
    }),
    beforeMount() {
        document.addEventListener('change-header-layout', e => {
            this.layoutName = e.detail.layoutName;
            this.options = e.detail;
        });
    },
    computed: {
        activeVariant() {
            switch (this.layoutName) {
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
}
</style>
