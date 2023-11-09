import { FC } from "react";
import { CourseType } from "./NutritionistCard";

interface CourseMiniCardProps {
  course: CourseType;
}

const CourseMiniCard: FC<CourseMiniCardProps> = ({ course }) => {
  return (
    <div className="border border-primary-200 p-20 rounded-15 relative">
      <h4>{course.CourseName}</h4>
      <p className="text-14 mt-4">共{course.CourseWeek}週</p>
      <h5 className="text-22 font-normal mt-12">NT$ {course.CoursePrice}</h5>
      {course.Tag === "無" ? (
        ""
      ) : (
        <div className="absolute top-18 -right-8 px-8 py-4 bg-tertiary-400 text-white font-bold text-12">
          {course.Tag}
        </div>
      )}
    </div>
  );
};

export default CourseMiniCard;
