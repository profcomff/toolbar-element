<template>
    <div class="base-layout">
        <div class="meta">
            <ButtonIcon
                v-if="backable"
                icon="arrow_back"
                @click="back"
            />
            <span class="noselect title">{{ title }}</span>
            <slot name="meta" />
        </div>
        <div class="vl" />
        <DesktopMenu class="only-desktop" />
        <div class="actions">
            <slot name="actions" />
            <DropdownMenu
                v-if="menu.length > 0"
                :menu="menu"
            />
        </div>
    </div>
</template>

<script>
import ButtonIcon from './ButtonIcon.vue';
import DesktopMenu from './DesktopMenu.vue';
import DropdownMenu from './DropdownMenu.vue';

export default {
    components: { ButtonIcon, DesktopMenu, DropdownMenu },
    props: {
        title: {
            type: String,
            default: '',
        },
        backable: {
            type: Boolean,
            default: false,
        },
        menu: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        back() {
            window.history.back();
        },
    },
};
</script>
<style scoped>
.actions,
.meta {
    display: flex;
    align-items: center;
    color: white;
}

.actions {
    gap: 4px;
    justify-content: flex-end;
}

.meta {
    gap: 16px;
    width: 320px;
}

.title {
    font-size: 16px;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}
.title:empty {
    display: none;
}

.vl {
    width: 2px;
    height: calc(100% - 4px);
    align-self: center;
    margin: 0 16px;
    border-radius: 2px;
    background: linear-gradient(0, var(--bs-primary), rgba(255, 255, 255, 0.5) 45%, var(--bs-primary));
}

.base-layout {
    display: flex;
    background: var(--bs-primary);
    height: 56px;
    padding: 0 min(4%, 16px);
    margin: 0;
}

@media screen and (max-width: 575px) {
    .base-layout {
        display: flex;
        justify-content: space-between;
    }
    .only-desktop,
    .vl {
        display: none;
    }
}
</style>
