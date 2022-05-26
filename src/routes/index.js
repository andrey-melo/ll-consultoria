import AppHome from '../pages/AppHome.vue';
import AppConline from '../pages/AppConline.vue';
import AppCpresencial from '../pages/AppCpresencial.vue';



export default [
    { path: "/", component: AppHome, name: "home" },
    { path: "/consultoriapresencial", component: AppCpresencial, name: "consultoriapresencial" },
    { path: "/consultoriaonline", component: AppConline, name: "consultoriaonline" },

]