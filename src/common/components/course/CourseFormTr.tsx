import { useDispatch } from "react-redux";
import { ButtonClass } from "./CourseForm";
import { FC, ReactNode } from "react";
import { showModal } from "@/common/redux/features/showModal";
import Link from "next/link";
import { CourseType, Token } from "@/types/interface";

interface CourseFormTrProps {
  course: CourseType;
  ID: string;
  buttonClass: ButtonClass;
  comment: ReactNode;
  Token: Token;
}

const CourseFormTr: FC<CourseFormTrProps> = ({
  course,
  ID,
  buttonClass,
  comment,
  Token,
}) => {
  const dispatch = useDispatch();
  const routeListPage = ID === "user" ? "course-list" : "student-list";
  const notStartTextClass =
    course.CourseState === "開始" ? "text-black-300" : "text-black-950";
  return (
    <>
      <td className={`text-14 ${notStartTextClass}`}>{course.OrderNumber}</td>
      <td className="max-w-[200px]">
        <h3 className="overflow-hidden whitespace-nowrap text-ellipsis">
          {course.CourseState === "開始" ? (
            <span className="text-black-300">
              {course.UserName ? course.UserName : course.Title}/
              {course.CourseName}
            </span>
          ) : (
            <span className="border-b border-black-950">
              <Link href={`${routeListPage}/${course.Id}`}>
                {course.UserName ? course.UserName : course.Title}/
                {course.CourseName}
              </Link>
            </span>
          )}
        </h3>
      </td>
      <td className={`${notStartTextClass}`}>
        {course.CourseStartDate}-{course.CourseEndDate}
      </td>
      <td>
        {ID === "user" ? (
          <span
            className={`cusCourseStatus ${
              course.CourseState === "開始"
                ? "before:bg-black-300"
                : course.CourseState === "進行中"
                ? "before:bg-primary-300"
                : "before:bg-black-700"
            }`}
          >
            {course.CourseState}
          </span>
        ) : (
          <button
            className={
              course.CourseState === "開始"
                ? buttonClass[ID].IsCourseStart?.false.class
                : course.CourseState === "進行中"
                ? buttonClass[ID].IsCourseStart?.true.courseProcess.class
                : buttonClass[ID].IsCourseStart?.true.courseOver.class
            }
            onClick={() =>
              course.CourseState === "開始" &&
              dispatch(showModal(["showCourseStartModal", { Token, course }]))
            }
            disabled={
              course.CourseState === "開始"
                ? buttonClass[ID].IsCourseStart?.false.disable
                : course.CourseState === "進行中"
                ? buttonClass[ID].IsCourseStart?.true.courseProcess.disable
                : buttonClass[ID].IsCourseStart?.true.courseOver.disable
            }
          >
            {course.CourseState}
          </button>
        )}
      </td>
      <td>
        {course.IsQuest ? (
          <button
            disabled={buttonClass[ID].IsQuest.true.disable}
            className={buttonClass[ID].IsQuest.true.class}
          >
            已填寫
          </button>
        ) : (
          <button
            disabled={buttonClass[ID].IsQuest.false.disable}
            className={buttonClass[ID].IsQuest.false.class}
          >
            未填寫
          </button>
        )}
      </td>
      <td>{comment && comment}</td>
    </>
  );
};

export default CourseFormTr;
