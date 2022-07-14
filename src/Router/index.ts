import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'user-Login',
    component: () => import('../Views/User-Login.vue')
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import('../Views/User-DashBoard.vue'),
    children: [
      {
        path: '/dashboard/',
        name: 'BoasVindas',
        component: () => import('../components/user-methods/BoasVindas.vue'),
      },
      {
        path: '/dashboard/CriarUsuario',
        name: 'CriarUsuario',
        component: () => import('../components/user-methods/CriarUsuario.vue'),
      },
      {
        path: '/dashboard/ListarTodos',
        name: 'ListarTodos',
        component: () => import('../components/user-methods/ListarTodos.vue'),
      }
    ]
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router