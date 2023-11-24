import DashboardContainer from "@/common/components/DashboardContainer";
import DailyDietary from "@/common/components/dietary-record/DailyDietary";
import GoalCompletionRate from "@/common/components/dietary-record/goalChart/GoalCompletionRate";
import CourseInfo from "@/common/components/dietary-record/CourseInfo";
import Image from "next/legacy/image";
import { FC, useEffect, useState } from "react";
import BodyRate from "./BodyRate";
import MobileSidebar from "./MobileSidebar";
import useResize from "@/common/hooks/useResize";
import Link from "next/link";
import InfoBtn from "./InfoBtn";
import { useDispatch } from "react-redux";

interface CourseRecordProps {
  Token: string;
  UserCurrentStatus: string;
  CourseId: string;
}

const CourseRecord: FC<CourseRecordProps> = ({
  Token,
  UserCurrentStatus,
  CourseId,
}) => {
  const isMobile: boolean = useResize();
  const [showTab, setShowTab] = useState<number>(isMobile ? 1 : 0);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowTab(isMobile ? 1 : 0);
  }, [isMobile]);

  const showDailyDietary = showTab === 0 || showTab === 1;
  const showBodyRate = showTab === 0 || showTab === 2;
  const showGoalRate = showTab === 0 || showTab === 3;
  const showInfoMobile = showTab === 0 || showTab === 4;

  const routeListPage =
    UserCurrentStatus === "user"
      ? "/dashboard/student/course-list"
      : "/dashboard/nutritionist/student-list";

  const infoTitle = UserCurrentStatus === "user" ? "營養師資訊" : "學員資訊";

  return (
    <>
      <Link
        href={routeListPage}
        className="before:content-['<'] before:mr-4 text-left border-black-950 border-b w-fit hidden lg:block"
      >
        返回我的課程列表
      </Link>
      <h2 className="cusPrimaryTitle py-4 hidden lg:block">我的紀錄</h2>
      <div className="flex flex-wrap gap-12 w-full justify-center relative lg:mt-12">
        <InfoBtn
          Token={Token}
          CourseId={CourseId}
          UserCurrentStatus={UserCurrentStatus}
          infoTitle={infoTitle}
        />
        {showInfoMobile && (
          <div className="w-full lg:hidden">
            <DashboardContainer title={infoTitle}>
              <Link
                href={routeListPage}
                className="absolute left-30 -top-[52px] w-[36px] h-[36px] lg:hidden"
              >
                <Image
                  src="/images/dashboard/dietary-record/back.svg"
                  layout="fixed"
                  width={36}
                  height={36}
                  alt="back.svg"
                />
              </Link>
              <CourseInfo
                Token={Token}
                CourseId={CourseId}
                UserCurrentStatus={UserCurrentStatus}
              />
            </DashboardContainer>
          </div>
        )}
        {showDailyDietary && (
          <div className="w-full relative">
            <div className="absolute top-[70px] h-[94px] w-full bg-primary-100 lg:hidden" />
            <DashboardContainer title="飲食日記">
              <Link
                href={routeListPage}
                className="absolute left-30 -top-[52px] w-[36px] h-[36px] lg:hidden"
              >
                <Image
                  src="/images/dashboard/dietary-record/back.svg"
                  layout="fixed"
                  width={36}
                  height={36}
                  alt="back.svg"
                />
              </Link>
              <DailyDietary
                isMobile={isMobile}
                Token={Token}
                CourseId={CourseId}
                UserCurrentStatus={UserCurrentStatus}
              />
            </DashboardContainer>
          </div>
        )}
        {showBodyRate && (
          <div className="w-full lg:w-[68%]">
            <DashboardContainer title="身體紀錄">
              <Link
                href={routeListPage}
                className="absolute left-30 -top-[52px] w-[36px] h-[36px] lg:hidden"
              >
                <Image
                  src="/images/dashboard/dietary-record/back.svg"
                  layout="fixed"
                  width={36}
                  height={36}
                  alt="back.svg"
                />
              </Link>
              <BodyRate
                Token={Token}
                CourseId={CourseId}
                UserCurrentStatus={UserCurrentStatus}
              />
            </DashboardContainer>
          </div>
        )}
        {showGoalRate && (
          <div className="w-full lg:w-[30%]">
            <DashboardContainer title="目標">
              <Link
                href={routeListPage}
                className="absolute left-30 -top-[52px] w-[36px] h-[36px] lg:hidden"
              >
                <Image
                  src="/images/dashboard/dietary-record/back.svg"
                  layout="fixed"
                  width={36}
                  height={36}
                  alt="back.svg"
                />
              </Link>
              <GoalCompletionRate
                Token={Token}
                CourseId={CourseId}
                UserCurrentStatus={UserCurrentStatus}
              />
            </DashboardContainer>
          </div>
        )}
      </div>
      <MobileSidebar showTab={showTab} setShowTab={setShowTab} />
    </>
  );
};

export default CourseRecord;
