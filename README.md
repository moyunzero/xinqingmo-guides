# 心晴MO 指南站

免费静态站。第 1 周两篇中文指南。指标只看展示、点击、进商店。

不使用 Cloudflare。托管和统计都不需要国际信用卡。

## 本地看

```bash
python3 -m http.server 4321
```

打开 http://127.0.0.1:4321/

## 线上地址

https://moyunzero.github.io/xinqingmo-guides/

公开仓库 [xinqingmo-guides](https://github.com/moyunzero/xinqingmo-guides)。`moyunzero.github.io` 已是私有仓库，所以指南放在项目 Pages，链接使用相对路径。

国内若打开 `github.io` 不稳定，改用 [Gitee Pages](https://gitee.com/)：同样免费，用手机号实名，不要信用卡。导入同一批文件，在仓库里开启 Gitee Pages。

## 展示和点击

国内搜索看 [百度搜索资源平台](https://ziyuan.baidu.com/)（百度账号）。验证站点后提交 sitemap。每周看索引量、展现、点击。

Google 的 [Search Console](https://search.google.com/search-console) 也免费，只反映 Google 上的展示和点击。

## 进商店

1. 打开 [百度统计](https://tongji.baidu.com/)（百度账号，不绑卡）。
2. 添加站点，复制 `hm.js?` 后面的那一串，填进 `site.config.js` 的 `hm`，再推一次。
3. 每周看「受访页面」里以 `/go/` 开头的次数：`/go/ren-de-qingxu/` 和 `/go/qihua/` 分开计，不要合成一个链接。

这两页会先停留约 0.7 秒再跳到中国区 App Store，方便统计脚本发出去。

## 下一篇

复制 `guides/ren-de-qingxu/`，改文案。再复制一份 `go/某代号/index.html`。首页和 `guides/index.html` 的目录各加一行。两篇之间加一个内链。sitemap 补上新地址。
