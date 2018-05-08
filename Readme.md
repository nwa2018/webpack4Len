## 样式相关
mini-css-extract-plugin  抽离css模块，支持webpack4，正常来说开发环境不要使用这个插件，热重载会失效，生产环境使用  https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production



manifest有啥用
https://webpack.js.org/guides/output-management/  output management章节的后续有提到
https://webpack.js.org/concepts/manifest/  manifest的概念
先要了解manifest是啥，有啥用，再去读下面的文章


sourcemap有什么区别


  var element = document.createElement('div');
摇树sideeffects的配置：

lodash 如何支持tree shaking  https://medium.com/@martin_hotell/tree-shake-lodash-with-webpack-jest-and-typescript-2734fa13b5cd


代码分割：https://webpack.js.org/plugins/split-chunks-plugin/
懒加载记得加promise的垫片哦

官方的代码构建输出分析工具：https://github.com/webpack/analyse



链接预取mdn文档：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Link_prefetching_FAQ
preloaded与prefetch的区别, 按照文档实战prefetch并没有生效，还需继续查


缓存遗留问题，css改动后，会影响引入其的js的hash戳

html模板使用art-template-loader
文档：https://aui.github.io/art-template/docs/


vue css module https://vue-loader.vuejs.org/guide/css-modules.html


差eslint, 种子文件， react支持， 代码目录规划， 脚手架整合  postcss


  "presets": [
    [
      "env",
      {
        modules: false
      }
    ]
  ],
  让babel支持tree shaking
