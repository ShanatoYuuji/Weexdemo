import Router from 'vue-router';
import Login from '../pages/login/login.vue';
import img1 from '../pages/content/img1.vue';

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/img1',
            name:'img1',
            component:img1
        }
    ]
})