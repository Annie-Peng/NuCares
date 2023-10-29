import dynamic from "next/dynamic";
import d3 from "d3";
import WeightGoalChart from "./WeightGoalChart";

// const WeightChart = dynamic(() => import("./WeightGoalChart"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

const BMIChart = dynamic(() => import("./BMIGoalChart"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const GoalCompletionRate = () => {
  return (
    <ul className="flex justify-center gap-[44px]">
      <li className="flex flex-col gap-16">
        <p className="cusPrimaryTag px-26">體重</p>
        <p className="text-14 text-primary-500">
          目標
          <br />
          <span className="text-24 font-bold">50</span>
          <span className="text-12">公斤</span>
        </p>
        <div className="w-[80px]">
          <WeightGoalChart />
        </div>
        <p className="text-14 text-black-400">
          現在
          <br />
          <span className="text-24 font-bold">80</span>
          <span className="text-12">公斤</span>
        </p>
      </li>
      <li className="flex flex-col gap-16">
        <p className="cusPrimaryTag px-26">體脂</p>
        <p className="text-14 text-primary-500">
          目標
          <br />
          <span className="text-24 font-bold">30</span>
          <span className="text-12">公斤</span>
        </p>
        <BMIChart />
        <p className="text-14 text-black-400">
          現在
          <br />
          <span className="text-24 font-bold">80</span>
          <span className="text-12">公斤</span>
        </p>
      </li>
    </ul>
  );
};

export default GoalCompletionRate;
