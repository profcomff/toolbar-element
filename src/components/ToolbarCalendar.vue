<template>
    <div v-click-outside="closeAll">
        <div
            v-if="showCalendar"
            class="date-nav"
        >
            <DatePicker
                @dayclick="dayclickHandler"
                v-model="innerDate"
                class="calendar"
                is-required
            />
        </div>
        <BaseLayout :menu="options.menu">
            <template #meta>
                <button
                    class="toggle-button"
                    :class="showCalendar ? 'opened' : ''"
                    @click="showCalendar = !showCalendar"
                >
                    <div class="toggler-text">
                        <span class="dateInfo">{{ formatDate(date) }}</span>
                        <span
                            v-if="options.groupInfo && options.groupInfo.number"
                            class="groupInfo"
                        >
                            {{ options.groupInfo.number }} группа
                        </span>
                    </div>
                    <MaterialIcon
                        icon="expand_more"
                        class="expander"
                        color="var(--bs-on-primary)"
                    />
                </button>
            </template>

            <template #actions>
                <ButtonIcon
                    icon="today"
                    :disabled="options.disabled"
                    @click="updateDate(new Date())"
                />
            </template>
        </BaseLayout>
    </div>
</template>

<script>
import 'v-calendar/dist/style.css';
import vClickOutside from 'click-outside-vue3';
import { DatePicker } from 'v-calendar';
import ButtonIcon from './ButtonIcon';
import { windowWidthMixin } from '../mixins';
import BaseLayout from './BaseLayout.vue';
import { MaterialIcon } from '@profcomff/ui-common/components';

export default {
    name: 'NavbarTop',
    components: {
        DatePicker,
        ButtonIcon,
        BaseLayout,
        MaterialIcon,
    },
    mixins: [windowWidthMixin],
    directives: {
        clickOutside: vClickOutside.directive,
    },
    props: {
        options: {
            type: Object,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    data: () => ({
        showCalendar: false,
        showOptions: false,
        dateWatcher: null,
        innerDate: new Date(),
    }),
    mounted() {
        this.innerDate = this.date;
    },

    methods: {
        dayclickHandler(e) {
            this.updateDate(e.date);
        },
        closeAll() {
            this.showCalendar = false;
        },
        formatDate(date) {
            if (this.date) {
                var options = {
                    month: 'long',
                    day: 'numeric',
                };
                return date.toLocaleString('ru', options);
            }
        },
        updateDate(date) {
            document.dispatchEvent(
                new CustomEvent('change-date', {
                    detail: {
                        date,
                    },
                }),
            );
        },
    },
    watch: {
        date(newVal) {
            this.innerDate = newVal;
        },
    },
};
</script>

<style scoped>
.calendar {
    border: none;
}

.date-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background: #fff;
    left: 0;
    top: 56px;
    right: 0;
    height: min-content;
    z-index: 100;
}

.toggler-text {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
}

.expander {
    margin-left: 8px;
    transition: all 0.2s ease-in;
}
.opened .expander {
    transform: rotate(180deg);
}

.toggle-button {
    display: flex;
    flex-direction: row;
    color: var(--bs-on-primary);
}
.dateInfo {
    font-weight: bold;
    font-size: 18px;
    padding: 0;
    margin: 0;
}
.groupInfo {
    font-size: 12px;
    padding: 0;
    margin: 0;
    margin-top: -5px;
}
</style>
