<template>
    <div
        v-click-outside="closeAll"
        class="date"
    >
        <button
            v-if="!options.disabled"
            class="date options"
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
            <span class="material-symbols-sharp expander"> expand_more </span>
        </button>
        <div
            v-if="options.disabled"
            class="date"
        >
            {{ options.text }}
        </div>
        <DesktopNav v-if="windowWidth >= 576" />
        <div
            v-if="showCalendar"
            class="date-nav"
        >
            <KeepAlive>
                <DatePicker
                    v-model="date"
                    class="calendar"
                    is-required
                />
            </KeepAlive>
        </div>
    </div>
    <ButtonIcon
        icon="today"
        :disabled="options.disabled"
        @click="date = new Date()"
    />
    <DropdownMenu
        :menu="options.menu"
        :disabled="options.disabled"
    />
</template>

<script>
import 'v-calendar/dist/style.css';
import vClickOutside from 'click-outside-vue3';
import { DatePicker } from 'v-calendar';
import DropdownMenu from './DropdownMenu';
import ButtonIcon from './ButtonIcon';
import { windowWidthMixin } from '../mixins';
import DesktopNav from './DesktopNav.vue';

export default {
    name: 'NavbarTop',
    components: {
        DatePicker,
        DropdownMenu,
        ButtonIcon,
        DesktopNav,
    },
    mixins: [windowWidthMixin],
    directives: {
        clickOutside: vClickOutside.directive,
    },
    props: {
        options: {
            type: Object,
            default: () => ({
                text: 'Твой физфак!',
                menu: [],
                disabled: true,
            }),
        },
    },
    data: () => ({
        date: new Date(),
        showCalendar: false,
        showOptions: false,
        dateWatcher: null,
    }),

    watch: {
        date(newDate, oldDate) {
            if (!newDate) this.date = oldDate;
            this.syncDate();
        },
    },
    beforeMount() {
        document.addEventListener('sync-date', this.syncDate);
        document.addEventListener('change-main-date', e => {
            this.date = e.detail.date;
        });
        this.syncDate();
    },
    methods: {
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
        syncDate() {
            document.dispatchEvent(
                new CustomEvent('change-date', { detail: { date: this.date } }),
            );
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

.date {
    color: var(--bs-on-primary);
    background: none;
    border: none;
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.toggler-text {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
}

.material-symbols-sharp {
    font-size: 24px;
}

.expander {
    margin-left: 8px;
    transition: all 0.2s ease-in;
}
.opened .expander {
    transform: rotate(180deg);
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
