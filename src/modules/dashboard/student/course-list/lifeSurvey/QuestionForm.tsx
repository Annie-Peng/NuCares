import lifeSurveyData, {
  lifeSurveyTabs,
} from "@/common/lib/dashboard/lifeSurveyData";
import { commonErrMsgClass } from "@/common/lib/errMsg/commonErrMsg";
import {
  selectLifeSurvey,
  storeLifeSurvey,
} from "@/common/redux/features/lifeSurvey";
import { useLifeSurveyPostApiMutation } from "@/common/redux/service/survey";
import { Token } from "@/types/interface";
import Image from "next/legacy/image";
import { FC, Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface QuestionFormProps {
  setFinishPhase: (finishPhase: boolean) => void;
  currentPhase: number;
  setCurrentPhase: (currentPhase: number) => void;
  CourseId: string;
  Token: Token;
}

const QuestionForm: FC<QuestionFormProps> = ({
  setFinishPhase,
  currentPhase,
  setCurrentPhase,
  CourseId,
  Token,
}) => {
  const { title, image, range } = lifeSurveyTabs[currentPhase - 1];
  const lifeSurveyLastPage = lifeSurveyTabs.length;

  const renderLifeSurveyData = lifeSurveyData.filter((question, index) => {
    return index + 1 >= range[0] && index + 1 <= range[1];
  });

  const dispatch = useDispatch();

  const [lifeSurveyPostApi] = useLifeSurveyPostApiMutation();

  const submitDataSet = useSelector(selectLifeSurvey);

  const [isSurveyStored, setIsSurveyStored] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, string>>();

  const onSubmit = (data: Record<string, string>) => {
    dispatch(storeLifeSurvey(data));

    if (currentPhase !== lifeSurveyLastPage) {
      setCurrentPhase(currentPhase + 1);
      return;
    }

    setIsSurveyStored(true);
  };

  useEffect(() => {
    const submitSurvey = async () => {
      try {
        let formattedDataSet: Record<string, Record<string, string[]>> = {
          Question: {},
        };
        Object.entries(submitDataSet).forEach(([key, value]) => {
          if (typeof value === "string") {
            formattedDataSet.Question[key] = Array(value);
          } else {
            formattedDataSet.Question[key] = value;
          }
        });
        const result = await lifeSurveyPostApi({
          CourseId,
          Token,
          body: formattedDataSet,
        });
        setFinishPhase(true);
      } catch (error) {
        return;
      }
    };

    if (isSurveyStored) {
      submitSurvey();
    }
  }, [isSurveyStored]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-16 h-[45px] relative hidden lg:block">
        <Image src={image.lg} layout="fill" alt={image.lg} />
      </div>
      <div className="cusDashboardInnerContainer">
        <div className="mx-auto lg:max-w-[568px]">
          <h3 className="text-center text-20 font-bold">{title}</h3>
          {renderLifeSurveyData.map((question, index) => {
            const questionName = `Question${String(range[0] + index)}`;
            const questionErr = errors[questionName];
            return (
              <Fragment key={questionName}>
                {index > 0 && <hr className="mt-28" />}
                <h4 className={`font-bold mt-28`}>{question.title}</h4>
                <ul className="mt-12 flex flex-col gap-8">
                  {question.choices.map((choice, cIndex) => {
                    const questionId = `${questionName}-${String(cIndex)}`;
                    return (
                      <li key={questionId}>
                        <label htmlFor={questionId} className="gap-8 flex">
                          {question.method === "single-choice" && (
                            <>
                              <input
                                type="radio"
                                id={questionId}
                                className="hidden"
                                value={choice}
                                {...register(questionName, {
                                  required: question.required,
                                })}
                              />
                              <span className="w-20 h-20 inline-block border border-black-950 rounded-50 align-middle" />
                            </>
                          )}
                          {question.method === "multiple-choices" && (
                            <input
                              type="checkbox"
                              id={questionId}
                              className="form-checkbox w-20 h-20 bg-transparent text-black-500 focus:ring-offset-0 focus:ring-0"
                              value={choice}
                              {...register(questionName, {
                                required: question.required,
                              })}
                            />
                          )}
                          {question.method === "input" && (
                            <input
                              type="type"
                              id={questionId}
                              className="h-40 w-full"
                              {...register(questionName, {
                                required: question.required,
                              })}
                            />
                          )}
                          {choice}
                        </label>
                      </li>
                    );
                  })}
                </ul>
                {questionErr && (
                  <p className={commonErrMsgClass}>{questionErr.message}</p>
                )}
              </Fragment>
            );
          })}
          <div className="w-full mt-[60px] text-center">
            {currentPhase !== 1 && (
              <button
                type="button"
                className="btn-cusWritePrimary w-full !py-8 lg:w-[278px]"
                onClick={() => setCurrentPhase(currentPhase - 1)}
              >
                上一步
              </button>
            )}
            <button
              type="submit"
              className="mt-10 btn-cusSecondary w-full py-8 lg:ml-10 lg:w-[278px] lg:mt-0"
            >
              {currentPhase !== lifeSurveyLastPage
                ? "下一步"
                : "完成，提交問卷"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default QuestionForm;
