<template>
    <AppHeader />
</template>

<script>
import { AppHeader } from './components';
import { Breakpoints, navbarItems } from './constants';
import { windowWidthMixin } from './mixins';

//import swipe from "@/events/swipe";

export default {
    components: { AppHeader },
    mixins: [windowWidthMixin],

    data() {
        return { show_appbar: false, navbarItems };
    },

    beforeMount() {
        // вызов функции swipe с предварительными настройками
        //swipe(document, { maxTime: 800, minTime: 200, maxDist: 150, minDist: 50 });
    },

    methods: {
        isMobile() {
            return this.windowWidth < Breakpoints.SM;
        },

        resizeHandler(event) {
            console.log(event.target);
            this.windowWidth = event.target.innerWidth;
        },

        async captureNavigation(from, to) {
            if (from === to) return;
            try {
                fetch(`${process.env.VUE_APP_API_MARKETING}/action`, {
                    method: 'POST',
                    cache: 'no-cache',
                    redirect: 'follow',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        user_id: localStorage.getItem('marketing-id'),
                        action: 'route to',
                        path_from: from,
                        path_to: to,
                    }),
                });
            } catch {
                //Failed, skips
            }
        },
    },
};
</script>

<style></style>
