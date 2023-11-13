import { RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

interface Meal {
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

export interface DailyDietaryType {
  [key: string]: string | boolean | Meal;
  Id: string;
  InsertDate: string;
  StarchSum: string;
  ProteinSum: string;
  VegetableSum: string;
  OilSum: string;
  FruitSum: string;
  WaterSum: string;
  StarchSumAchieved: boolean;
  ProteinSumAchieved: boolean;
  VegetableSumAchieved: boolean;
  OilSumAchieved: boolean;
  FruitSumAchieved: boolean;
  WaterSumAchieved: boolean;
  Breakfast: Meal;
  Lunch: Meal;
  Dinner: Meal;
  Fruit: string;
  FruitDescription: string;
  FruitImgUrl: string;
  Oil: string;
  OilDescription: string;
  OilImgUrl: string;
  Water: string;
  WaterDescription: string;
  WaterImgUrl: string;
}

const initDailyDietary = {
  Id: "",
  InsertDate: "",
  StarchSum: "",
  ProteinSum: "",
  VegetableSum: "",
  OilSum: "",
  FruitSum: "",
  WaterSum: "",
  StarchSumAchieved: false,
  ProteinSumAchieved: false,
  VegetableSumAchieved: false,
  OilSumAchieved: false,
  FruitSumAchieved: false,
  WaterSumAchieved: false,
  Breakfast: {
    Id: "",
    DailyLogId: "",
    MealTime: "",
    MealDescription: "",
    Image: "",
    Starch: "",
    Protein: "",
    Vegetable: "",
    StarchAchieved: false,
    ProteinAchieved: false,
    VegetableAchieved: false,
  },
  Lunch: {
    Id: "",
    DailyLogId: "",
    MealTime: "",
    MealDescription: "",
    Image: "",
    Starch: "",
    Protein: "",
    Vegetable: "",
    StarchAchieved: false,
    ProteinAchieved: false,
    VegetableAchieved: false,
  },
  Dinner: {
    Id: "",
    DailyLogId: "",
    MealTime: "",
    MealDescription: "",
    Image: "",
    Starch: "",
    Protein: "",
    Vegetable: "",
    StarchAchieved: false,
    ProteinAchieved: false,
    VegetableAchieved: false,
  },
  Fruit: "",
  FruitDescription: "",
  FruitImgUrl: "",
  Oil: "",
  OilDescription: "",
  OilImgUrl: "",
  Water: "",
  WaterDescription: "",
  WaterImgUrl: "",
};

export const dailyDietarySlice = createSlice({
  name: "dailyDietary",
  initialState: initDailyDietary,
  reducers: {
    storeDailyDietary: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { storeDailyDietary } = dailyDietarySlice.actions;
export const selectDailyDietary = (state: RootState) => state.dailyDietary;
export default dailyDietarySlice.reducer;
