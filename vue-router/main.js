const Home = { template: "./home.html" };
const About = { template: "./about.html" };

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  hashbang: false,
  routes,
});

const app = Vue.createApp({});
app.use(router);
app.mount("#app");
