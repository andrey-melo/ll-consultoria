import AppHome from '../pages/AppHome.vue';
import AppConline from '../pages/AppConline.vue';
import AppCpresencial from '../pages/AppCpresencial.vue';



export default [
    { path: "/", component: AppHome },
    { path: "/consultoriapresencial", component: AppCpresencial },
    { path: "/consultoriaonline", component: AppConline },

]