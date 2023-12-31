import courseTabs from "../../lib/dashboard/courseTabs";
import CourseFormTr from "./CourseFormTr";
import { useCourseListGetApiQuery } from "@/common/redux/service/course";
import { useDispatch } from "react-redux";
import { showModal } from "@/common/redux/features/showModal";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Dispatch } from "@reduxjs/toolkit";
import { showLoading } from "@/common/redux/features/loading";
import { AuthType, CourseType, PaginationType, Token } from "@/types/interface";

interface CourseFormProps {
  auth: AuthType;
}

interface BtnType {
  class: string;
  disable: boolean;
}

export interface ButtonClass {
  [key: string]: {
    IsQuest: {
      [key: string]: BtnType;
    };
    IsComment?: {
      true: BtnType;
      false: {
        courseProcess?: BtnType;
        courseOver?: BtnType;
      };
    };
    IsCourseStart?: {
      true: {
        courseProcess: BtnType;
        courseOver: BtnType;
      };
      false: {
        IsQuest: {
          true: BtnType;
          false: BtnType;
        };
      };
    };
  };
}

const btnBasicClass = "w-[90px]";

const buttonClass: ButtonClass = {
  nu: {
    IsQuest: {
      true: { class: `${btnBasicClass} btn-cusWritePrimary`, disable: false },
      false: { class: `${btnBasicClass} btn-cusWriteWhite`, disable: true },
    },
    IsCourseStart: {
      true: {
        courseProcess: {
          class: `${btnBasicClass} btn-cusWriteBgPrimary`,
          disable: true,
        },
        courseOver: {
          class: `${btnBasicClass} btn-cusDisableWriteBlack`,
          disable: true,
        },
      },
      false: {
        IsQuest: {
          true: {
            class: `${btnBasicClass} btn-cusWriteSecondary`,
            disable: false,
          },
          false: {
            class: `${btnBasicClass} btn-cusWriteWhite`,
            disable: true,
          },
        },
      },
    },
  },
  user: {
    IsQuest: {
      true: {
        class: `${btnBasicClass} btn-cusDisableWriteBlack`,
        disable: true,
      },
      false: {
        class: `${btnBasicClass} btn-cusWriteSecondary`,
        disable: false,
      },
    },
    IsComment: {
      true: {
        class: `${btnBasicClass} btn-cusDisableWriteBlack`,
        disable: true,
      },
      false: {
        courseProcess: {
          class: `${btnBasicClass} btn-cusWriteWhite`,
          disable: true,
        },
        courseOver: {
          class: `${btnBasicClass} btn-cusWriteSecondary`,
          disable: false,
        },
      },
    },
  },
};

const checkCommentClass = (
  course: CourseType,
  ID: string,
  buttonClass: ButtonClass,
  dispatch: Dispatch,
  Token: Token
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
      course.CourseState === "結束" ? (
        <button
          disabled={buttonClass[ID].IsComment?.false.courseOver!.disable}
          className={buttonClass[ID].IsComment?.false.courseOver!.class}
          onClick={() =>
            dispatch(
              showModal([
                "showCommentAddModal",
                { Token: Token, Course: course },
              ])
            )
          }
        >
          未評價
        </button>
      ) : (
        <button
          disabled={buttonClass[ID].IsComment?.false.courseProcess!.disable}
          className={buttonClass[ID].IsComment?.false.courseProcess!.class}
        >
          未評價
        </button>
      );
  }
  return comment;
};

