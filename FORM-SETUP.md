# 调查结果收集：FormSubmit → Gmail

收件邮箱：19707088279jia@gmail.com。无需注册 Formspree。

## 必须由邮箱持有人完成的一次性激活
1. 在项目文件夹打开终端，运行 `python -m http.server 8000`。
2. 打开 http://localhost:8000/index-en.html （不要用 file:// 提交）。
3. 填写一份测试问卷，在建议中注明 TEST，提交并完成 FormSubmit 验证。
4. 在上述 Gmail（包括垃圾邮件）中找到 FormSubmit 确认邮件，点击激活链接。
5. 再提交一次 TEST，确认 Gmail 收到包含三个答案、建议、时间、广告来源、订阅同意状态的邮件，再对外分享网站。

开发检查没有向真实收件箱发送测试邮件，也未验证邮箱激活或投递成功。代码已配置真实服务地址，但激活之前不能保证收件。

## 结果与隐私
- 每份结果通过 FormSubmit 发送到 Gmail，可按邮件主题 Eastern Bowl — Market Research Feedback 搜索和归档。这不是已配置的统计仪表盘。
- 记录提交 ID、客户端 UTC 时间、三道选择题、可选建议、白名单内 UTM/广告点击来源参数。
- 邮箱同意默认关闭；不勾选时不发送填写的邮箱。单独保存 email_consent 和同意文案版本，勾选后记录同意时间。
- 该同意只登记意愿，不自动发送营销邮件。
- 页面内 AJAX 提交，15 秒超时后保留答案并提示错误。仅在服务返回 success 时确认服务接受；不承诺邮箱投递。备用复制/邮件按钮需用户自行发送。
- 公开收集需要把此现有静态项目部署到公开 HTTPS 地址，本机 localhost 不能供其他人访问。
- 更改收件地址：feedback-config.js。若更换域名/地址，重新测试服务激活和收件。
- 来源参数和建议会由第三方处理，请勿填写敏感健康信息。FormSubmit 留存政策见官方说明，不把服务档案当作永久备份；保留 Gmail 中的邮件。

官方说明：https://formsubmit.co/ 与 https://formsubmit.co/documentation
