
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '今天吃什么',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '又到了吃饭时间', },
    { key: 's', wording: '吃饱了才有力气减肥', },
    { key: 'd', wording: '看看今天吃什么', },
  ],
  // 最终解释权归属人
  owner: 'XXX',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '饿肚肚', alias: '饿肚肚', image: '/images/1.jpeg',  description: '再苦不能苦我的小肚肚' },
  { key: 'w', name: '豪华炸鸡套餐', alias: '炸鸡！炸鸡！', image: '/images/2.jpg',  description: '“炸鸡！炸鸡！”' },
  { key: 'e', name: '麻辣火锅', alias: '人间帅锅，不如火锅', image: '/images/3.jpg',  description: '「人间帅锅，不如火锅」' },
  { key: 'r', name: '高档西餐', alias: '高档西餐', image: '/images/4.jpg',  description: '“只有这优雅的红酒，才能配得上我这精致的妆容~”' },
  { key: 't', name: '特色炒菜', alias: '特色炒菜', image: '/images/5.jpg',  description: '「糖醋里脊、辣子鸡、水煮肉片」' },
  { key: 'y', name: '高热量奶茶', alias: '高热量奶茶', image: '/images/6.png',  description: '“给姐姐来一杯卡布奇诺”' },
  { key: 'u', name: '精致甜品', alias: '精致甜品', image: '/images/7.jpg',  description: '“生活本来就这么苦了，吃一点甜甜的把！”' },
  { key: 'i', name: '大口烤肉', alias: '大口烤肉', image: '/images/8.jpg',  description: '「如果有什么烦恼，那就吃一顿烤肉，如果不行那就吃两顿」' },
];
