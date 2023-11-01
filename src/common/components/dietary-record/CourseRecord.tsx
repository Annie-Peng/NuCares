import DashboardContainer from "@/common/components/DashboardContainer";
import DailyDietary from "@/common/components/dietary-record/DailyDietary";
import GoalCompletionRate from "@/common/components/dietary-record/goalChart/GoalCompletionRate";
import CourseInfo from "@/common/components/dietary-record/CourseInfo";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import BodyRate from "./BodyRate";
import MobileSidebar from "./MobileSidebar";
import useResize from "@/common/hooks/useResize";
import Link from "next/link";

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
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [showTab, setShowTab] = useState<number>(isMobile ? 1 : 0);

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
        <button
          className="absolute right-0 -top-[56px] p-10 btn-cusPrimaryInfo items-center gap-10 hidden lg:flex"
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
            <CourseInfo Token={Token} CourseId={CourseId} />
          </div>
        )}
        {showInfoMobile && (
          <div className="w-full lg:hidden">
            <DashboardContainer title="學員資訊">
              <Link href={routeListPage}>
                <Image
                  src="/images/dashboard/dietary-record/back.svg"
                  width={26}
                  height={26}
                  alt="back.svg"
                  className="absolute top-20 left-24"
                />
              </Link>
              <CourseInfo Token={Token} CourseId={CourseId} />
            </DashboardContainer>
          </div>
        )}
        {showDailyDietary && (
          <div className="w-full">
            <DashboardContainer title="飲食日記">
              <Link href={routeListPage}>
                <Image
                  src="/images/dashboard/dietary-record/back.svg"
                  width={26}
                  height={26}
                  alt="back.svg"
                  className="absolute top-20 left-24 lg:hidden"
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
              <Link href={routeListPage}>
                <Image
                  src="/images/dashboard/dietary-record/back.svg"
                  width={26}
                  height={26}
                  alt="back.svg"
                  className="absolute top-20 left-24 lg:hidden"
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
              <Link href={routeListPage}>
                <Image
                  src="/images/dashboard/dietary-record/back.svg"
                  width={26}
                  height={26}
                  alt="back.svg"
                  className="absolute top-20 left-24 lg:hidden"
                />
              </Link>
              <GoalCompletionRate Token={Token} CourseId={CourseId} />
            </DashboardContainer>
          </div>
        )}
      </div>
      <MobileSidebar showTab={showTab} setShowTab={setShowTab} />
    </>
  );
};

export default CourseRecord;
