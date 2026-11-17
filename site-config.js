/* Edit branding, prices and menu here. Local demo; no restaurant connection. */
window.SITE_CONFIG = {
 // Editable bilingual hero copy. Images remain unchanged.
 heroCopy: {
  "en": {
    "title": "Help Shape Eastern Bowl.",
    "subtitle": "Fresh Chinese meals for Waterloo Region — we're listening.",
    "description": "We're researching local demand before we launch. Tell us which meals, prices and delivery options work for you. Take our short survey and share your suggestions.",
    "price": "Proposed plans from C$25 / Day",
    "delivery": "2 meals per day · Not taking orders or payments yet",
    "cta": "Take the Short Survey"
},
  "zh": {
    "title": "每餐精心计算，每周营养均衡。",
    "subtitle": "当天现做，当天送达。",
    "description": "新鲜中餐，精心计算每餐的热量、蛋白质、碳水化合物与脂肪，并统筹规划一周的餐食搭配。",
    "price": "每天 2 餐 · C$25 / 天",
    "delivery": "拟议价格已含配送费",
    "cta": "加入候补名单"
  }
},
 brand:'Eastern Bowl · 东方碗', logo:'assets/reference/eastern-bowl-logo-original.png', hero:'assets/reference/eastern-bowl-hero.png',
 location:'Coquitlam', pickupLocation:'Coquitlam Westwood Plateau', timeZone:'America/Vancouver', orderCutoffHour:14,
 blockedDates:['2026-11-03'],
 // Historical reference copy from the video; replace/remove for your own business.
 bookingNotice:{en:'⚠️ Tuesday, November 3rd is fully booked.',zh:'⚠️ 11 月 3 日（星期二）已订满。'},
 plans:[{meals:10,price:140},{meals:8,price:115},{meals:6,price:90}], trial:{meals:4,price:55},
 deliveryFees:{pickup:0,local:5,extended:10},
 menu:[
 {en:'Teriyaki Chicken with Rice',zh:'照烧鸡肉饭',image:'meal-01.png',cal:605,protein:43,fat:17,carbs:68},
 {en:'Teriyaki Beef with Rice',zh:'照烧牛肉饭',image:'meal-02.png',cal:585,protein:37,fat:16,carbs:76},
 {en:'Blackened Chicken Tzatziki Hot Sauce, Rice & Roasted Veg',zh:'香煎鸡肉配酸奶黄瓜酱、辣酱、米饭与烤蔬菜',image:'meal-03.png',cal:640,protein:41,fat:27,carbs:56},
 {en:'Tex Mex Tomato Beef Bowl with Cheese & Rice',zh:'墨西哥风味番茄牛肉芝士饭',image:'meal-04.png',cal:795,protein:39,fat:42,carbs:59},
 {en:'Korean Beef Bowl with Rice',zh:'韩式牛肉饭',image:'meal-05.png',cal:720,protein:36,fat:31,carbs:72},
 {en:'Chicken Yaki Udon with Peanut Chili Oil',zh:'花生辣油鸡肉炒乌冬',image:'meal-06.png',cal:735,protein:45,fat:22,carbs:84},
 {en:'Chicken Chow Mein',zh:'鸡肉炒面',image:'meal-07.png',cal:530,protein:42,fat:17,carbs:50},
 {en:'Rosé Pasta with Chicken & Cheese',zh:'番茄奶油鸡肉芝士意面',image:'meal-08.png',cal:705,protein:46,fat:18,carbs:87},
 {en:'Pesto Pasta with Chicken & Cheese',zh:'青酱鸡肉芝士意面',image:'meal-09.png',cal:705,protein:46,fat:18,carbs:87},
 {en:'Blackened Chicken Mashed Potatoes & Roasted Veg',zh:'香煎鸡肉配土豆泥与烤蔬菜',image:'meal-10.png',cal:580,protein:40,fat:23,carbs:61},
 {en:'Hamburger Steak Mashed Potatoes Gravy & Roasted Veg',zh:'汉堡牛肉排配土豆泥、肉汁与烤蔬菜',image:'meal-11.png',cal:750,protein:37,fat:40,carbs:62},
 {en:'Red Thai Chicken Curry with Rice',zh:'泰式红咖喱鸡肉饭',image:'meal-12.png',cal:780,protein:41,fat:35,carbs:59},
 {en:'Yellow Thai Chicken Curry with Rice',zh:'泰式黄咖喱鸡肉饭',image:'meal-13.png',cal:780,protein:41,fat:35,carbs:59},
 {en:'Japanese Chicken Curry with Rice',zh:'日式咖喱鸡肉饭',image:'meal-14.png',cal:630,protein:40,fat:17,carbs:76}
 ]
};
