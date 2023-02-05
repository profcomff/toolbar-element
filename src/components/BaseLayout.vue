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
        <menu>
            <slot name="menu" />
        </menu>
        <div class="actions">
            <slot name="actions" />
        </div>
    </div>
</template>

<script>
import ButtonIcon from './ButtonIcon.vue';

export default {
    components: { ButtonIcon },
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
}

.actions {
    gap: 4px;
    justify-content: flex-end;
}

.meta {
    gap: 16px;
}

.title {
    font-size: 24px;
}

.base-layout {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    background: var(--bs-primary);
    height: 56px;
    padding: 0 4%;
    margin: 0;
}
@media screen and (max-width: 575px) {
    menu {
        display: none;
    }
    .base-layout {
        display: flex;
        justify-content: space-between;
    }
}
</style>
