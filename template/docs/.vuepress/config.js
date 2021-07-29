module.exports = {
  lang: 'zh-CN',
  title: '个人主页', 
  description: '{{name}}博客',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  theme: '{{theme}}',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'android', link: '/android/笔记' },
      { text: 'javascript', link: '/javascript/JavaScript笔记' },
      { text: 'Github', link: 'https://github.com/zhao1207' },
    ],
    sidebar: {
      '/android/': [
        '笔记'
      ],
      '/javascript/':[
        'JavaScript笔记',
        'JavaScript简单了解-WebSocket',
      ],
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', 
  },
  // serviceWorker: true,
}
