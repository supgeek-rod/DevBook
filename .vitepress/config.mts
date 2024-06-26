import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rod's DevBook",
  description: "Rod's experience and insights in software development.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '速查手册', link: '/handbooks/laravel-manual' },
      { text: '全栈图谱', link: '/fullstack/laravel/laravel-db-locking' },
      { text: '编程思想', link: '/prothinkings/programming-pop-oop-aop' },
      { text: '最佳实践', link: '/practices/linux-new-starter' },
      { text: '关于我', link: '/about' },
    ],

    sidebar: [
      { text: 'README', link: '/README' },
      {
        text: '速查手册',
        items: [
          { text: 'Laravel 手册', link: '/handbooks/laravel-manual' },
          { text: 'Linux 常用命令', link: '/handbooks/linux-common-commands' },
          { text: 'VIM 速查手册', link: '/handbooks/vim-quick-reference-manual' },
        ],
      },
      {
        text: '全栈图谱',
        items: [
          {
            text: 'Laravel',
            items: [
              { text: 'Laravel 数据库锁', link: '/fullstack/laravel/laravel-db-locking' },
            ]
          },
          {
            text: 'MySQL',
            items: [
              { text: '事务', link: '/fullstack/mysql/mysql-transaction' },
              { text: 'Innodb 锁', link: '/fullstack/mysql/mysql-innodb-locking' },
              { text: 'Empty String 和 NULL', link: '/fullstack/mysql/mysql-empty-string-and-null' },
              { text: '读写分离', link: '/fullstack/mysql/mysql-read-and-write-connections' },
            ]
          }
        ],
      },
      {
        text: '编程思想',
        items: [
          { text: 'POP / OOP / AOP', link: '/prothinkings/programming-pop-oop-aop' },
          { text: '设计模式之 7 大原则', link: '/prothinkings/the-7-principles-of-design-patterns' },
          { text: 'MySQL 范式', link: '/prothinkings/mysql-normal-forms' },
        ],
      },
      {
        text: '最佳实践',
        items: [
          { text: 'Linux 新系统与新用户', link: '/practices/linux-new-starter' },
          { text: 'MySQL 用户与授权', link: '/practices/mysql-new-starter' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/supgeek-rod' }
    ]
  },
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-K4F236Y3V1'}
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-K4F236Y3V1');
      `
    ],
  ],
})
