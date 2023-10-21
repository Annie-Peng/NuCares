import DashboardLayout from "@/common/components/DashboardLayout";
import DashboardOuterContainer from "@/common/components/DashboardOuterContainer";
import NutritionistIntroForm from "@/modules/dashboard/nutritionist/workshop/NutritionistIntroForm";
import Link from "next/link";

const NutritionistIntroPage = () => {
  return (
    <DashboardLayout>
      <p className="text-left border-b w-fit">返回我的營養師專頁目錄</p>
      <DashboardOuterContainer title="關於我">
        <NutritionistIntroForm />
      </DashboardOuterContainer>
    </DashboardLayout>
  );
};

export default NutritionistIntroPage;
