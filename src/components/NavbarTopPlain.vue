<template>
    <header>
        <div>{{ options.text }}</div>
        <DropdownMenu
            v-if="options.menu && options.menu.length > 0"
            :menu="options.menu"
        />
    </header>
</template>

<script>
import DropdownMenu from './DropdownMenu';
export default {
    components: { DropdownMenu },
    props: {
        options: { type: Object, default: () => ({ text: 'Твой физфак!' }) },
    },
    data: () => ({}),
};
</script>

<style scoped>
header {
    height: 56px;
    background-color: var(--bs-primary);
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding: 10px 4%;
    box-shadow: 0px 2px 2px lightgray;
}

div {
    color: #ffffff;
}
</style>
