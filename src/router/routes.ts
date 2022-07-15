const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('/@/components/pages/index.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('/@/components/pages/home/index.vue'),
        meta: {
          title: '',
          keepAlive: true,
        },
      },
    ],
  },
];

export default routes;
