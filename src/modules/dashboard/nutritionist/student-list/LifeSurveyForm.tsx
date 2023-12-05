import lifeSurveyData, {
  lifeSurveyTabs,
} from "@/common/lib/dashboard/lifeSurveyData";
import { Gender } from "@/types/interface";
import Image from "next/legacy/image";
import Link from "next/link";
import { FC, Fragment } from "react";

interface LifeSurveyFormProps {
  UserCurrentStatus: string;
  studentData: {
    Age: number;
    Gender: Gender;
    UserName: string;
    Answers: Record<string, string[]>[];
  };
}

const LifeSurveyForm: FC<LifeSurveyFormProps> = ({
  UserCurrentStatus,
  studentData,
}) => {
  const routeListPage =
    UserCurrentStatus === "user"
      ? "/dashboard/student/course-list"
      : "/dashboard/nutritionist/student-list";

  return (
    <div className="container">
      <Link
        href={routeListPage}
        className="before:content-['<'] before:mr-4 text-left border-black-950 border-b w-fit hidden lg:block"
      >
        返回我的課程列表
      </Link>
      <h3 className="cusPrimaryTitle mt-20">學員飲食生活問卷</h3>
      <div className="container text-left flex flex-col cusDashboardInnerContainer mt-32 p-20">
        <ul className="flex gap-24 px-20">
          <li>姓名：{studentData.UserName}</li>
          <li>性別：{studentData.Gender}</li>
          <li>年齡：{studentData.Age}</li>
        </ul>
        <div className="mt-12 flex flex-col gap-20">
          {studentData.Answers.map((answer, aIndex) => {
            const questionFieldTitle = lifeSurveyTabs[aIndex].title;
            let questionNumSet: string[] = [];
            let questionDataSet: Record<
              string,
              string | string[] | undefined
            >[] = [];
            let answerValueSet: string[][] = [];
            Object.entries(answer).forEach(([key, value]) => {
              const questionNum = key.split("Question")[1];
              questionNumSet.push(questionNum);
              questionDataSet.push(lifeSurveyData[Number(questionNum) - 1]);
              answerValueSet.push(value);
            });
            return (
              <div key={aIndex} className="flex flex-col border rounded-15">
                <h4 className="py-12 px-16 cusPrimaryTitle text-18 after:content-[''] after:block after:h-[7px] after:bg-primary-100 after:-mt-10">
                  {questionFieldTitle}
                </h4>
                <div className="p-20">
                  {questionDataSet.map((question, qIndex) => {
                    return (
                      <div key={`field${aIndex}-question${qIndex}`}>
                        {qIndex > 0 && <hr className="my-20" />}
                        <h5 className="font-bold">{question.title}</h5>
                        <ul className="mt-12">
                          {answerValueSet[qIndex]?.map((value, vIndex) => {
                            const hasValue = value !== "";

                            return (
                              <li
                                key={`field${aIndex}-question${qIndex}-value${vIndex}`}
                                className="flex items-center gap-8"
                              >
                                {hasValue ? (
                                  <>
                                    {question.method === "single-choice" && (
                                      <Image
                                        src="/images/dashboard/nutritionist/course/life-survey/radio.svg"
                                        width={20}
                                        height={20}
                                        alt="radio"
                                      />
                                    )}
                                    {question.method === "multiple-choices" && (
                                      <Image
                                        src="/images/dashboard/nutritionist/course/life-survey/checked.svg"
                                        width={20}
                                        height={20}
                                        alt="checked"
                                      />
                                    )}
                                    {value}
                                  </>
                                ) : (
                                  <p className="text-black-300">無填寫</p>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LifeSurveyForm;
