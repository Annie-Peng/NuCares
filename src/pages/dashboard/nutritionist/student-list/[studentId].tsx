import DashboardOuterContainer from "@/common/components/DashboardOuterContainer";
import GoalCompletionRate from "@/modules.tsx/dashboard/GoalCompletionRate";
import StudentDashboardLayout from "@/modules.tsx/dashboard/student/DashboardLayout";

const StudentIdPage = () => {
  return (
    <>
      <StudentDashboardLayout>
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
              1
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
      </StudentDashboardLayout>
    </>
  );
};

export default StudentIdPage;
