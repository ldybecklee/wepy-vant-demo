# wepy-vant-demo
Vant Weapp 官方小程序案例wepy版

[Vant Weapp](https://youzan.github.io/vant-weapp) 是有赞移动端组件库 Vant 的小程序版本，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用

这里是 Vant Weapp 在 WePY 中的移植。

## 体验步骤

### 1. 安装 wepy
本项目基于wepy开发，[参考这里](https://github.com/wepyjs/wepy)
```bash
npm install -g wepy-cli
```
如果已安装wepy-cli,请忽略这里

### 2. 下载源代码
```bash
git clone https://github.com/ldybecklee/wepy-vant-demo.git
```
### 3. 安装开发依赖
```bash
npm install
```

### 4. 编译源代码
```bash
npm run build
```

### 5.导入至开发者工具

编译完成后会生成`dist`目录，开发者工具本地开发目录指向`dist`目录。

**切记： 取消勾选`项目-->开启ES6转ES5`，否则代码运行报错。**
