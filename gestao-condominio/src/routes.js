import Login from './components/login/Login.vue';
import Home from './components/home/Home.vue';
import Register from "./components/register/Register.vue";
import Reader from "./components/reader/Reader.vue";

export const routes = [
    { path: '/login', component: Login},
    { path: '/home', component: Home},
    { path: '/register', component: Register},
    { path: '/reader', component: Reader}
];