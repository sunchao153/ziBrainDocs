module.exports = {
  title: 'ziBrain文档',
  description: '',
  themeConfig: {
    logo: '/assets/img/zb-logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '更多', items: [
        { text: 'Chinese', link: '/language/chinese/' },
        { text: 'Japanese', link: '/language/japanese/' }
      ]},
      { text: 'ziBrian工业互联网', link: 'http://10.251.181.50/html/zibrain/preview?code=1612dd&companyId=1509001722029281280#/login' },
    ],
    sidebar: [
      {
        title: '关于ziBrain',   // 必要的
        path: '/about',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {title: '子页面1', path: '/about'},
          {title: '子页面2', path: '/a'}
        ]
      },
      {
        title: '模型',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {title: '子页面1', path: '/a'},
          {title: '子页面2', path: '/a'}
        ]
      },
      {
        title: '算法',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  },
}