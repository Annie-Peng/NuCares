import { Meal } from "../lib/dashboard/dietary-record/foodMenu";
import { DailyDietaryType } from "../redux/features/dietary-record/dailyDietary";

const slashFormatKey = [
  "Protein",
  "ProteinSum",
  "Starch",
  "StarchSum",
  "Vegetable",
  "VegetableSum",
  "Fruit",
  "FruitSum",
  "Oil",
  "OilSum",
  "Water",
  "WaterSum",
];

interface ObjType {
  [key: string]: string;
}

const turnStringFormat = (
  data: Record<string, string> | string | Meal | DailyDietaryType,
  format: string
) => {
  switch (format) {
    case "mealSlashFormat": {
      let obj: ObjType = {};
      Object.entries(data).forEach(([key, value]) => {
        if (slashFormatKey.includes(key)) {
          return (obj[key] = value.replace(",", " / "));
        }
        return (obj[key] = value);
      });
      return obj;
    }

    case "otherSlashFormat": {
      if (typeof data === "string") {
        return data.replace(",", " / ");
      }
      throw new Error('Data must be a string when using "otherSlashFormat".');
    }
  }
};

export default turnStringFormat;
