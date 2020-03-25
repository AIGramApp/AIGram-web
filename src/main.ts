import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from 'axios';
import { v4 as uuid } from 'uuid'
import Cookies from 'js-cookie'
import moment from 'moment'

Vue.config.productionTip = false;

const safeMethods = ["GET", "HEAD", "TRACE", "OPTIONS"];
let uid = uuid();
Axios.interceptors.request.use((config) => {
    config.withCredentials = true;
    if (safeMethods.indexOf(config.method!.toUpperCase()) == -1) {
        config.headers["X-CSRF-TOKEN"] = uid;
        Cookies.set("CSRF-TOKEN", uid, {
            domain: process.env.VUE_APP_DOMAIN,
            path: "/"
        });
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

Vue.filter('formatDate', (value: string) => {
    return moment(value).format('MMM Do');
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
