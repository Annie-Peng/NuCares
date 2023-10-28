import courseTabs from "../../lib/dashboard/courseTabs";
import CourseFormTr from "./CourseFormTr";
import { useCourseListGetApiQuery } from "@/common/redux/service/course";
import { useSelector } from "react-redux";
import { selectAuth } from "@/common/redux/features/auth";
import CourseStartModal from "./CourseStartModal";

export interface Course {
  Title?: string;
  UserName?: string;
  CourseTitle: string;
  OrderNumber: string;
  CourseStartDate: string;
  CourseEndDate: string;
  CourseState: string;
  IsQuest: boolean;
  IsComment?: boolean;
}

interface Pagination {
  current_page: number;
  total_pages: number;
}

interface CourseAPI {
  courses: Course[];
  pagination: Pagination;
}

export interface ButtonClass {
  [key: string]: {
    IsQuest: {
      [key: string]: { class: string; disable: boolean };
    };
    IsComment?: {
      true: { class: string; disable: boolean };
      false: {
        courseProcess?: { class: string; disable: boolean };
        courseOver?: { class: string; disable: boolean };
      };
    };
  };
}

const API: CourseAPI = {
  courses: [
    {
      OrderNumber: "20231003001",
      UserName: "蛋黃哥",
      CourseTitle: "進階 - 8週飲食建議",
      CourseStartDate: "2023/10/21",
      CourseEndDate: "2023/10/22",
      CourseState: "已結束",
      IsQuest: true,
    },
    // {
    //   Title: "陳亮亮",
    //   CourseTitle: "體驗 - 1週飲食建議",
    //   OrderNumber: "20231121001",
    //   CourseStartDate: "2023/08/03",
    //   CourseEndDate: "2023/08/10",
    //   CourseState: "已結束",
    //   IsQuest: false,
    //   IsComment: false,
    // },
    // {
    //   Title: "陳亮亮",
    //   CourseTitle: "體驗 - 1週飲食建議",
    //   OrderNumber: "20231121001",
    //   CourseStartDate: "",
    //   CourseEndDate: "",
    //   CourseState: "已結束",
    //   IsQuest: true,
    //   IsComment: true,
    // },
    // {
    //   Title: "陳亮亮",
    //   CourseTitle: "體驗 - 1週飲食建議",
    //   OrderNumber: "20231121001",
    //   CourseStartDate: "",
    //   CourseEndDate: "",
    //   CourseState: "進行中",
    //   IsQuest: true,
    //   IsComment: false,
    // },
  ],
  pagination: {
    current_page: 1,
    total_pages: 1,
  },
};

const buttonClass: ButtonClass = {
  nutritionist: {
    IsQuest: {
      true: { class: "btn-cusWritePrimary", disable: false },
      false: { class: "btn-cusWriteBlack", disable: true },
    },
  },
  student: {
    IsQuest: {
      true: { class: "btn-cusDisableWriteBlack", disable: true },
      false: { class: "btn-cusWriteSecondary", disable: false },
    },
    IsComment: {
      true: { class: "btn-cusDisableWriteBlack", disable: true },
      false: {
        courseProcess: { class: "btn-cusDisableWriteBlack", disable: true },
        courseOver: { class: "btn-cusWriteSecondary", disable: false },
      },
    },
  },
};

const checkCommentClass = (
  course: Course,
  ID: string,
  buttonClass: ButtonClass
) => {
  let comment = null;

  if (course.IsComment) {
    comment = (
      <button
        disabled={buttonClass[ID].IsComment?.true.disable}
        className={buttonClass[ID].IsComment?.true.class}
      >
        已評價
      </button>
    );
  } else if (course.IsComment !== undefined) {
    comment =
      course.CourseState === "進行中" ? (
        <button
          disabled={buttonClass[ID].IsComment?.false.courseProcess!.disable}
          className={buttonClass[ID].IsComment?.false.courseProcess!.class}
        >
          未評價
        </button>
      ) : (
        <button
          disabled={buttonClass[ID].IsComment?.false.courseOver!.disable}
          className={buttonClass[ID].IsComment?.false.courseOver!.class}
        >
          未評價
        </button>
      );
  }
  return comment;
};

const CourseForm = () => {
  const { UserCurrentStatus } = useSelector(selectAuth);

  // const { data } = useCourseListGetApiQuery({
  //   UserCurrentStatus: "user",
  //   PageId: "1",
  // });

  // if (!data) {
  //   return "null";
  // }

  if (!UserCurrentStatus) return null;

  const ID = UserCurrentStatus;
  const IDTabs = courseTabs[ID];

  console.log(UserCurrentStatus);

  return (
    <div className="cusMContainer">
      <h2 className="cusPrimaryTitle">{IDTabs.listName}</h2>

      {/* 電腦版 */}
      <div className="hidden lg:block">
        <table className="w-full mt-24 py-20 px-10 bg-white rounded-15">
          <thead>
            <tr>
              {IDTabs.tabs.map((tab, index) => (
                <th key="index">{tab}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.Data.map((course, index) => {
              return (
                <tr key={index}>
                  <CourseFormTr
                    course={course}
                    key={course.OrderNumber}
                    ID={UserCurrentStatus}
                    buttonClass={buttonClass}
                    comment={checkCommentClass(course, ID, buttonClass)}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 手機版 */}
      <ul className="lg:hidden container flex flex-col gap-32 mt-32">
        {data.Data.map((course, index) => {
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
                ) : course.CourseState === "未開始" ? (
                  <button className="btn-cusWriteSecondary">開始</button>
                ) : (
                  <button disabled className="btn-cusDisableWriteBlack">
                    開始
                  </button>
                )}
              </div>
              <h3 className="border-b w-fit border-black-950 font-bold">
                {course.UserName ? course.UserName : course.Title}/
                {course.CourseTitle}
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
      </ul>
    </div>
  );
};

export default CourseForm;
