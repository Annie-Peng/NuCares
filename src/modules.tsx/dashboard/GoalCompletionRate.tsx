import dynamic from "next/dynamic";
import GoalChart from "./WeightGoalChart";
import d3 from "d3";

const WeightChart = dynamic(() => import("./WeightGoalChart"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const BMIChart = dynamic(() => import("./BMIGoalChart"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const GoalCompletionRate = () => {
  return (
    <div className="flex flex-col justify-between pt-[65px] h-full">
      <ul className="flex justify-between">
        <li className="w-1/2">
          <WeightChart />
          <p>目標體重</p>
          <p>50 公斤</p>
        </li>
        <li className="w-1/2">
          <BMIChart />
          <p>目標體脂</p>
          <p>30 %</p>
        </li>
      </ul>
      <button className="btn-cusSecondary">編輯</button>
    </div>
  );
};

export default GoalCompletionRate;
