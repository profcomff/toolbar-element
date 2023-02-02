import singleSpaVue from 'single-spa-vue';
import { SetupCalendar } from 'v-calendar';
import { createApp, h } from 'vue';

import App from './App.vue';

import './variables.css';
import './style.css';

const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            return h(App, {});
        },
    },
    handleInstance(app) {
        app.use(SetupCalendar);
    },
});

export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
