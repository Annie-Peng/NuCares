import { PlanType } from "@/types/interface";
import { FC } from "react";

interface CourseMiniCardProps {
  plan: PlanType;
}

const CourseMiniCard: FC<CourseMiniCardProps> = ({ plan }) => {
  return (
    <div className="border border-primary-200 p-20 rounded-15 relative">
      <h4>{plan.CourseName}</h4>
      <p className="text-14 mt-4">共{plan.CourseWeek}週</p>
      <h5 className="text-22 font-normal mt-12">NT$ {plan.CoursePrice}</h5>
      {plan.Tag !== "無" && (
        <div className="absolute top-18 -right-8 px-8 py-4 bg-tertiary-400 text-white font-bold text-12">
          {plan.Tag}
        </div>
      )}
    </div>
  );
};

export default CourseMiniCard;
