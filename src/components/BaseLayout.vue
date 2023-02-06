<template>
    <div class="base-layout">
        <div class="meta">
            <ButtonIcon
                v-if="backable"
                icon="arrow_back"
                @click="back"
            />
            <span class="title">{{ title }}</span>
            <slot name="meta" />
        </div>
        <div class="vl" />
        <DesktopMenu class="only-desktop" />
        <div class="actions">
            <slot name="actions" />
        </div>
    </div>
</template>

<script>
import ButtonIcon from './ButtonIcon.vue';
import DesktopMenu from './DesktopMenu.vue';

export default {
    components: { ButtonIcon, DesktopMenu },
    props: {
        title: {
            type: String,
            default: '',
        },
        backable: {
            type: Boolean,
            default: false,
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
    max-width: 200px;
}

.actions {
    gap: 4px;
    justify-content: flex-end;
}

.meta {
    gap: 16px;
}

.title {
    font-size: 16px;
}

.vl {
    border: 1px solid rgba(255, 255, 255, 0.5);
    height: calc(100% - 20px);
    align-self: center;
    margin: 0 12px;
}

.base-layout {
    display: flex;
    background: var(--bs-primary);
    height: 56px;
    padding: 0 4%;
    margin: 0;
}

@media screen and (max-width: 575px) {
    .base-layout {
        display: flex;
        justify-content: space-between;
    }
    .only-desktop {
        display: none;
    }
}

@media screen {
}
</style>