const CourseForm: FC<CourseFormProps> = ({ auth }) => {
  const { Token, UserCurrentStatus } = auth;
  const [showPage, setShowPage] = useState<PaginationType>({
    Current_page: 1,
    Total_pages: 1,
  });
  const [renderData, setRenderData] = useState<CourseType[] | null>(null);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useCourseListGetApiQuery({
    Token: Token,
    UserCurrentStatus: UserCurrentStatus,
    PageId: showPage.Current_page,
  });

  const ID = UserCurrentStatus;
  const IDTabs = courseTabs[ID];
  const routeListPage =
    UserCurrentStatus === "user" ? "course-list" : "student-list";

  const prevPage = showPage.Current_page - 1;
  const nextPage = showPage.Current_page + 1;

  useEffect(() => {
    if (isLoading) {
      dispatch(showLoading(true));
      return;
    }
    if (data) {
      dispatch(showLoading(false));
      setRenderData(data.Data);
      setShowPage(data.Pagination);
    }
    if (error) {
      return;
    }
  }, [data, error, isLoading, dispatch]);

  if (!renderData) return;

  return (
    <div className="py-20 container lg:py-0 flex flex-col justify-between h-full">
      <h2 className="cusPrimaryTitle">{IDTabs.listName}</h2>

      {/* 電腦版 */}
      <div className="hidden lg:block grow">
        <table className="w-full mt-24 py-20 px-10 bg-white rounded-15">
          <thead>
            <tr>
              {IDTabs.tabs.map((tab, index) => (
                <th key={index} className="font-normal">
                  {tab}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {renderData.map((course: CourseType, index: number) => {
              return (
                <tr key={index}>
                  <CourseFormTr
                    course={course}
                    key={course.OrderNumber}
                    ID={ID}
                    buttonClass={buttonClass}
                    comment={checkCommentClass(
                      course,
                      ID,
                      buttonClass,
                      dispatch,
                      Token
                    )}
                    Token={Token}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 手機版 */}
      <ul className="px-20 container flex flex-col gap-32 mt-32 lg:hidden">
        {renderData.map((course: CourseType, index: number) => {
          const comment = checkCommentClass(
            course,
            ID,
            buttonClass,
            dispatch,
            Token
          );
          const notStartTextClass =
            course.CourseState === "開始" ? "text-black-300" : "text-black-950";
          const isQuestString: "true" | "false" = course.IsQuest
            ? "true"
            : "false";

          return (
            <li
              key={index}
              className="flex flex-col border border-primary-400 p-20 gap-12 rounded-5"
            >
              {ID === "user" && (
                <div className="flex justify-between items-center">
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
                </div>
              )}
              <h3 className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                {course.CourseState === "開始" ? (
                  <span className="text-18 text-black-300 w-fit font-bold lg:text-16">
                    {course.UserName ? course.UserName : course.Title}/
                    {course.CourseName}
                  </span>
                ) : (
                  <span className="text-18 border-b w-fit border-black-950 font-bold lg:text-16">
                    <Link href={`${routeListPage}/${course.Id}`}>
                      {course.UserName ? course.UserName : course.Title}/
                      {course.CourseName}
                    </Link>
                  </span>
                )}
              </h3>
              <p className={`text-14 ${notStartTextClass}`}>
                訂單編號：{course.OrderNumber}
              </p>
              <p className={`text-14 ${notStartTextClass}`}>
                課程時間：{course.CourseStartDate}-{course.CourseEndDate}
              </p>
              <hr className="border-primary-400" />
              <div className="text-14">
                飲食生活問卷：
                {course.IsQuest ? (
                  buttonClass[ID].IsQuest.true.disable ? (
                    <button
                      disabled={buttonClass[ID].IsQuest.true.disable}
                      className={buttonClass[ID].IsQuest.true.class}
                    >
                      已填寫
                    </button>
                  ) : (
                    <Link
                      href={`${routeListPage}/${course.Id}/life-survey`}
                      className={`${buttonClass[ID].IsQuest.true.class} inline-block text-center`}
                    >
                      已填寫
                    </Link>
                  )
                ) : buttonClass[ID].IsQuest.true.disable ? (
                  <Link
                    href={`${routeListPage}/${course.Id}/life-survey`}
                    className={`${buttonClass[ID].IsQuest.false.class} inline-block text-center`}
                  >
                    未填寫
                  </Link>
                ) : (
                  <button
                    disabled={buttonClass[ID].IsQuest.false.disable}
                    className={buttonClass[ID].IsQuest.false.class}
                  >
                    未填寫
                  </button>
                )}
              </div>
              <div className="text-14">
                {ID === "user" ? "評價" : "課程狀態"}：
                {comment ? (
                  comment
                ) : (
                  <button
                    className={
                      course.CourseState === "開始"
                        ? buttonClass[ID].IsCourseStart?.false.IsQuest[
                            isQuestString
                          ].class
                        : course.CourseState === "進行中"
                        ? buttonClass[ID].IsCourseStart?.true.courseProcess
                            .class
                        : buttonClass[ID].IsCourseStart?.true.courseOver.class
                    }
                    onClick={() =>
                      course.CourseState === "開始" &&
                      course.IsQuest &&
                      dispatch(
                        showModal(["showCourseStartModal", { Token, course }])
                      )
                    }
                    disabled={
                      course.CourseState === "開始"
                        ? buttonClass[ID].IsCourseStart?.false.IsQuest[
                            isQuestString
                          ].disable
                        : course.CourseState === "進行中"
                        ? buttonClass[ID].IsCourseStart?.true.courseProcess
                            .disable
                        : buttonClass[ID].IsCourseStart?.true.courseOver.disable
                    }
                  >
                    {course.CourseState}
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
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

export default CourseForm;
