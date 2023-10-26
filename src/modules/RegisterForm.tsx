import { useState, ChangeEvent, FC, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRegister,
  storeRegisterForm,
} from "@/common/redux/features/registerPhases";
import {
  useUserRegisterEmailPostApiMutation,
  useUserRegisterPostApiMutation,
} from "@/common/redux/service/register";
import apiErrMsg from "@/common/lib/dashboard/apiErrMsg";
import CusDatePicker from "./CusDatePicker";
import { RegisterData } from "@/types/interface";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logoPrimary from "public/images/logo-primary-300.svg";
import registerStep1 from "public/images/register/registerStep1.svg";
import registerStep2 from "public/images/register/registerStep2.svg";
import registerStep3 from "public/images/register/registerStep3.svg";

interface RegisterFormProps {
  setCurrentPhase: (currentPhase: number) => void;
}

interface Data {
  [key: string]: string | File | number;
}

interface FormInput {
  Email: string;
  Password: string;
  RePassword: string;
}

export interface SecondFormInput {
  UserName: string;
  Birthday: string;
  Gender: string;
  Phone: string;
}

const RegisterForm: FC<RegisterFormProps> = ({ setCurrentPhase }) => {
  const [userRegisterEmailPostApi] = useUserRegisterEmailPostApiMutation();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (formData) => {
    // console.log(formData);

    // try {
    //   const result = await userRegisterEmailPostApi(formData.Email).unwrap();
    //   console.log(result);
    dispatch(storeRegisterForm(formData));
    setCurrentPhase(2);
    // } catch (error) {
    //   console.log(error);
    //   if (apiErrMsg.register.Email.statusCode[error.status]) {
    //     setError("Email", {
    //       type: "manual",
    //       message: apiErrMsg.register.Email.statusCode[error.status],
    //     });
    //   }
    // }
  };

  console.log(errors);
  return (
    <form
      className="cusForm max-w-[464px] mx-auto mt-[75px] relative text-black-500"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Image src={logoPrimary} width="147" height="27" alt="NuCares-logo" />
        <h2 className="text-20 text-primary-400 font-normal mt-12">會員註冊</h2>
      </div>
      <Image src={registerStep1} width="290" height="20" alt="registerStep1" />
      <div className="flex flex-col gap-24 w-full text-14 lg:text-16 lg:gap-32">
        <label htmlFor="Email" className="relative">
          <input
            className={`cusInputWithIcon ${
              errors.Email && "focus:ring-secondary-500"
            }`}
            placeholder="帳號(Email)"
            type="text"
            {...register("Email", {
              required: "*必填",
              pattern: {
                value:
                  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
                message: "Email格式有誤",
              },
            })}
          />
          <p className="text-left text-secondary-600">
            {errors.Email?.message}
          </p>
          <div className="cusShowLeftIcon bg-emailIcon" />
        </label>
        <label htmlFor="Password" className="relative">
          <input
            className={`cusInputWithIcon ${
              errors.Password && "focus:ring-secondary-500"
            }`}
            placeholder="密碼(請輸入8個字元的英數組合)"
            type="password"
            {...register("Password", {
              required: "*必填",
              pattern: {
                value: /\w{8}/,
                message: "密碼格式有誤",
              },
            })}
          />
          <p className="text-left text-secondary-600">
            {errors.Password?.message}
          </p>
          <div className="cusShowLeftIcon bg-passwordIcon" />
          <div className="cusShowRightIcon bg-eyeCloseIcon" />
        </label>
        <label htmlFor="RePassword" className="relative">
          <input
            className={`cusInputWithIcon ${
              errors.RePassword && "focus:ring-secondary-500"
            }`}
            placeholder="再次確認密碼"
            type="password"
            {...register("RePassword", {
              required: "*必填",
              validate: (value, formValues) =>
                value === formValues.Password || "您輸入的密碼不一致",
            })}
          />
          <p className="text-left text-secondary-600">
            {errors.RePassword?.message}
          </p>
          <div className="cusShowLeftIcon bg-passwordIcon" />
          <div className="cusShowRightIcon bg-eyeCloseIcon" />
        </label>
      </div>
      <button type="submit" className="btn-cusSecondary w-full -mt-8 lg:mt-0">
        下一步
      </button>
      <span className="text-14">
        已經是會員？
        <Link href="login" className="ms-8 border-b border-black-500">
          立即登入
        </Link>
      </span>
    </form>
  );
};

