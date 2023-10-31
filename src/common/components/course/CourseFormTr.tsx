import { useDispatch } from "react-redux";
import { ButtonClass, Course } from "./CourseForm";
import { FC, ReactNode } from "react";
import { showModal } from "@/common/redux/features/showModal";
import Link from "next/link";

interface CourseFormTrProps {
  course: Course;
  ID: string;
  buttonClass: ButtonClass;
  comment: ReactNode;
  Token: string;
}

const CourseFormTr: FC<CourseFormTrProps> = ({
  course,
  ID,
  buttonClass,
  comment,
  Token,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <td className="text-14">{course.OrderNumber}</td>
      <td>
        <span className="border-b border-black-950">
          <Link href={`student-list/${course.Id}`}>
            {course.UserName ? course.UserName : course.Title}/
            {course.CourseName}
          </Link>
        </span>
      </td>
      <td>
        {course.CourseStartDate}-{course.CourseEndDate}
      </td>
      <td>
        <span
          className={`cusCourseStatus ${
            course.CourseState === "未開始"
              ? "before:bg-black-300"
              : course.CourseState === "進行中"
              ? "before:bg-primary-300"
              : "before:bg-black-700"
          }`}
        >
          {course.CourseState}
        </span>
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
      <td>
        {comment ? (
          comment
        ) : course.CourseState === "未開始" && course.IsQuest ? (
          <button
            className="btn-cusWriteSecondary"
            onClick={() =>
              dispatch(showModal(["showCourseStartModal", { Token, course }]))
            }
          >
            開始
          </button>
        ) : (
          <button disabled className="btn-cusDisableWriteBlack">
            開始
          </button>
        )}
      </td>
    </>
  );
};

export default CourseFormTr;
