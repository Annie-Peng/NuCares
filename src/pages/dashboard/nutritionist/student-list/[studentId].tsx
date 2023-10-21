import DashboardLayout from "@/common/components/DashboardLayout";
import DashboardOuterContainer from "@/common/components/DashboardOuterContainer";
import DailyDietary from "@/common/components/dietary-record/DailyDietary";
import GoalCompletionRate from "@/common/components/dietary-record/GoalCompletionRate";

const StudentIdPage = () => {
  return (
    <>
      <DashboardLayout>
        <p className="text-left border-b w-fit">返回我的課程列表</p>
        <h2>我的紀錄</h2>
        <div className="flex flex-wrap gap-12 w-full justify-center h-[622px]">
          <div className="w-[30%]">
            <DashboardOuterContainer title="我的營養師">
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
            </DashboardOuterContainer>
          </div>
          <div className="w-[68%]">
            <DashboardOuterContainer title="飲食紀錄">
              <DailyDietary />
            </DashboardOuterContainer>
          </div>
          <div className="w-[30%]">
            <DashboardOuterContainer title="目標完成度">
              <GoalCompletionRate />
            </DashboardOuterContainer>
          </div>
          <div className="w-[68%]">
            <DashboardOuterContainer title="身體當前數值">
              1
            </DashboardOuterContainer>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default StudentIdPage;

const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { studentId: "1" },
      },
      {
        params: { studentId: "2" },
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
