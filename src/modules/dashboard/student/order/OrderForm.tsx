import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Auth } from "@/types/interface";

const Tabs = ["時間", "訂單編號", "營養師/課程名稱", "金額", "付款方案"];

interface OrderFormProps {
  auth: Auth;
}

const OrderForm: FC<OrderFormProps> = ({ auth }) => {
  const { Token } = auth;
  const [showPage, setShowPage] = useState<Record<string, number>>({
    Current_page: 1,
    Total_pages: 1,
  });

  const prevPage = showPage.Current_page - 1;
  const nextPage = showPage.Current_page + 1;

  return (
    <div className="cusMContainer flex flex-col justify-between h-full">
      <h2 className="cusPrimaryTitle">訂單紀錄</h2>
      {/* 電腦版 */}
      <div className="hidden lg:block grow">
        <table className="w-full mt-24 py-20 px-10 bg-white rounded-15">
          <thead>
            <tr>
              {Tabs.map((tab, index) => (
                <th key={index}>{tab}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <td>2023/03/18</td>
            <td>20231001001</td>
            <td>
              <span className="border-b border-black-950 overflow-hidden whitespace-nowrap text-ellipsis">
                陳瘦瘦/進階 - 8週飲食建議
              </span>
            </td>
            <td>NT$ 7,000</td>
            <td>信用卡</td>
          </tbody>
        </table>
      </div>

      {/* 手機版
      <ul className="lg:hidden container flex flex-col gap-32 mt-32">
        {renderData.map((course: Course, index: number) => {
          const comment = checkCommentClass(course, ID, buttonClass);

          return (
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
                {comment ? (
                  comment
                ) : course.CourseState === "未開始" && course.IsQuest ? (
                  <button
                    className="btn-cusWriteSecondary"
                    onClick={() =>
                      dispatch(
                        showModal(["showCourseStartModal", { Token, course }])
                      )
                    }
                  >
                    開始
                  </button>
                ) : (
                  <button disabled className="btn-cusDisableWriteBlack">
                    開始
                  </button>
                )}
              </div>

              <h3 className="border-b w-fit border-black-950 font-bold">
                <Link href={`${routeListPage}/${course.Id}`}>
                  {course.UserName ? course.UserName : course.Title}/
                  {course.CourseName}
                </Link>
              </h3>
              <p className="text-14">訂單編號：{course.OrderNumber}</p>
              <p className="text-14">
                課程時間：{course.CourseStartDate}-{course.CourseEndDate}
              </p>
              <hr className="border-primary-400" />
              <div className="text-14">
                飲食生活問券：
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
              </div>
            </li>
          );
        })}
      </ul> */}
      <nav className="mx-auto mt-20">
        <ul className="flex gap-8">
          <li className="py-6 px-16 rounded-[2px] border border-black-300 text-black-300 bg-white">
            <button
              type="button"
              onClick={() => {
                prevPage > 0 &&
                  setShowPage({ ...showPage, Current_page: prevPage });
              }}
            >
              {"<"}
            </button>
          </li>
          <li className="py-6 px-10 rounded-[2px] border border-primary-500 text-white bg-primary-300 bold text-14">
            {showPage.Current_page}
          </li>
          <li className="py-6 px-16 rounded-[2px] border border-black-300 text-black-300 bg-white">
            <button
              type="button"
              onClick={() => {
                if (
                  nextPage === showPage.Total_pages ||
                  nextPage < showPage.Total_pages
                ) {
                  setShowPage({ ...showPage, Current_page: nextPage });
                }
              }}
            >
              {">"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrderForm;
