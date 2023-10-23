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
    <>
      <h2 className="cusPrimaryTitle">{courseTabs.nutritionist.listName}</h2>
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
    </>
  );
};

export default CourseForm;
