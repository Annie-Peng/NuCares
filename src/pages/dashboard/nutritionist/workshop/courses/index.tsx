import DashboardOuterContainer from "@/common/components/DashboardOuterContainer";
import NutritionistDashboardLayout from "@/modules.tsx/dashboard/nutritionist/DashboardLayout";
import CourseBigCard from "@/modules/dashboard/nutritionist/workshop/CourseBigCard";
import Link from "next/link";

const NutritionistCoursePage = () => {
  return (
    <NutritionistDashboardLayout>
      <p className="text-left border-b w-fit">返回我的營養師專頁目錄</p>
      <DashboardOuterContainer title="課程方案">
        <ul className="flex flex-col gap-32">
          <li>
            <CourseBigCard />
          </li>
          <li>
            <CourseBigCard />
          </li>
        </ul>
        <img
          width="24"
          height="24"
          className="absolute top-12 right-20"
          alt="edit"
        />
      </DashboardOuterContainer>
    </NutritionistDashboardLayout>
  );
};

export default NutritionistCoursePage;
