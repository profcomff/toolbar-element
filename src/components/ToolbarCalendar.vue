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
        <BaseLayout>
            <template #meta>
                <button
                    class="options"
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
                    <span class="material-symbols-sharp expander">
                        expand_more
                    </span>
                </button>
            </template>

            <template #menu>
                <DesktopNav v-if="windowWidth >= 576" />
            </template>
            <template #actions>
                <ButtonIcon
                    icon="today"
                    :disabled="options.disabled"
                    @click="updateDate(new Date())"
                />
                <DropdownMenu
                    :menu="options.menu"
                    :disabled="options.disabled"
                />
            </template>
        </BaseLayout>
    </div>
</template>

<script>
import 'v-calendar/dist/style.css';
import vClickOutside from 'click-outside-vue3';
import { DatePicker } from 'v-calendar';
import DropdownMenu from './DropdownMenu';
import ButtonIcon from './ButtonIcon';
import { windowWidthMixin } from '../mixins';
import DesktopNav from './DesktopNav.vue';
import BaseLayout from './BaseLayout.vue';

export default {
    name: 'NavbarTop',
    components: {
        DatePicker,
        DropdownMenu,
        ButtonIcon,
        DesktopNav,
        BaseLayout,
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
            console.log(date.getDay());
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

.options {
    color: white;
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
