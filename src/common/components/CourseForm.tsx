import { Fragment } from "react";
import courseTabs from "../lib/dashboard/courseTabs";
import CourseFormTr from "./CourseFormTr";

const API = {
  courses: [
    {
      OrderNumber: "20231003001",
      UserName: "蛋黃哥",
      CourseTitle: "進階 - 8週飲食建議",
      CourseStartDate: "2023.10.21",
      CourseEndDate: "2023.10.22",
      CourseState: "未開始", //0 未開始 1進行中 2已結束
      IsQuest: false,
    },
    {
      OrderNumber: "20231003001",
      UserName: "蛋黃哥",
      CourseTitle: "進階 - 8週飲食建議",
      CourseStartDate: "",
      CourseEndDate: "",
      CourseState: "進行中", //0 未開始 1進行中 2已結束
      IsQuest: false,
    },
  ],
  pagination: {
    current_page: 1,
    total_pages: 1,
  },
};

const CourseForm = () => {
  return (
    <div className="cusMContainer">
      <h2 className="cusPrimaryTitle">{courseTabs.nutritionist.listName}</h2>

      {/* 電腦版 */}
      <div className="hidden lg:block">
        <table className="w-full mt-24 py-20 px-10 bg-white rounded-15">
          <thead>
            <tr>
              {courseTabs.nutritionist.tabs.map((tab, index) => (
                <th key="index">{tab}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {API.courses.map((course) => {
              return <CourseFormTr course={course} key={course.OrderNumber} />;
            })}
          </tbody>
        </table>
      </div>

      {/* 手機版 */}
      <ul className="lg:hidden container flex flex-col gap-32 mt-32">
        {API.courses.map((course, index) => (
          <li
            key={index}
            className="flex flex-col border border-primary-400 p-20 gap-12 rounded-5"
          >
            <div className="flex justify-between items-center">
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
              {course.CourseState === "未開始" ? (
                <button className=" btn-cusWriteSecondary">課程開始</button>
              ) : (
                <button disabled className="  btn-cusDisableWriteBlack">
                  課程開始
                </button>
              )}
            </div>
            <h3 className="border-b w-fit border-black-950 font-bold">
              {course.UserName}/{course.CourseTitle}
            </h3>
            <p className="text-14">訂單編號：{course.OrderNumber}</p>
            <p className="text-14">
              課程時間：{course.CourseStartDate}-{course.CourseEndDate}
            </p>
            <hr className="border-primary-400" />
            <div className="text-14">
              飲食生活問券：
              {course.IsQuest ? (
                <button className="btn-cusWritePrimary">已填寫</button>
              ) : (
                <button disabled className="btn-cusWriteBlack">
                  未填寫
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseForm;
