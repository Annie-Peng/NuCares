import {
  selectRegister,
  storeRegisterForm,
} from "@/common/redux/features/registerPhases";
import { useUserRegisterPostApiMutation } from "@/common/redux/service/register";
import Image from "next/image";
import { FC, ChangeEvent, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import logoPrimary from "public/images/logo-primary-300.svg";
import registerStep2 from "public/images/register/registerStep2.svg";
import { RegisterFormProps } from "@/pages/register";
import registerApiErrMsg from "@/common/lib/dashboard/errMsg/registerApiErrMsg";
import errInput from "@/common/helpers/errInput";

interface Data {
  [key: string]: string | File | number;
}

export interface SecondFormInput {
  [key: string]: string;
  UserName: string;
  Birthday: string;
  Gender: string;
  Phone: string;
  UserRule: string;
}

const RegisterFormSecondPhase: FC<RegisterFormProps> = ({
  setCurrentPhase,
}) => {
  const [color, setColor] = useState("text-black-200");
  const [birthdate, setBirthdate] = useState<Date | null>(null);

  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    control,
    trigger,
    setValue,
  } = useForm<SecondFormInput>();
  const registerData = useSelector(selectRegister);
  const [userRegisterPostApi] = useUserRegisterPostApiMutation();

  const onSubmit: SubmitHandler<SecondFormInput> = async (formData) => {
    dispatch(storeRegisterForm(formData));
    let newFormData = JSON.parse(JSON.stringify(registerData));
    Object.entries(formData).forEach(([key, value]) => {
      newFormData[key] = value;
    });

    try {
      const result = await userRegisterPostApi(newFormData).unwrap();
      console.log(result);
      setCurrentPhase(3);
    } catch (error: unknown) {
      console.log(error);
      const e = error as { data?: { Message: unknown }; status?: unknown };

      const errMsgs = Object.entries(e.data?.Message as string);
      const errStatus = e?.status as number;
      errInput(registerApiErrMsg, errMsgs, errStatus, setError);
    }
  };

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    setValue("Gender", e.target.value);

    await trigger("Gender");

    if (e.target.value) {
      setColor("text-black-500");
      await trigger("Gender");
    } else {
      setColor("text-black-200");
    }
  };

  return (
    <form
      className="cusForm max-w-[464px] mx-auto mt-[75px] relative text-black-500"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Image src={logoPrimary} width="147" height="27" alt="NuCares-logo" />
        <h2 className="text-20 text-primary-400 font-normal mt-12">會員註冊</h2>
      </div>
      <Image
        src={registerStep2}
        width="290"
        height="20"
        alt="registerStep2"
        layout="responsive"
      />
      <div className="flex flex-col w-full text-14 lg:text-16">
        <label className="relative">
          <input
            className={`cusInputWithIcon ${
              errors.UserName && "focus:ring-secondary-500"
            }`}
            placeholder="姓名"
            type="text"
            {...register("UserName", { required: "*必填" })}
          />
          <div className="cusShowLeftIcon bg-nameIcon" />
        </label>
        <p className="text-left text-secondary-600 mt-4">
          {errors.UserName?.message}
        </p>
        <label className="relative  mt-24 lg:mt-32">
          <Controller
            control={control}
            name="Birthday"
            rules={{ required: "*必填" }}
            render={({ field }) => (
              <DatePicker
                className={`cusInputWithIcon ${
                  errors.Birthday && "focus:ring-secondary-500"
                }`}
                name="Birthday"
                placeholderText="生日"
                selected={field.value ? new Date(field.value) : null}
                dateFormat="yyyy/MM/dd"
                onChange={(date: Date | [Date, Date] | null) => {
                  if (date instanceof Date) {
                    const formattedDate = `${date.getFullYear()}/${(
                      date.getMonth() + 1
                    )
                      .toString()
                      .padStart(2, "0")}/${date
                      .getDate()
                      .toString()
                      .padStart(2, "0")}`;
                    field.onChange(formattedDate);
                  } else {
                    field.onChange(date);
                  }
                }}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            )}
          />
          <div className="cusShowLeftIcon bg-birthdayIcon" />
          <div className="cusShowRightIcon bg-calendarIcon" />
        </label>
        <p className="text-left text-secondary-600 mt-4">
          {errors.Birthday?.message}
        </p>
        <label className="relative  mt-24 lg:mt-32">
          <select
            className={`cusInputWithIcon ${color} ${
              errors.Gender && "focus:ring-secondary-500"
            }`}
            {...register("Gender", { required: "*必填" })}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              生理性別
            </option>
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
          <div className="cusShowLeftIcon bg-clipPathIcon" />
          <div className="cusShowRightIcon bg-arrowDownIcon" />
        </label>
        <p className="text-left text-secondary-600 mt-4">
          {errors.Gender?.message}
        </p>
        <label className="relative  mt-24 lg:mt-32">
          <input
            className={`cusInputWithIcon ${
              errors.Phone && "focus:ring-secondary-500"
            }`}
            placeholder="手機號碼"
            type="number"
            {...register("Phone", { required: "*必填" })}
          />
          <div className="cusShowLeftIcon bg-mobileIcon" />
        </label>
        <p className="text-left text-secondary-600 mt-4">
          {errors.Phone?.message}
        </p>
        <label className="relative mt-24 lg:mt-32">
          <input
            type="checkbox"
            className="form-checkbox bg-transparent text-black-500 focus:ring-offset-0 focus:ring-0"
            value="UserRule"
            {...register("UserRule", { required: "*必填" })}
          />
          <span className="ms-4">使用者條款</span>
        </label>
      </div>
      <button type="submit" className="btn-cusBigSecondary w-full">
        註冊
      </button>
    </form>
  );
};

export default RegisterFormSecondPhase;
