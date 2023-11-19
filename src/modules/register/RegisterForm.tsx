import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { storeRegisterForm } from "@/common/redux/features/registerPhases";
import { useUserRegisterEmailPostApiMutation } from "@/common/redux/service/register";
import "react-datepicker/dist/react-datepicker.css";
import logoPrimary from "public/images/logo-primary-300.svg";
import registerStep1 from "public/images/register/registerStep1.svg";
import registerApiErrMsg from "@/common/lib/dashboard/errMsg/registerApiErrMsg";
import errInput from "@/common/helpers/errInput";
import { RegisterFormProps } from "@/pages/register";

export interface FormInput {
  [key: string]: string;
  Email: string;
  Password: string;
  RePassword: string;
}

const RegisterForm: FC<RegisterFormProps> = ({ setCurrentPhase }) => {
  const [userRegisterEmailPostApi] = useUserRegisterEmailPostApiMutation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState({
    Password: false,
    RePassword: false,
  });

  console.log(showPassword);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (formData) => {
    try {
      dispatch(storeRegisterForm(formData));
      const result = await userRegisterEmailPostApi(formData).unwrap();
      console.log(result);
      setCurrentPhase(2);
    } catch (error: unknown) {
      console.log(error);
      const e = error as { data?: { Message: unknown }; status?: unknown };

      const errMsgs = Object.entries(e.data?.Message as string);
      const errStatus = e?.status as number;

      errInput(registerApiErrMsg, errMsgs, errStatus, setError);
    }
  };

  return (
    <form
      className="cusForm max-w-[464px] mx-auto relative text-black-500"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Image src={logoPrimary} width="147" height="27" alt="NuCares-logo" />
        <h2 className="text-20 text-primary-400 font-normal mt-12">會員註冊</h2>
      </div>
      <Image
        src={registerStep1}
        width="290"
        height="20"
        layout="responsive"
        alt="registerStep1"
      />
      <div className="flex flex-col w-full text-14 lg:text-16">
        <label className="relative">
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

          <div className="cusShowLeftIcon bg-emailIcon" />
        </label>
        <p className="text-left text-secondary-600 mt-4">
          {errors.Email?.message}
        </p>
        <label className="relative mt-24 lg:mt-32">
          <input
            className={`cusInputWithIcon ${
              errors.Password && "focus:ring-secondary-500"
            }`}
            placeholder="密碼(請輸入6-12字元英數組合)"
            type={showPassword.Password ? "text" : "password"}
            {...register("Password", {
              required: "*必填",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/,
                message: "密碼格式有誤",
              },
            })}
          />

          <div className="cusShowLeftIcon bg-passwordIcon" />
          <div
            className="cusShowRightIcon bg-eyeCloseIcon"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                Password: !showPassword.Password,
              })
            }
          />
        </label>
        <p className="text-left text-secondary-600 mt-4">
          {errors.Password?.message}
        </p>
        <label className="relative mt-24 lg:mt-32">
          <input
            className={`cusInputWithIcon ${
              errors.RePassword && "focus:ring-secondary-500"
            }`}
            placeholder="再次確認密碼"
            type={showPassword.RePassword ? "text" : "password"}
            {...register("RePassword", {
              required: "*必填",
              validate: (value, formValues) =>
                value === formValues.Password || "您輸入的密碼不一致",
            })}
          />

          <div className="cusShowLeftIcon bg-passwordIcon" />
          <div
            className="cusShowRightIcon bg-eyeCloseIcon"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                RePassword: !showPassword.RePassword,
              })
            }
          />
        </label>
        <p className="text-left text-secondary-600 mt-4">
          {errors.RePassword?.message}
        </p>
      </div>
      <button type="submit" className="btn-cusBigSecondary w-full">
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
