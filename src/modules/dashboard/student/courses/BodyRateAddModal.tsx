import TitleModal from "@/common/components/modals/TitleModal";
import bodyRateAdd from "@/common/lib/dashboard/dietary-record/bodyRate";
import { closeModal } from "@/common/redux/features/showModal";
import { useBodyInfoPostApiMutation } from "@/common/redux/service/courseRecord";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

interface BodyRateAddModalProps {
  data: {
    Token: string;
    CourseId: string;
  };
}

export interface FormInput {
  Height: string;
  Weight: string;
  BodyFat: string;
  VisceralFat: string;
  SMM: string;
  Bmi: string;
  Bmr: string;
}

const BodyRateAddModal: FC<BodyRateAddModalProps> = ({ data }) => {
  const [bodyInfoPostApi] = useBodyInfoPostApiMutation();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (formData) => {
    try {
      const result = await bodyInfoPostApi({
        Token: data.Token,
        CourseId: data.CourseId,
        body: formData,
      }).unwrap();
      dispatch(closeModal("showBodyRateAddModal"));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TitleModal title="今天身體數值" modal="showBodyRateAddModal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="mx-auto flex flex-wrap gap-32 my-32 text-center justify-center lg:max-w-none lg:flex-nowrap lg:my-[36px]">
          {bodyRateAdd.map((item, index) => (
            <li key={index} className="w-[110px]">
              <label className="relative block">
                <p className="bg-primary-400 text-white rounded-35">
                  {item.name}
                </p>
                <input
                  type="number"
                  className="w-full mt-8 pr-[48px]"
                  step="0.1"
                  {...register(`${item.enName as keyof FormInput}`, {
                    required: "*必填",
                  })}
                />
                <p className="absolute right-12 top-[43px] whitespace-nowrap text-black-400">
                  {item.unit}
                </p>
              </label>
              <p className="text-left text-secondary-600 mt-4">
                {errors[item.enName as keyof FormInput]?.message}
              </p>
            </li>
          ))}
        </ul>
        <button
          type="submit"
          className="btn-cusSecondary p-8 w-[240px] block mx-auto lg:w-[270px]"
        >
          新增
        </button>
      </form>
    </TitleModal>
  );
};

export default BodyRateAddModal;
