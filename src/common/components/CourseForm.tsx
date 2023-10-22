import { Fragment } from "react";

const API = {
  course: [
    {
      OrderNumber: "20231003001",
      UserName: "蛋黃哥",
      CourseTitle: "進階 - 8週飲食建議",
      CourseStartDate: "2023/10/21",
      CourseEndDate: "2023/10/22",
      CourseState: 0, //0 未開始 1進行中 2已結束
      IsQuest: false,
    },
  ],
  pagination: {
    current_page: 1,
    total_pages: 1,
  },
};

const tableList = {
  nutritionist: {
    listName: "我的學員列表",
    titles: [
      "訂單編號",
      "學員/課程名稱",
      "課程期間",
      "狀態",
      "飲食生活問券",
      "評價",
    ],
  },
  student: {
    listName: "我的課程列表",
    titles: [
      "營養師",
      "課程名稱",
      "課程期間",
      "狀態",
      "飲食生活問券",
      "課程開始",
    ],
  },
};

const CourseForm = () => {
  return (
    <>
      <h2>我的學員列表</h2>
      <table className="mx-auto w-full mt-24">
        <thead>
          <tr>
            {tableList.nutritionist.titles.map((title, index) => (
              <th key="index">{title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="border">
          <tr>
            <td className="font-bold">蛋黃哥</td>
            <td>進階 - 8週飲食建議</td>
            <td>-</td>
            <td>未開始</td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">未填寫</span>
            </td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">開始</span>
            </td>
          </tr>
          <tr>
            <td className="font-bold">P助</td>
            <td>小資 - 4週飲食建議</td>
            <td>2023.10.01-2023.11.25</td>
            <td>進行中</td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">已填寫</span>
            </td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">開始</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CourseForm;
