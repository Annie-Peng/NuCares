import Image from "next/image";
import BodyRateChart from "./BodyRateChart";
import { useState } from "react";

const BodyRate = () => {
  const [tab, setTab] = useState<string>("Height");

  console.log(tab);

  return (
    <div className="flex flex-col h-full gap-16">
      <label htmlFor="BodyRateChart" className="w-[100px] mx-auto relative">
        <select
          name="BodyRateChart"
          className="border-primary-400 pr-32 bg-transparent relative z-10"
          onChange={(e) => setTab(e.target.value)}
        >
          <option value="Height">身高</option>
          <option value="Weight">體重</option>
          <option value="BodyFat">體脂</option>
          <option value="VisceralFat">內臟脂肪</option>
          <option value="SMM">骨骼肌率</option>
          <option value="Bmi">BMI</option>
          <option value="Bmr">BMR</option>
        </select>
        <Image
          src="/images/dashboard/dietary-record/dropdown.svg"
          width="20"
          height="20"
          alt="arrow"
          className="absolute top-1/2 right-0 -translate-y-1/2"
        />
      </label>
      <BodyRateChart tab={tab} />
    </div>
  );
};

export default BodyRate;
