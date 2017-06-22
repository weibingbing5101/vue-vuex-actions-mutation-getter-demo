import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from "../containers/Home";
import Collect from "../containers/Collect.vue";
import List from "../containers/List.vue";
import Add from "../containers/Add.vue";

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
            // component: Home
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/add',
        component: Add
    }, {
        path: '/collect',
        component: Collect
    }, {
        path: '/list',
        component: List
    }],
    linkActiveClass: 'active'
})
