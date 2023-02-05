<template>
    <div class="desktop-nav">
        <button
            class="desktop-nav-item"
            @click="() => navigate('/timetable')"
        >
            Расписание
        </button>
        <button
            class="desktop-nav-item"
            @click="() => navigate('/apps')"
        >
            Сервисы
        </button>
    </div>
</template>
<script>
import * as singleSpa from 'single-spa';

export default {
    methods: {
        navigate(path) {
            singleSpa.navigateToUrl(path);
        },
    },
};
</script>
<style scoped>
.desktop-nav-item {
    color: white;
}

.desktop-nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
}
.desktop-nav {
    display: flex;
    gap: 12px;
    flex: 1;
}
</style>
