"use strict";
(() => {
 const config=window.SITE_CONFIG;
 const lang=document.documentElement.lang.startsWith('zh')?'zh':'en';
 document.querySelectorAll('[data-hero-copy]').forEach(el=>{const value=config.heroCopy?.[lang]?.[el.dataset.heroCopy];if(value)el.textContent=value;});
 document.querySelector('#hero-photo').src=config.hero;
 document.querySelectorAll('[data-logo]').forEach(el=>{el.src=config.logo;el.alt=config.brand;});
})();
