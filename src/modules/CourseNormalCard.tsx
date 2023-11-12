import { PlanType } from "@/pages/nutritionist-list/[nutritionistId]";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { FC } from "react";

interface CourseNormalCardProps {
  plan: PlanType;
}

const CourseNormalCard: FC<CourseNormalCardProps> = ({ plan }) => {
  const router = useRouter();
  const Token = getCookie("Token");
  return (
    <div className="border border-primary-200 p-20 rounded-15 flex flex-col gap-12 relative">
      <h4 className="text-20 font-bold">{plan.CourseName}</h4>
      <p className="text-14 -mt-4">課程期間：{plan.CourseWeek}週</p>
      <h5 className="text-[28px] font-bold">NT$ {plan.CoursePrice}</h5>
      <p className="text-14 min-h-[58px]">{plan.Detail}</p>
      {plan.Tag !== "無" && (
        <div className="absolute top-18 -right-8 px-8 py-4 bg-tertiary-400 text-white font-bold text-12">
          {plan.Tag}
        </div>
      )}
      <button
        type="button"
        onClick={() => {
          if (!Token) {
            router.push({
              pathname: "/login",
            });
          } else {
            router.push({
              pathname: "/payment",
              query: { planId: plan.Id },
            });
          }
        }}
        className="btn-cusSecondary w-full py-8"
      >
        購買
      </button>
    </div>
  );
};

export default CourseNormalCard;
