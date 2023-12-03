import lifeSurveyData from "@/common/lib/dashboard/lifeSurveyData";
import { commonErrMsgClass } from "@/common/lib/errMsg/commonErrMsg";
import {
  selectLifeSurvey,
  storeLifeSurvey,
} from "@/common/redux/features/lifeSurvey";
import { useLifeSurveyPostApiMutation } from "@/common/redux/service/survey";
import { Token } from "@/types/interface";
import Image from "next/legacy/image";
import lifeSurveyStep3 from "public/images/dashboard/student/life-survey/lifeSurveyStep3.svg";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface LifeSurveyFormThirdPhaseProps {
  setCurrentPhase: (currentPhase: number) => void;
  CourseId: string;
  Token: Token;
}

const LifeSurveyFormThirdPhase: FC<LifeSurveyFormThirdPhaseProps> = ({
  setCurrentPhase,
  CourseId,
  Token,
}) => {
  console.log(CourseId);
  const showQRange = [9, 18];

  const renderLifeSurveyData = lifeSurveyData.filter((question, index) => {
    return index + 1 >= showQRange[0] && index + 1 <= showQRange[1];
  });

  const dispatch = useDispatch();

  const [lifeSurveyPostApi] = useLifeSurveyPostApiMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, string>>();

  const onSubmit = async (data: Record<string, string>) => {
    try {
      dispatch(storeLifeSurvey(data));
      const result = await lifeSurveyPostApi({
        CourseId,
        Token,
        body: submitData,
      });
      console.log(result);
      console.log(submitData);
    } catch (error) {
      console.log(error);
    }
  };

  const submitData = useSelector(selectLifeSurvey);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-16 h-[45px] relative">
        <Image src={lifeSurveyStep3} layout="fill" alt="lifeSurveyStep3" />
      </div>
      <div className="cusDashboardInnerContainer">
        <div className="max-w-[568px] mx-auto">
          <h3 className="text-center text-20 font-bold">個人/家族病史</h3>
          {renderLifeSurveyData.map((question, index) => {
            const optionName = `Option${String(showQRange[0] + index)}`;
            const optionErr = errors[optionName];
            return (
              <>
                {index > 0 && <hr className="mt-28" />}
                <h4 className={`font-bold mt-28`}>{question.title}</h4>
                <ul className="mt-12 flex flex-col gap-8">
                  {question.choices.map((choice, cIndex) => {
                    const optionId = `${optionName}-${String(cIndex)}`;
                    return (
                      <li key={cIndex} className="gap-8 flex">
                        {question.method === "single-choice" && (
                          <>
                            <input
                              type="radio"
                              id={optionId}
                              className="hidden"
                              value={choice}
                              {...register(optionName, {
                                required: question.required,
                              })}
                            />
                            <span className="w-20 h-20 inline-block border border-black-950 rounded-50 align-middle" />
                          </>
                        )}
                        {question.method === "multiple-choices" && (
                          <input
                            type="checkbox"
                            id={optionId}
                            className="form-checkbox bg-transparent text-black-500 focus:ring-offset-0 focus:ring-0"
                            value={choice}
                            {...register(optionName, {
                              required: question.required,
                            })}
                          />
                        )}
                        <label htmlFor={optionId}>{choice}</label>
                      </li>
                    );
                  })}
                </ul>
                {optionErr && (
                  <p className={commonErrMsgClass}>{optionErr.message}</p>
                )}
              </>
            );
          })}
          <div className="w-full mt-[60px] text-center">
            <button
              type="button"
              className="btn-cusWritePrimary w-full !py-8 lg:w-[278px]"
              onClick={() => setCurrentPhase(2)}
            >
              上一步
            </button>
            <button
              type="submit"
              className="mt-10 btn-cusSecondary w-full py-8 lg:ml-10 lg:w-[278px] lg:mt-0"
            >
              完成，提交問卷
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LifeSurveyFormThirdPhase;
