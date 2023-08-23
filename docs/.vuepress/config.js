import { defineUserConfig } from 'vuepress'
import { defaultTheme } from "vuepress";

export default ({
  lang: 'zh-CN',
  title: '15:15修改了首页',
  description: '这是我的第一个 VuePress 站点',
  base: '/',
  heme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页---------",
        link: "/",
      },
    ],
  }),
}
)
