interface FoodType {
  foodName: string;
  foodQty: string;
}

interface ExampleType {
  Title: string;
  food: FoodType[];
}

export interface FoodDetailContentType {
  Photo: string;
  photoName: string;
  equalContent?: string;
  equalQty: string;
  Detail: string;
  Example: ExampleType[];
}

export interface FoodDetailType {
  Starch: FoodDetailContentType;
  Protein: FoodDetailContentType;
  Vegetable: FoodDetailContentType;
  Oil: FoodDetailContentType;
  Fruit: FoodDetailContentType;
}

const foodDetail: FoodDetailType = {
  Starch: {
    Photo: "/images/dashboard/dietary-record/foodDetail/starch.svg",
    photoName: "一個拳頭大小",
    equalContent: "1碗飯",
    equalQty: "4份",
    Detail:
      "常見的飯、麵、馬鈴薯等等主食類，是歸類在全穀雜糧類中。全穀雜糧類的一天建議量是1.5~4碗飯，一個拳頭大小的飯就約等於一碗唷！當你看到便當配菜出現地瓜、玉米、南瓜或者吃地瓜、燕麥飯時，記得飯吃少一點，因為他們都是全穀雜糧類，才不會額外造成負擔！",
    Example: [
      {
        Title: "早餐",
        food: [
          { foodName: "薄吐司", foodQty: "1片" },
          { foodName: "厚片吐可", foodQty: "1/2片" },
          { foodName: "蛋餅皮", foodQty: "1/2片" },
          { foodName: "蘿蔔糕", foodQty: "1塊" },
          { foodName: "漢堡麵包", foodQty: "1/2個" },
          { foodName: "饅頭", foodQty: "1/4個" },
          { foodName: "燕麥片", foodQty: "3湯匙" },
          { foodName: "穀物粉", foodQty: "2湯匙" },
          { foodName: "小餐包", foodQty: "1個" },
          { foodName: "燒餅", foodQty: "1/4個" },
          { foodName: "油條", foodQty: "1/2個" },
          { foodName: "蘇打餅乾", foodQty: "3片" },
          { foodName: "飯糰", foodQty: "1/5個" },
          { foodName: "貝果", foodQty: "1/3個" },
        ],
      },
      {
        Title: "午晚餐",
        food: [
          { foodName: "碗 飯", foodQty: "1/4碗" },
          { foodName: "稀飯、麵", foodQty: "1/2碗" },
          { foodName: "綠豆、紅豆", foodQty: "1/4碗或2湯匙" },
          { foodName: "玉米", foodQty: "2/3根" },
          { foodName: "薄春捲皮", foodQty: "2張" },
          { foodName: "冬粉、米粉", foodQty: "1/2碗" },
          { foodName: "地瓜、芋頭", foodQty: "1/2碗" },
          { foodName: "南瓜、通心粉", foodQty: "1/2碗" },
          { foodName: "水餃皮", foodQty: "3張" },
          { foodName: "餛飩皮(小)", foodQty: "5張" },
          { foodName: "米血", foodQty: "2指長寬" },
          { foodName: "小湯圓", foodQty: "2湯匙" },
          { foodName: "甜不辣", foodQty: "1片" },
        ],
      },
    ],
  },
  Protein: {
    Photo: "/images/dashboard/dietary-record/foodDetail/protein.svg",
    photoName: "掌心大的肉片",
    equalQty: "2-3份",
    Detail:
      "豆魚蛋肉類最主要是提供蛋白質，一天建議要吃3-8份。一個掌心大小的肉片就有2-3份囉(肉的厚度約1cm左右），1顆蛋也等於1份，市售480ml的紙盒豆漿約等於2.5份，建議一餐不要吃超過一個掌心大的肉喔！牛奶一天1.5～2杯（1杯為240毫升，大約一個拳頭大），1盒市售紙盒包裝（480毫升）的鮮乳差不多就可以滿足一天所需的乳品類囉！",
    Example: [
      {
        Title: "肉類",
        food: [
          { foodName: "里肌肉", foodQty: "1/4掌" },
          { foodName: "小雞腿", foodQty: "1/2支" },
          { foodName: "雞胸肉", foodQty: "1/3片" },
          { foodName: "鮪魚罐頭", foodQty: "2湯匙" },
          { foodName: "蛤蠣(大)", foodQty: "6個" },
          { foodName: "豆漿", foodQty: "190ml" },
          { foodName: "豬、牛肉", foodQty: "1/4掌" },
          { foodName: "蛋", foodQty: "1顆" },
          { foodName: "三角油豆腐", foodQty: "2個" },
          { foodName: "嫩豆腐", foodQty: "1/2盒" },
          { foodName: "五香豆干", foodQty: "2塊" },
          { foodName: "雞心", foodQty: "4個" },
          { foodName: "百頁豆腐", foodQty: "1/6條" },
          { foodName: "秋刀魚", foodQty: "1/2條" },
          { foodName: "豬蹄膀", foodQty: "1/4掌" },
          { foodName: "梅花肉", foodQty: "1/4掌" },
          { foodName: "牛腩", foodQty: "1/4掌" },
          { foodName: "熱狗", foodQty: "1條" },
          { foodName: "香腸", foodQty: "1條" },
        ],
      },
      {
        Title: "乳製品",
        food: [
          { foodName: "鮮奶、保久乳", foodQty: "240ml" },
          { foodName: "優酪乳", foodQty: "240ml" },
          { foodName: "優格", foodQty: "210克" },
          { foodName: "奶粉", foodQty: "3湯匙" },
          { foodName: "起士", foodQty: "2片" },
        ],
      },
    ],
  },
  Vegetable: {
    Photo: "/images/dashboard/dietary-record/foodDetail/vegetable.svg",
    photoName: "200-250ml的碗",
    equalQty: "2份",
    Detail:
      "蔬菜最重要的就是提供膳食纖維，而膳食纖維每天最少要25克，然而國人平均攝取量只有16克而已，缺乏膳食纖維容易增加罹患腸胃道疾病、高血脂及高血膽固醇的風險！也不容易瘦！因此蔬菜一天3-5份較為剛好，每餐最好都要吃到1份蔬菜才健康喔。",
    Example: [
      {
        Title: "蔬菜",
        food: [
          { foodName: "葉菜類", foodQty: "1/2碗" },
          { foodName: "筍類、蘿蔔", foodQty: "1碗" },
          { foodName: "菇類、瓜類", foodQty: "1碗" },
          { foodName: "大番茄", foodQty: "1顆" },
        ],
      },
    ],
  },
  Oil: {
    Photo: "/images/dashboard/dietary-record/foodDetail/oil.svg",
    photoName: "一個食指指節",
    equalContent: "1茶匙",
    equalQty: "1份",
    Detail:
      "油脂類除了常見的植物油、動物油，還包含加工過的醬料，像是奶油、沙拉醬、花生醬，一天攝取量建議3-7茶匙，而一個食指指節的大小就是一茶匙。堅果種子類每天建議攝取1份，相當於一個大拇指。",
    Example: [
      {
        Title: "油脂",
        food: [
          { foodName: "油", foodQty: "1茶(5g)" },
          { foodName: "美乃滋", foodQty: "1茶匙(10g)" },
          { foodName: "培根", foodQty: "1片(15g)" },
          { foodName: "腰果", foodQty: "5粒(10g)" },
          { foodName: "核桃", foodQty: "2粒(7g)" },
        ],
      },
    ],
  },
  Fruit: {
    Photo: "/images/dashboard/dietary-record/foodDetail/fruit.svg",
    photoName: "一個拳頭的切塊水果總量",
    equalQty: "1份",
    Detail:
      "水果切塊裝碗8分滿，也是一個拳頭大，一天吃2-4份剛剛好！提醒你水果吃的比喝的健康，盡量避免選擇現榨果汁喔，很容易不小心攝取過多的水果和糖份，過濾後也少了蔬果的纖維喔！世界衛生組織把果汁和一般的糖視為同樣的分類，喝多了也會造成糖尿病險。",
    Example: [
      {
        Title: "水果",
        food: [
          { foodName: "橘子", foodQty: "1個(150g)" },
          { foodName: "蘋果", foodQty: "1個(130g)" },
          { foodName: "香蕉", foodQty: "1/2根(70g)" },
          { foodName: "香瓜", foodQty: "1/2個(165g)" },
          { foodName: "楊桃", foodQty: "1/2個(170g)" },
          { foodName: "葡萄", foodQty: "10粒(85g)" },
          { foodName: "小番茄", foodQty: "23粒(220g)" },
        ],
      },
    ],
  },
};

export default foodDetail;
