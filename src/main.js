import './assets/style.sass';
import Vue from 'vue';
import App from './App.vue';
import router from './router'

new Vue({
    router,
    render:(h) => h(App)
}).$mount('#app')



console.log("hello,webpack");