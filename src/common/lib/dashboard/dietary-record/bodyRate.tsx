interface BodyRateAddType {
  name: string;
  enName: string;
  unit: string;
}

export const bodyRateAdd: BodyRateAddType[] = [
  { name: "身高", enName: "Height", unit: "公分" },
  { name: "體重", enName: "Weight", unit: "公斤" },
  { name: "體脂", enName: "BodyFat", unit: "%" },
  { name: "內臟脂肪", enName: "VisceralFat", unit: "級" },
  { name: "骨骼肌率", enName: "SMM", unit: "%" },
];
