import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/index.less'

import VueLazyLoad from 'vue-lazyload';
import VueScroller  from 'vue-scroller';
import store from './store/index';

Vue.use(VueLazyLoad);
Vue.use(VueScroller);//引用这个组件后 也面会多一个全局组件 scroller

new Vue({
  el: '#app',
  router,
  ...App,
  store
})
