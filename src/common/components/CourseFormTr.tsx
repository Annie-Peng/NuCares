import { CourseProps } from "@/types/interface";
import { FC } from "react";

interface CourseFormTrProps {
  course: CourseProps;
  key: string;
}

const CourseFormTr: FC<CourseFormTrProps> = ({ course, key }) => {
  return (
    <tr key={key}>
      <td className="text-14">{course.OrderNumber}</td>
      <td>
        <span className="border-b border-black-950">{course.UserName}</span>
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
          <button className="btn-cusWritePrimary">已填寫</button>
        ) : (
          <button disabled className="btn-cusWriteBlack">
            未填寫
          </button>
        )}
      </td>
      <td>
        {course.CourseState === "未開始" ? (
          <button className="w-full btn-cusWriteSecondary">開始</button>
        ) : (
          <button disabled className="w-full  btn-cusDisableWriteBlack">
            開始
          </button>
        )}
      </td>
    </tr>
  );
};

export default CourseFormTr;
