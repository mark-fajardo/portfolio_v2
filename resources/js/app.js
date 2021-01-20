require('./bootstrap');

const router = require('./router').default;
const store = require('./store').default;

Vue.component('v-nav', require('./components/nav.vue').default);

const app = new Vue({
    el: '#app',
    store,
    // router
});
