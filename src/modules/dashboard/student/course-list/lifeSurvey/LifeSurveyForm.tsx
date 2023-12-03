import lifeSurveyData from "@/common/lib/dashboard/lifeSurveyData";
import { commonErrMsgClass } from "@/common/lib/errMsg/commonErrMsg";
import { storeLifeSurvey } from "@/common/redux/features/lifeSurvey";
import Image from "next/legacy/image";
import lifeSurveyStep1 from "public/images/dashboard/student/life-survey/lifeSurveyStep1.svg";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

interface LifeSurveyFormProps {
  setCurrentPhase: (currentPhase: number) => void;
}

const LifeSurveyForm: FC<LifeSurveyFormProps> = ({ setCurrentPhase }) => {
  const showQRange = [1, 3];

  const renderLifeSurveyData = lifeSurveyData.filter((question, index) => {
    return index + 1 >= showQRange[0] && index + 1 <= showQRange[1];
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, string>>();

  const onSubmit = async (data: Record<string, string>) => {
    dispatch(storeLifeSurvey(data));
    setCurrentPhase(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-16 h-[45px] relative">
        <Image src={lifeSurveyStep1} layout="fill" alt="lifeSurveyStep1" />
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
          <button
            type="submit"
            className="block w-full btn-cusSecondary py-8 mx-auto mt-[60px] lg:w-[278px]"
          >
            下一步
          </button>
        </div>
      </div>
    </form>
  );
};

export default LifeSurveyForm;
