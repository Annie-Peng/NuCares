import { TypeInput } from "@/types/interface";

const dailyDietaryInput: TypeInput = {
  Breakfast: [
    {
      name: "Image",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
    },
    // {
    //   name: "MealDescription",
    //   type: "text",
    // },
  ],
  Lunch: [
    {
      name: "Image",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
    },
  ],
  Dinner: [
    {
      name: "Image",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
    },
  ],
  Oil: [
    {
      name: "OilImgUrl",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
    },
  ],
  Fruit: [
    {
      name: "FruitImgUrl",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
    },
  ],
  Water: [
    {
      name: "WaterImgUrl",
      type: "file",
      accept: "image/png, image/jpeg, image/jpg",
    },
  ],
};

export default dailyDietaryInput;

// labelClass,
// inputClass,
// value,
// placeholder,
// onChange,
