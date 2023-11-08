import { DailyDietaryType } from "@/common/redux/features/dietary-record/dailyDietary";

interface FoodIconType {
  [key: string]: Record<string, string>;
}

export interface FoodMenuType {
  Breakfast: Record<string, string>[];
  Lunch: Record<string, string>[];
  Dinner: Record<string, string>[];
  Others: Record<string, string>[];
}

const foodIcon: FoodIconType = {
  Protein: {
    name: "蛋白質",
    enName: "Protein",
    foodIcon: "protein_PC.svg",
  },
  Starch: {
    name: "澱粉",
    enName: "Starch",
    foodIcon: "starch_PC.svg",
  },
  Vegetable: {
    name: "蔬菜",
    enName: "Vegetable",
    foodIcon: "vegetable_PC.svg",
  },
  Oil: {
    name: "油脂",
    enName: "Oil",
    foodIcon: "oil_PC.svg",
  },
  Fruit: {
    name: "水果",
    enName: "Fruit",
    foodIcon: "fruit_PC.svg",
  },
  Water: {
    name: "水",
    enName: "Water",
    foodIcon: "water_PC.svg",
  },
};

const { Starch, Protein, Vegetable, Oil, Fruit, Water } = foodIcon;

const foodMenu = {
  Breakfast: [Starch, Protein, Vegetable],
  Lunch: [Starch, Protein, Vegetable],
  Dinner: [Starch, Protein, Vegetable],
  Others: [Oil, Fruit, Water],
};
export default foodMenu;

interface FoodIcon {
  PC: string;
  completed: string;
  mobile: string;
  name: string;
  enName: string;
  showTab: string[];
}

export interface Event {
  start: string;
  tab: string;
  extendedProps: {
    [key: string]: any | string;
  };
}

export interface Meal {
  Id: string;
  DailyLogId: string;
  MealTime: string;
  MealDescription: string;
  Image: string;
  Starch: string;
  Protein: string;
  Vegetable: string;
  StarchAchieved: boolean;
  ProteinAchieved: boolean;
  VegetableAchieved: boolean;
}

export const weekDays: string[] = ["日", "一", "二", "三", "四", "五", "六"];

export interface Tab {
  name: string;
  enName: string;
}

export const tabs: Tab[] = [
  { name: "總覽", enName: "All" },
  { name: "早餐", enName: "Breakfast" },
  { name: "午餐", enName: "Lunch" },
  { name: "晚餐", enName: "Dinner" },
  { name: "油脂", enName: "Oil" },
  { name: "水果", enName: "Fruit" },
  { name: "飲水", enName: "Water" },
];

export const foodIcons: FoodIcon[] = [
  {
    PC: "starch_PC.svg",
    completed: "starch-completed_PC.png",
    mobile: "starch_mobile.svg",
    name: "澱粉",
    enName: "Starch",
    showTab: ["All", "Breakfast", "Lunch", "Dinner"],
  },
  {
    PC: "protein_PC.svg",
    completed: "protein-completed_PC.png",
    mobile: "protein_mobile.svg",
    name: "蛋白質",
    enName: "Protein",
    showTab: ["All", "Breakfast", "Lunch", "Dinner"],
  },
  {
    PC: "vegetable_PC.svg",
    completed: "vegetable-completed_PC.png",
    mobile: "vegetable_mobile.svg",
    name: "蔬菜",
    enName: "Vegetable",
    showTab: ["All", "Breakfast", "Lunch", "Dinner"],
  },
  {
    PC: "oil_PC.svg",
    completed: "oil-completed_PC.png",
    mobile: "oil_mobile.svg",
    name: "油脂",
    enName: "Oil",
    showTab: ["All", "Oil"],
  },
  {
    PC: "fruit_PC.svg",
    completed: "fruit-completed_PC.png",
    mobile: "fruit_mobile.svg",
    name: "水果",
    enName: "Fruit",
    showTab: ["All", "Fruit"],
  },
  {
    PC: "water_PC.svg",
    completed: "water-completed_PC.png",
    mobile: "water_mobile.svg",
    name: "水",
    enName: "Water",
    showTab: ["All", "Water"],
  },
];

export const dailyDietaryType: DailyDietaryType = {
  Id: "1",
  InsertDate: "2023-11-01",
  StarchSum: "1, 3",
  ProteinSum: "2, 9",
  VegetableSum: "3, 6",
  OilSum: "1, 1",
  FruitSum: "2, 3",
  WaterSum: "3700, 2000",
  StarchSumAchieved: false,
  ProteinSumAchieved: false,
  VegetableSumAchieved: false,
  OilSumAchieved: true,
  FruitSumAchieved: true,
  WaterSumAchieved: false,
  Breakfast: {
    Id: "1",
    DailyLogId: "1",
    MealTime: "早餐",
    MealDescription: "吐司...",
    Image: "/upload/images/...",
    Starch: "BStarch,2",
    Protein: "BProtein,2",
    Vegetable: "BVegetable,2",
    StarchAchieved: false,
    ProteinAchieved: true,
    VegetableAchieved: true,
  },
  Lunch: {
    // {
    Id: "2",
    DailyLogId: "1",
    MealTime: "午餐",
    MealDescription: "吐司...",
    Image: "/upload/images/...",
    Starch: "LStarch,2",
    Protein: "LProtein,2",
    Vegetable: "LVegetable,2",
    StarchAchieved: true,
    ProteinAchieved: false,
    VegetableAchieved: true,
  },
  Dinner: {
    Id: "3",
    DailyLogId: "1",
    MealTime: "晚餐",
    MealDescription: "吐司...",
    Image: "/upload/images/...",
    Starch: "DStarch,2",
    Protein: "DProtein,2",
    Vegetable: "Degetable,2",
    StarchAchieved: true,
    ProteinAchieved: true,
    VegetableAchieved: false,
  },
  Fruit: "Fruit,Fruit",
  FruitDescription: "",
  FruitImgUrl: "/upload/images/...",
  Oil: "Oil,Oil",
  OilDescription: "",
  OilImgUrl: "/upload/images/...",
  Water: "Water,Water",
  WaterDescription: "",
  WaterImgUrl: "/upload/images/...",
};
