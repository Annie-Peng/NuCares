import Image from "next/legacy/image";
import BMIGoalChart from "./BMIGoalChart";
import WeightGoalChart from "./WeightGoalChart";
import { MouseEvent, FC, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectGoal } from "@/common/redux/features/dietary-record/goal";
import { useGoalPutApiMutation } from "@/common/redux/service/courseRecord";

interface GoalCompletionRateProps {
  Token: string;
  CourseId: string;
  UserCurrentStatus: string;
}

const GoalCompletionRate: FC<GoalCompletionRateProps> = ({
  Token,
  CourseId,
  UserCurrentStatus,
}) => {
  const [editGoal, setEditGoal] = useState(false);
  const renderData = useSelector(selectGoal);
  const [GoalPutApi] = useGoalPutApiMutation();
  const GoalWeightRef = useRef<HTMLInputElement>(null);
  const GoalBodyFatRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      if (!GoalWeightRef.current && !GoalBodyFatRef.current) {
        setEditGoal(false);
        return;
      }

      const body = {
        GoalWeight: GoalWeightRef.current?.value,
        GoalBodyFat: GoalBodyFatRef.current?.value,
      };
      const result = await GoalPutApi({ Token, CourseId, body });

      setEditGoal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {UserCurrentStatus === "nu" &&
        (editGoal ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="absolute -top-40 right-16 hidden lg:block"
          >
            <Image
              src="/images/dashboard/dietary-record/save.svg"
              layout="fixed"
              width={28}
              height={28}
              alt="arrow"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setEditGoal(true)}
            className="absolute -top-40 right-16 hidden w-[28px] h-[28px] lg:block"
          >
            <Image
              src="/images/dashboard/dietary-record/edit.svg"
              layout="fixed"
              width={28}
              height={28}
              alt="arrow"
            />
          </button>
        ))}
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
                    className="font-bold w-[78px] text-center h-[36px]"
                    placeholder="公斤"
                    name="Weight"
                    ref={GoalWeightRef}
                    type="number"
                    defaultValue={renderData.GoalWeight}
                  />
                </label>
              ) : (
                <>
                  <span className="text-24 font-bold">
                    {renderData.GoalWeight}
                  </span>
                  <span className="text-12">公斤</span>
                </>
              )}
            </p>
            <div className="w-[80px]">
              <WeightGoalChart
                WeightCompletionRate={renderData.WeightCompletionRate}
              />
            </div>
            <p className="text-14 text-black-400">
              現在
              <br />
              <span className="text-24 font-bold">{renderData.Weight}</span>
              <span className="text-12">公斤</span>
            </p>
          </li>
          <li className="flex flex-col  gap-12 lg:gap-16">
            <p className="cusPrimaryTag px-26">體脂</p>
            <p className="text-14 text-primary-500">
              目標
              <br />
              {editGoal ? (
                <label htmlFor="BodyFat">
                  <input
                    className="font-bold w-[78px] text-center h-[36px]"
                    placeholder="%"
                    name="BodyFat"
                    ref={GoalBodyFatRef}
                    type="number"
                    defaultValue={renderData.GoalBodyFat}
                  />
                </label>
              ) : (
                <>
                  <span className="text-24 font-bold">
                    {renderData.GoalBodyFat}
                  </span>
                  <span className="text-12">%</span>
                </>
              )}
            </p>
            <div className="w-[80px]">
              <BMIGoalChart
                BodyFatCompletionRate={renderData.BodyFatCompletionRate}
              />
            </div>
            <p className="text-14 text-black-400">
              現在
              <br />
              <span className="text-24 font-bold">{renderData.BodyFat}</span>
              <span className="text-12">%</span>
            </p>
          </li>
        </ul>
        {UserCurrentStatus === "nu" &&
          (editGoal ? (
            <button
              type="button"
              className="btn-cusSecondary py-8 w-[240px] block mx-auto mt-32 lg:hidden"
              onClick={handleSubmit}
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
                layout="fixed"
                width={20}
                height={20}
                alt="edit"
                className="mx-auto"
              />
            </button>
          ))}
      </form>
    </>
  );
};

export default GoalCompletionRate;
