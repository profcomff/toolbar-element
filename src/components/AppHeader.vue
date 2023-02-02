<template>
    <header>
        <slot>
            <h1>Твой Физфак!</h1>
        </slot>
    </header>
</template>
<script>
export default {
    name: 'AppHeader',
};
</script>
<style scoped>
header {
    height: 56px;
    width: 100%;
    background: var(--bs-primary);
    color: var(--bs-on-primary);
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 12px;
}

h1 {
    font-size: 24px;
    margin-bottom: 0;
}
</style>
