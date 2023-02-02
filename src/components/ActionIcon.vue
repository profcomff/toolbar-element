<template>
    <i
        class="material-symbols-sharp tab--icon"
        aria-hidden="true"
    >
        {{ icon }}
    </i>
</template>
<script>
export default {
    emits: ['action'],
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
i {
    padding: 4px;
    transition: all 0.3s ease;
    border-radius: 999px;
}

i:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
}
i:active {
    background-color: rgba(255, 255, 255, 0.3);
}
</style>