export default RegisterForm;

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

  console.log(registerData);
  // console.log(startDate);

  const onSubmit: SubmitHandler<SecondFormInput> = async (formData) => {
    console.log(formData);

    // try {
    //   const result = await userRegisterPostApi(formData).unwrap();
    //   console.log(result);
    dispatch(storeRegisterForm(formData));
    setCurrentPhase(3);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    setValue("Gender", e.target.value);

    await trigger("Gender");

    if (e.target.value) {
      setColor("text-black-500");
      const a = await trigger("Gender");

      console.log(a);
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
      <div className="flex flex-col gap-24 w-full text-14 lg:text-16 lg:gap-32">
        <label htmlFor="nickname" className="relative">
          <input
            className={`cusInputWithIcon ${
              errors.UserName && "focus:ring-secondary-500"
            }`}
            placeholder="姓名"
            type="text"
            {...register("UserName", { required: "*必填" })}
          />
          <div className="cusShowLeftIcon bg-nameIcon" />
          <p className="text-left text-secondary-600">
            {errors.UserName?.message}
          </p>
        </label>
        <label htmlFor="Birthday" className="relative">
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
          <p className="text-left text-secondary-600">
            {errors.Birthday?.message}
          </p>
        </label>
        <label htmlFor="Gender" className="relative">
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
            <option value="woman">女</option>
          </select>
          <div className="cusShowLeftIcon bg-clipPathIcon" />
          <div className="cusShowRightIcon bg-arrowDownIcon" />
          <p className="text-left text-secondary-600">
            {errors.Gender?.message}
          </p>
        </label>
        <label htmlFor="Phone" className="relative">
          <input
            className={`cusInputWithIcon ${
              errors.Phone && "focus:ring-secondary-500"
            }`}
            placeholder="手機號碼"
            type="number"
            {...register("Phone", { required: "*必填" })}
          />
          <div className="cusShowLeftIcon bg-mobileIcon" />
          <p className="text-left text-secondary-600">
            {errors.Phone?.message}
          </p>
        </label>
        <label htmlFor="userRule">
          <input
            type="checkbox"
            name="userRule"
            className="form-checkbox bg-transparent text-black-500 focus:ring-offset-0 focus:ring-0"
          />
          <span className="ms-4">使用者條款</span>
        </label>
      </div>
      <button
        type="submit"
        className="btn-cusSecondary py-8 w-full -mt-20 lg:mt-0 lg:py-20"
      >
        註冊
      </button>
    </form>
  );
};

export { RegisterFormSecondPhase };

const RegisterFormThirdPhase = () => {
  return (
    <form className="cusForm max-w-[464px] mx-auto mt-[75px] relative text-black-500">
      <div>
        <Image src={logoPrimary} width="147" height="27" alt="NuCares-logo" />
        <h2 className="text-20 text-primary-400 font-normal mt-12">會員註冊</h2>
      </div>
      <Image
        src={registerStep3}
        width="290"
        height="20"
        alt="registerStep2"
        layout="responsive"
      />
      <div className="flex flex-col w-full gap-32">
        <p>
          註冊成功
          <br />
          接下來請登入帳號，即可購買課程
        </p>
        <p className="mx-auto w-fit border-b border-black-500">立即登入</p>
        <p className="text-14 -mt-12">或等待5秒自動跳轉至登入畫面</p>
      </div>
    </form>
  );
};

export { RegisterFormThirdPhase };
