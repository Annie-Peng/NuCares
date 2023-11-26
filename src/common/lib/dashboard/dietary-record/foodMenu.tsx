import { DailyDietaryType } from "@/types/interface";

interface FoodIconType {
  [key: string]: FoodType;
}

export interface FoodType {
  name: string;
  enName: string;
  foodIcon: string;
}

export interface FoodMenuType {
  Breakfast: FoodType[];
  Lunch: FoodType[];
  Dinner: FoodType[];
  Others: FoodType[];
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

export interface FoodIcon {
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
