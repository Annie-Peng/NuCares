import { CourseProps } from "@/types/interface";

const CourseFormTr = ({ course, key, ID, buttonClass, comment }) => {
  return (
    <tr key={key}>
      <td className="text-14">{course.OrderNumber}</td>
      <td>
        <span className="border-b border-black-950">
          {course.UserName ? course.UserName : course.Title}/
          {course.CourseTitle}
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
        ) : course.CourseState === "未開始" ? (
          <button className="btn-cusWriteSecondary">開始</button>
        ) : (
          <button disabled className="btn-cusDisableWriteBlack">
            開始
          </button>
        )}
      </td>
    </tr>
  );
};

export default CourseFormTr;
