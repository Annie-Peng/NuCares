import DashboardOuterContainer from "@/common/components/DashboardOuterContainer";
import NutritionistDashboardLayout from "@/modules/dashboard/nutritionist/DashboardLayout";
import NutritionistIntroForm from "@/modules/dashboard/nutritionist/workshop/NutritionistIntroForm";
import Link from "next/link";

const NutritionistIntroPage = () => {
  return (
    <NutritionistDashboardLayout>
      <p className="text-left border-b w-fit">返回我的營養師專頁目錄</p>
      <DashboardOuterContainer title="關於我">
        <NutritionistIntroForm />
      </DashboardOuterContainer>
    </NutritionistDashboardLayout>
  );
};

export default NutritionistIntroPage;
