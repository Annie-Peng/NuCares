import Image from "next/image";
import BMIGoalChart from "./BMIGoalChart";
import WeightGoalChart from "./WeightGoalChart";
import { useState } from "react";

const GoalCompletionRate = () => {
  const [editGoal, setEditGoal] = useState(false);
  return (
    <>
      <button type="button">
        <Image
          src="/images/dashboard/dietary-record/edit.svg"
          width="28"
          height="28"
          alt="arrow"
          className="absolute top-12 right-16 hidden lg:block"
        />
      </button>
      <form className="pb-[170px] lg:pb-0">
        <ul className="flex text-center justify-center gap-[44px]">
          <li className="flex flex-col gap-12 lg:gap-16">
            <p className="cusPrimaryTag px-26">體重</p>
            <p className="text-14 text-primary-500">
              目標
              <br />
              {editGoal ? (
                <label htmlFor="Weight">
                  <input
                    className="font-bold w-[78px] text-center h-[36px] lg:text-24"
                    placeholder="公斤"
                  />
                </label>
              ) : (
                <>
                  <span className="text-24 font-bold">50</span>
                  <span className="text-12">公斤</span>
                </>
              )}
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
          <li className="flex flex-col  gap-12 lg:gap-16">
            <p className="cusPrimaryTag px-26">體脂</p>
            <p className="text-14 text-primary-500">
              目標
              <br />
              {editGoal ? (
                <label htmlFor="Bmi">
                  <input
                    className="font-bold w-[78px] text-center h-[36px] lg:text-24"
                    placeholder="%"
                  />
                </label>
              ) : (
                <>
                  <span className="text-24 font-bold">30</span>
                  <span className="text-12">公斤</span>
                </>
              )}
            </p>
            <div className="w-[80px]">
              <BMIGoalChart />
            </div>
            <p className="text-14 text-black-400">
              現在
              <br />
              <span className="text-24 font-bold">80</span>
              <span className="text-12">公斤</span>
            </p>
          </li>
        </ul>
        {editGoal ? (
          <button
            type="button"
            className="btn-cusSecondary py-8 w-[240px] block mx-auto mt-32 lg:hidden"
            onClick={() => setEditGoal(false)}
          >
            儲存
          </button>
        ) : (
          <button
            type="button"
            className="btn-cusEditPrimary py-8 w-[240px] block mx-auto mt-32 lg:hidden"
            onClick={() => setEditGoal(true)}
          >
            <Image
              src="/images/dashboard/dietary-record/clip.svg"
              width="20"
              height="20"
              alt="edit"
              className="mx-auto"
            />
          </button>
        )}
      </form>
    </>
  );
};

export default GoalCompletionRate;
