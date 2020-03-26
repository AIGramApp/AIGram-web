import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from 'axios';
import { v4 as uuid } from 'uuid'
import Cookies from 'js-cookie'
import moment from 'moment'
import urls, { join, base } from './api/urls';

Vue.config.productionTip = false;

const safeMethods = ["GET", "HEAD", "TRACE", "OPTIONS"];
Axios.interceptors.request.use((config) => {
    config.withCredentials = true;
    if (safeMethods.indexOf(config.method!.toUpperCase()) == -1) {
        config.headers["X-CSRF-TOKEN"] = Cookies.get("CSRF-TOKEN");
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

//Retrieve csrf token
Axios.get(join(base, urls.csrf.base));

Vue.filter('formatDate', (value: string) => {
    return moment(value).format('MMM Do');
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
