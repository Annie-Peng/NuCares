import DashboardContainer from "@/common/components/DashboardContainer";
import NutritionistIntroForm from "@/modules/dashboard/nutritionist/workshop/NutritionistIntroForm";
import Link from "next/link";

const NutritionistIntroPage = () => {
  return (
    <>
      <p className="text-left border-b w-fit">返回我的營養師專頁目錄</p>
      <DashboardContainer title="關於我">
        <NutritionistIntroForm />
      </DashboardContainer>
    </>
  );
};

export default NutritionistIntroPage;
