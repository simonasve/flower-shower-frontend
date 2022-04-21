
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') }
    ]
  },
  {
    path: '/bouquets',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Bouquets.vue') }
    ]
  },
  {
    path: '/roses',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Roses.vue') }
    ]
  },
  {
    path: '/tulips',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Tulips.vue') }
    ]
  },
  {
    path: '/aboutUs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AboutUs.vue') }
    ]
  },
  {
    path: '/cart',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cart.vue') }
    ]
  }
]

export default routes
