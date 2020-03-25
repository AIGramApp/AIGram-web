import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Auth from '@/views/Auth.vue';
import Add from '@/views/Add.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth
    },
    {
        path: '/add',
        name: 'add',
        component: Add,
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        try {
            await store.dispatch('loadUser');
            if (store.state.user) {
                next();
                return;
            }
        }
        catch{
            next({ name: 'home' });
        }
    }
    else {
        next();
    }
});

export default router;
