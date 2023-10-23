import DashboardContainer from "@/common/components/DashboardContainer";
import DailyDietary from "@/common/components/dietary-record/DailyDietary";
import GoalCompletionRate from "@/common/components/dietary-record/GoalCompletionRate";

const CourseIdPage = () => {
  return (
    <>
      <p className="text-left border-b w-fit">返回我的課程列表</p>
      <h2>我的紀錄</h2>
      <div className="flex flex-wrap gap-12 w-full justify-center h-[622px]">
        <div className="w-[30%]">
          <DashboardContainer title="我的營養師">
            <p>進階 - 8週飲食建議</p>
            <div className="flex items-center justify-center">
              <img className="rounded-full bg-black-300 w-[60px] h-[60px]" />
              <p>陳瘦瘦</p>
            </div>
            <ul>
              <li>iamthin@gmail.com</li>
              <li>0922-333444</li>
              <li>thinthingood</li>
            </ul>
          </DashboardContainer>
        </div>
        <div className="w-[68%]">
          <DashboardContainer title="飲食紀錄">
            <DailyDietary />
          </DashboardContainer>
        </div>
        <div className="w-[30%]">
          <DashboardContainer title="目標完成度">
            <GoalCompletionRate />
          </DashboardContainer>
        </div>
        <div className="w-[68%]">
          <DashboardContainer title="身體當前數值">1</DashboardContainer>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;

const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { courseId: "1" },
      },
      {
        params: { courseId: "2" },
      },
    ],
    fallback: false,
  };
};
export { getStaticPaths };

const getStaticProps = async () => {
  return {
    props: {},
  };
};
export { getStaticProps };
