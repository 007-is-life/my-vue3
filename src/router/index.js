import Vue from 'vue'
import VueRouter from 'vue-router'
import QueryBook from "@/views/QueryBook";
import AddBook from "@/views/AddBook";
import BookManage from "@/views/BookManage";
import UpdateBook from "@/views/UpdateBook";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '图书管理',
        component: BookManage,
        redirect: '/queryBook',
        children: [
            {
                path: '/queryBook',
                name: '查询图书',
                component: QueryBook,
                show: true
            },
            {
                path: '/addBook',
                name: '添加图书',
                component: AddBook,
                show: true
            },
            {
                path: '/updateBook',
                name: '修改图书',
                component: UpdateBook,
                show: false
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
