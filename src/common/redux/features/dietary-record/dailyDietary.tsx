import { DailyDietaryType, RootState } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

const initDailyDietary: DailyDietaryType = {
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
      return action.payload;
    },
  },
});

export const { storeDailyDietary } = dailyDietarySlice.actions;
export const selectDailyDietary = (state: RootState) => state.dailyDietary;
export default dailyDietarySlice.reducer;
