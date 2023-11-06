import { TypeInput } from "@/types/interface";

interface DailyDietaryInputType {
  [key: string]: {
    name: string;
    type: "text" | "number" | "checkbox" | "password" | "email" | "file";
    accept: string;
    description: string;
  }[];
}

const dailyDietaryInput: DailyDietaryInputType = {
  Breakfast: [
    {
      name: "MealImgUrl",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
      description: "MealDescription",
    },
  ],
  Lunch: [
    {
      name: "MealImgUrl",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
      description: "MealDescription",
    },
  ],
  Dinner: [
    {
      name: "MealImgUrl",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
      description: "MealDescription",
    },
  ],
  Oil: [
    {
      name: "OilImgUrl",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
      description: "OilDescription",
    },
  ],
  Fruit: [
    {
      name: "FruitImgUrl",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
      description: "FruitDescription",
    },
  ],
  Water: [
    {
      name: "WaterImgUrl",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
      description: "WaterDescription",
    },
  ],
};

export default dailyDietaryInput;

// labelClass,
// inputClass,
// value,
// placeholder,
// onChange,
