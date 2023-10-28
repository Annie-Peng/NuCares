import Link from "next/link";
import Image from "next/image";
import logoPrimary from "public/images/logo-primary-300.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserLoginPostApiMutation } from "@/common/redux/service/login";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, storeAuth } from "@/common/redux/features/auth";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

interface LoginType {
  Email: string;
  Password: string;
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

  const onSubmit: SubmitHandler<LoginType> = async (formData) => {
    console.log(formData);
    try {
      const result = await userLoginPostApi(formData).unwrap();
      console.log(result);

      dispatch(storeAuth(result));

      Object.entries(result.Data).forEach(([key, value]) => {
        setCookie(key, value);
      });
      setCookie("Token", `Bearer ${result.Token}`);

      router.push("/");
    } catch (error: unknown) {
      console.log(error);
      // const e = error as { data?: { Message: unknown }; status?: unknown };

      // const errMsgs = Object.entries(e.data?.Message as string);
      // const errStatus = e?.status as number;
      // errInput(registerApiErrMsg, errMsgs, errStatus, setError);
    }
  };

  return (
    <form
      className="cusForm max-w-[464px] mx-auto mt-[75px] relative text-black-500"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image src={logoPrimary} width="147" height="27" alt="NuCares-logo" />
      <h2 className="text-20 text-primary-400 font-normal">會員登入</h2>
      <label className="w-full mt-20 lg:mt-0 relative">
        <input
          className="cusInputWithIcon"
          placeholder="帳號(Email)"
          type="email"
          {...register("Email", { required: "必填" })}
        />
        <div className="cusShowLeftIcon bg-emailIcon" />
        <p className="text-left text-secondary-600">{errors.Email?.message}</p>
      </label>
      <label htmlFor="email" className="w-full mt-14 lg:mt-0 relative">
        <input
          className="cusInputWithIcon"
          placeholder="密碼"
          type="password"
          {...register("Password", { required: "必填" })}
        />
        <div className="cusShowLeftIcon bg-passwordIcon" />
        <div className="cusShowRightIcon bg-eyeCloseIcon" />
        <p className="text-left text-secondary-600">
          {errors.Password?.message}
        </p>
      </label>
      <button
        type="submit"
        className="btn-cusSecondary w-full mt-14 lg:mt-0 lg:py-20"
      >
        登入
      </button>
      <Link href="/" className="mt-20 text-14 lg:mt-0">
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
