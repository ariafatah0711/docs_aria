import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/linux_docs/blog',
    component: ComponentCreator('/linux_docs/blog', '0d7'),
    exact: true
  },
  {
    path: '/linux_docs/blog/archive',
    component: ComponentCreator('/linux_docs/blog/archive', 'a3c'),
    exact: true
  },
  {
    path: '/linux_docs/blog/authors',
    component: ComponentCreator('/linux_docs/blog/authors', '753'),
    exact: true
  },
  {
    path: '/linux_docs/blog/authors/ariafatah-0711',
    component: ComponentCreator('/linux_docs/blog/authors/ariafatah-0711', 'c16'),
    exact: true
  },
  {
    path: '/linux_docs/blog/tags',
    component: ComponentCreator('/linux_docs/blog/tags', 'f62'),
    exact: true
  },
  {
    path: '/linux_docs/blog/tags/smk_harbas',
    component: ComponentCreator('/linux_docs/blog/tags/smk_harbas', 'b59'),
    exact: true
  },
  {
    path: '/linux_docs/blog/USK PAKET 1',
    component: ComponentCreator('/linux_docs/blog/USK PAKET 1', '52f'),
    exact: true
  },
  {
    path: '/linux_docs/markdown-page',
    component: ComponentCreator('/linux_docs/markdown-page', '4b7'),
    exact: true
  },
  {
    path: '/linux_docs/android_debug',
    component: ComponentCreator('/linux_docs/android_debug', '8f0'),
    routes: [
      {
        path: '/linux_docs/android_debug',
        component: ComponentCreator('/linux_docs/android_debug', '3bc'),
        routes: [
          {
            path: '/linux_docs/android_debug',
            component: ComponentCreator('/linux_docs/android_debug', '0bc'),
            routes: [
              {
                path: '/linux_docs/android_debug/intro',
                component: ComponentCreator('/linux_docs/android_debug/intro', 'e4d'),
                exact: true,
                sidebar: "default"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/linux_docs/cybersec',
    component: ComponentCreator('/linux_docs/cybersec', '0b9'),
    routes: [
      {
        path: '/linux_docs/cybersec',
        component: ComponentCreator('/linux_docs/cybersec', '5a9'),
        routes: [
          {
            path: '/linux_docs/cybersec',
            component: ComponentCreator('/linux_docs/cybersec', '1b1'),
            routes: [
              {
                path: '/linux_docs/cybersec/intro',
                component: ComponentCreator('/linux_docs/cybersec/intro', 'da4'),
                exact: true,
                sidebar: "default"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/linux_docs/docs',
    component: ComponentCreator('/linux_docs/docs', 'fbd'),
    routes: [
      {
        path: '/linux_docs/docs',
        component: ComponentCreator('/linux_docs/docs', '09c'),
        routes: [
          {
            path: '/linux_docs/docs',
            component: ComponentCreator('/linux_docs/docs', 'f40'),
            routes: [
              {
                path: '/linux_docs/docs/basics/command-list',
                component: ComponentCreator('/linux_docs/docs/basics/command-list', '285'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/basics/environment-variables',
                component: ComponentCreator('/linux_docs/docs/basics/environment-variables', 'c56'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/basics/file-management',
                component: ComponentCreator('/linux_docs/docs/basics/file-management', '609'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/basics/job-control',
                component: ComponentCreator('/linux_docs/docs/basics/job-control', 'a80'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/basics/package-management',
                component: ComponentCreator('/linux_docs/docs/basics/package-management', 'eb5'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/basics/permissions',
                component: ComponentCreator('/linux_docs/docs/basics/permissions', '752'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/basics/services',
                component: ComponentCreator('/linux_docs/docs/basics/services', '043'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/basics/user-management',
                component: ComponentCreator('/linux_docs/docs/basics/user-management', 'b9b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/category/01-introduction',
                component: ComponentCreator('/linux_docs/docs/category/01-introduction', '48a'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/category/02-basics',
                component: ComponentCreator('/linux_docs/docs/category/02-basics', '0f7'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/introduction/distribusi-linux',
                component: ComponentCreator('/linux_docs/docs/introduction/distribusi-linux', 'a8d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/introduction/instalasi-linux',
                component: ComponentCreator('/linux_docs/docs/introduction/instalasi-linux', '65b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/introduction/pengenalan-linux',
                component: ComponentCreator('/linux_docs/docs/introduction/pengenalan-linux', 'b6d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/introduction/shorcut',
                component: ComponentCreator('/linux_docs/docs/introduction/shorcut', '184'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/linux_docs/docs/introduction/terminal-basics',
                component: ComponentCreator('/linux_docs/docs/introduction/terminal-basics', '3c4'),
                exact: true,
                sidebar: "default"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/linux_docs/scripting',
    component: ComponentCreator('/linux_docs/scripting', '524'),
    routes: [
      {
        path: '/linux_docs/scripting',
        component: ComponentCreator('/linux_docs/scripting', 'c88'),
        routes: [
          {
            path: '/linux_docs/scripting',
            component: ComponentCreator('/linux_docs/scripting', '33f'),
            routes: [
              {
                path: '/linux_docs/scripting/intro',
                component: ComponentCreator('/linux_docs/scripting/intro', '58a'),
                exact: true,
                sidebar: "default"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/linux_docs/storage',
    component: ComponentCreator('/linux_docs/storage', 'a92'),
    routes: [
      {
        path: '/linux_docs/storage',
        component: ComponentCreator('/linux_docs/storage', 'ca4'),
        routes: [
          {
            path: '/linux_docs/storage',
            component: ComponentCreator('/linux_docs/storage', '786'),
            routes: [
              {
                path: '/linux_docs/storage/intro',
                component: ComponentCreator('/linux_docs/storage/intro', '3af'),
                exact: true,
                sidebar: "default"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/linux_docs/',
    component: ComponentCreator('/linux_docs/', 'e28'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
