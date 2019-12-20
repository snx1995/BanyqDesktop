import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '../components/MainPage';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: MainPage
        },
        {
            path: '/player',
            name: 'player',
            component: () => import('../components/Player')
        }
    ]
})
