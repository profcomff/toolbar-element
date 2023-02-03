<template>
    <button class="material-symbols-sharp">
        {{ icon }}
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
button {
    color: var(--bs-on-primary);
    border-radius: 999px;
    padding: 8px;
}

button:disabled {
    opacity: 0.6;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
button:focus {
    background-color: rgba(255, 255, 255, 0.2);
}
button:active {
    background-color: rgba(255, 255, 255, 0.3);
}
</style>
