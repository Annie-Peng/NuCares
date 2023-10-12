import NutritionistDashboardLayout from "@/modules.tsx/dashboard/nutritionist/DashboardLayout";
import Link from "next/link";

const NutritionistInfoPage = () => {
  return (
    <NutritionistDashboardLayout>
      <div className="flex justify-center items-center h-full gap-20">
        <h3 className="btn-cusSecondary py-[52px] w-full rounded-15 text-24 font-bold">
          <Link href="workshop/intro">關於我</Link>
        </h3>
        <h3 className="btn-cusSecondary py-[52px] w-full rounded-15 text-24 font-bold">
          <Link href="workshop/courses">課程方案</Link>
        </h3>
      </div>
    </NutritionistDashboardLayout>
  );
};

export default NutritionistInfoPage;
