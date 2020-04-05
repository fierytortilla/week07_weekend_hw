import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import router from './router'

Vue.config.productionTip = false

export const eventBus = new Vue();
Vue.use(VueRouter);

// const AboutUs = {template: '<div>about_us</div>'};
//import AboutUs from './components/AboutUs.vue'
const route = [{path:'/about_us',name:'about_us', component: () => import("./components/AboutUs.vue")}]

// const route = [{path:'/about_us', component: AboutUs}];
const router= new VueRouter({route});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
