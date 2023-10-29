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
