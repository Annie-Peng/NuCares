import DashboardContainer from "@/common/components/DashboardContainer";
import DailyDietary from "@/common/components/dietary-record/DailyDietary";
import GoalCompletionRate from "@/common/components/dietary-record/GoalCompletionRate";
import CourseInfo from "@/common/components/dietary-record/CourseInfo";
import Image from "next/image";
import { useState } from "react";
import BodyRate from "./BodyRate";

const CourseRecord = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  return (
    <>
      <p className="before:content-['<'] before:mr-4 text-left border-black-950 border-b w-fit">
        返回我的課程列表
      </p>
      <h2 className="cusPrimaryTitle py-4">我的紀錄</h2>
      <div className="mt-12 flex flex-wrap gap-12 w-full justify-center relative">
        <button
          className="absolute right-0 -top-[56px] p-10 btn-cusPrimaryInfo flex items-center gap-10"
          onClick={() => setShowInfo(!showInfo)}
        >
          <Image
            src="/images/dashboard/dietary-record/menu-white.svg"
            width="20"
            height="20"
            alt="menu"
          />
          學員資訊
        </button>
        {showInfo && (
          <div className="absolute top-0 right-0 z-10 cusShadow p-20 rounded-10 min-w-[240px]">
            <CourseInfo />
          </div>
        )}
        <div className="w-full">
          <DashboardContainer title="飲食日記">
            <DailyDietary />
          </DashboardContainer>
        </div>
        <div className="w-[68%]">
          <DashboardContainer title="身體紀錄">
            <BodyRate />
          </DashboardContainer>
        </div>
        <div className="w-[30%]">
          <DashboardContainer title="目標">
            <GoalCompletionRate />
          </DashboardContainer>
        </div>
      </div>
    </>
  );
};

export default CourseRecord;
