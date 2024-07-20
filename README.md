# 问题描述

webpack 多个页面引用同一个组件并修改组件样式时可能会出现样式冲突

操作步骤：build 打包之后，启动一个静态资源服务，切换页面 A、切换页面 B，再切换到页面 A

> serve 开发模式下该问题体现不出来

# vue-style-scoped

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
