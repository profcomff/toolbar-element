<template>
    <div style="display: flex; gap: 12px; flex: 1">
        <button
            style="color: white"
            @click="() => navigate('/timetable')"
        >
            Расписание
        </button>
        <button
            style="color: white"
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
