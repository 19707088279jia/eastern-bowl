# Google Forms 调查

网站首页和 #feedback 区域已直接链接到：
https://docs.google.com/forms/d/e/1FAIpQLSf-hZORTwn1zD93jgFlsPuL0SmMyKl4eqZXEYbh0mqdc_8-6g/viewform

## 如何查看结果
在创建表单的 Google 账号中打开表单编辑页，点击“回复”。点击绿色电子表格图标可创建或关联 Google Sheets。
如果需要邮件提醒，在“回复”的更多菜单中启用新回复邮件通知；这与营销订阅无关。

## 正式推广前
1. 用无痕窗口打开填写链接，提交一份在建议中标注 TEST 的回答。
2. 在表单编辑页“回复”中确认看到它，再开始分享。
3. 建议补充 Waterloo Region 地区筛选题，便于识别本地回答；套餐题目前缺少 Either plan。
4. 当前公开表单未包含邮箱与订阅同意字段。不要把提交调查视为订阅邮件。

## 实际状态与限制
已匿名读取并检查题目和提交入口，未自动向真实表单写入测试答案，也未验证账号内回复保存。
旧 FormSubmit JavaScript 文件已不再被任何入口页加载；不再需要激活 FormSubmit。
新入口不自动记录 UTM 或广告来源参数。若要比较渠道，可在 Google 表单添加可选来源问题；不要假定普通链接参数会自动保存。
更改链接时同时更新 index.html、index-en.html、index-zh.html。页面样式仍为现有网站设计。
