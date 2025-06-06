import { createRouter, createWebHistory } from 'vue-router'
import Names from './views/Names.vue'
import Groups from './views/Groups.vue'
import Game from './views/Game.vue'
import Login from './views/Login.vue'
import Signin from './views/Signin.vue'
import CreateGroup from './views/CreateGroup.vue'

export default createRouter({
    routes: [
        {path: '/names/:groupName', component: Names, props: true},
        {path: '/groups', component: Groups},
        {path: '/game/:groupName', component: Game, props: true},
        {path: '/login', component: Login, alias: '/'},
        {path: '/signin', component: Signin},
        {path: '/create', component: CreateGroup},
    ],

    history: createWebHistory(),
})