interface BodyRateAddType {
  name: string;
  enName: string;
  unit: string;
}

interface BodyRateTabsType {
  name: string;
  enName: string;
}

export interface SingleBodyRateType {
  Bmi: number;
  Bmr: number;
  BodyFat: number;
  CreateDate: string;
  Height: number;
  SMM: number;
  VisceralFat: number;
  Weight: number;
}

const bodyRateAdd: BodyRateAddType[] = [
  { name: "身高", enName: "Height", unit: "公分" },
  { name: "體重", enName: "Weight", unit: "公斤" },
  { name: "體脂", enName: "BodyFat", unit: "%" },
  { name: "內臟脂肪", enName: "VisceralFat", unit: "級" },
  { name: "骨骼肌率", enName: "SMM", unit: "%" },
];

export default bodyRateAdd;

export const bodyRateTabs: BodyRateTabsType[] = [
  { name: "身高", enName: "Height" },
  { name: "體重", enName: "Weight" },
  { name: "體脂", enName: "BodyFat" },
  { name: "內臟脂肪", enName: "VisceralFat" },
  { name: "骨骼肌率", enName: "SMM" },
  { name: "BMI", enName: "Bmi" },
  { name: "BMR", enName: "Bmr" },
];
