<template>
    <ButtonIcon
        icon="more_vert"
        :disabled="disabled"
        @click="showOptions = !showOptions"
    />
    <div
        v-show="showOptions"
        v-click-outside="closeMenu"
        class="dropdown-menu"
    >
        <button
            v-for="(menuItem, index) in menu"
            :key="index"
            class="dropdown-item"
            @click="emitMenuAction(index)"
        >
            {{ menuItem.name }}
        </button>
    </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3';
import ButtonIcon from './ButtonIcon';

export default {
    directives: {
        clickOutside: vClickOutside.directive,
    },
    components: { ButtonIcon },
    props: {
        menu: { type: Array, default: () => [] },
        disabled: Boolean,
    },
    data: () => ({
        showOptions: false,
    }),
    methods: {
        openMenu() {
            this.showOptions = !this.showOptions;
        },
        closeMenu() {
            this.showOptions = false;
        },
        emitMenuAction(i) {
            this.closeMenu();
            this.menu[i].action();
        },
    },
};
</script>

<style scoped>
.dropdown-menu {
    display: block;
    position: absolute;
    max-width: 300px;
    top: 50px;
    right: 10px;
    z-index: 1;
}
</style>
