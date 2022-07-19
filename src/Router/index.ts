import { createRouter, createWebHistory, RouteLocation } from 'vue-router'
const authGuard = () => (to: RouteLocation, from: RouteLocation, next:any) => {
  if (localStorage.getItem("token") || "") {
    next();
  } else {
    next("/");
  }
};
const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'user-redirect',
    component: () => import('../Views/User-Login.vue')
  },
  {
    path: '/',
    name: 'user-Login',
    component: () => import('../Views/User-Login.vue')
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    beforeEnter: authGuard(),
    component: () => import('../Views/User-DashBoard.vue'),
    children: [
      {
        path: '/dashboard/',
        name: 'BoasVindas',
        beforeEnter: authGuard(),
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
        beforeEnter: authGuard(),
        component: () => import('../components/user-methods/ListarTodos.vue'),
      },
      {
        path: '/dashboard/ListarUm',
        name: 'ListarUm',
        beforeEnter: authGuard(),
        component: () => import('../components/user-methods/ListarUm.vue'),
      },
      {
        path: '/dashboard/DeletarUm',
        name: 'DeletarUm',
        beforeEnter: authGuard(),
        component: () => import('../components/user-methods/DeletarUm.vue'),
      },
      {
        path: '/dashboard/AtualizarUsuario',
        name: 'AtualizarUsuario',
        beforeEnter: authGuard(),
        component: () => import('../components/user-methods/AtualizarUsuario.vue'),
      }
    ]
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router