# Eastern Bowl / 东方碗

Static market-research website for proposed Chinese meal delivery in Waterloo Region.

No orders or payments are accepted. Prices and plans are proposals.

## Preview and edit
Open index.html to preview. For survey testing, serve via HTTP or HTTPS.
Main page: index.html (keep index-en.html and index-zh.html synchronized; all currently use English copy).
Hero copy: site-config.js. Menu layout: menu-page.css. Plans and survey: launch-survey.css and launch-survey.js.

## Feedback
FormSubmit sends responses to the configured recipient. The owner must activate the recipient and verify delivery before collecting public feedback. See FORM-SETUP.md.
No survey responses are stored in this repository.

## Deployment
GitHub Pages serves the main branch root. All required images and fonts are local; no build step is needed.
