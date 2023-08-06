import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: () => import('pages/IndexPage.vue')}],
  },
  {
    path: '/map',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: () => import('pages/MapPage.vue')}],
  },
  {
    path: '/timeline',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: () => import('pages/TimelinePage.vue')}],
  },
  {
    path: '/graph',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: () => import('pages/GraphPage.vue')}],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
