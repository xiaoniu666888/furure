import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: '首页'
        },
        redirect: '/home',
        component: () => import('../views/Home.vue'),
        children: [

            {
                path: 'home',
                name: 'home',
                meta: {
                    title: '首页',
                    index: 0
                },
                component: () => import('../views/Home.vue')
            }
        ],
    },
    {
        path: '/test',
        name: 'test',
        meta: {
            index: 1
        },
        component: () => import('../views/Test.vue'),
    },
    {
        path: '/test2',
        name: 'test2',
        meta: {
            index: 2
        },
        component: () => import('../views/Test2.vue'),
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
