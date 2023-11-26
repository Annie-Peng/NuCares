import Link from "next/link";
import Image from "next/legacy/image";
import logoPrimary from "public/images/logo-primary-300.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserLoginPostApiMutation } from "@/common/redux/service/login";
import { useDispatch } from "react-redux";
import { storeAuth } from "@/common/redux/features/auth";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { useState } from "react";
import loginApiErrMsg from "@/common/lib/dashboard/errMsg/loginApiErrMsg";
import errInput from "@/common/helpers/errInput";
import {
  commonEmailPattern,
  commonPasswordPattern,
} from "@/common/lib/dashboard/errMsg/commonErrMsg";
import { BasicRegisterFormInput } from "@/types/interface";

interface LoginType extends BasicRegisterFormInput {
  [key: string]: string | undefined;
}
const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<LoginType>();

  const [userLoginPostApi] = useUserLoginPostApiMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginType> = async (formData) => {
    try {
      const result = await userLoginPostApi(formData).unwrap();

      dispatch(storeAuth(result));

      Object.entries(result.Data).forEach(([key, value]) => {
        setCookie(key, value === null ? "" : value, { maxAge: 60 * 60 * 24 });
      });
      setCookie("Token", `Bearer ${result.Token}`, { maxAge: 60 * 60 * 24 });

      const routeListPage =
        result.Data.UserCurrentStatus === "user"
          ? "student/course-list"
          : "nutritionist/student-list";

      router.push(`/dashboard/${routeListPage}`);
    } catch (error: unknown) {
      console.log(error);
      const e = error as { data?: { Message: unknown }; status?: unknown };

      const errMsgs = Object.entries(e.data?.Message as string);
      const errStatus = e?.status as number;
      errInput(loginApiErrMsg, errMsgs, errStatus, setError);
    }
  };

  return (
    <form
      className="cusForm max-w-[464px] mx-auto relative text-black-500"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image
        layout="fixed"
        src={logoPrimary}
        width="147"
        height="27"
        alt="NuCares-logo"
      />
      <h2 className="text-20 text-primary-400 font-normal">會員登入</h2>
      <div className="flex flex-col w-full text-14 lg:text-16">
        <label className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="帳號(Email)"
            type="text"
            {...register("Email", {
              required: "*必填",
              pattern: { value: commonEmailPattern, message: "Email格式有誤" },
            })}
          />
          <div className="cusShowLeftIcon bg-emailIcon" />
        </label>
        <p className="text-left text-secondary-600 mt-4">
          {errors.Email?.message}
        </p>
        <label className="mt-24 lg:mt-32 relative">
          <input
            className="cusInputWithIcon"
            placeholder="密碼"
            type={showPassword ? "text" : "password"}
            {...register("Password", {
              required: "*必填",
              pattern: {
                value: commonPasswordPattern,
                message: "密碼格式有誤 (6-12字元英數組合)",
              },
            })}
          />
          <div className="cusShowLeftIcon bg-passwordIcon" />
          <div
            className={`cusShowRightIcon ${
              showPassword ? "bg-eyeOpenIcon !top-[52%]" : "bg-eyeCloseIcon"
            }`}
            onClick={() => setShowPassword(!showPassword)}
          />
        </label>
        <p className="text-left text-secondary-600 mt-4">
          {errors.Password?.message}
        </p>
      </div>
      <button type="submit" className="btn-cusBigSecondary w-full">
        登入
      </button>
      <Link href="#" className="mt-20 text-14 lg:mt-0">
        忘記密碼
      </Link>
      <span className="mt-6 text-14 lg:mt-0">
        還不是會員嗎？
        <Link
          href="register"
          className="ms-8 text-14 border-b border-black-500"
        >
          立即註冊新帳號
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
