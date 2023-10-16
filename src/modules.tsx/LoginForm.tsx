import Link from "next/link";
import Image from "next/image";
import logoPrimary from "public/images/logo-primary-300.svg";

const LoginForm = () => {
  return (
    <form className="cusForm max-w-[464px] mx-auto mt-[75px] relative text-black-500">
      <Image src={logoPrimary} width="147" height="27" alt="NuCares-logo" />
      <h2 className="text-20 text-primary-400 font-normal">會員登入</h2>
      <label htmlFor="email" className="w-full mt-20 lg:mt-0 relative">
        <input
          className="cusInputWithIcon"
          placeholder="帳號(Email)"
          name="email"
          type="email"
        />
        <div className="cusShowLeftIcon bg-emailIcon" />
      </label>
      <label htmlFor="email" className="w-full mt-14 lg:mt-0 relative">
        <input
          className="cusInputWithIcon"
          placeholder="密碼"
          name="password"
          type="password"
        />
        <div className="cusShowLeftIcon bg-password" />
        <div className="cusShowRightIcon bg-eyeClose" />
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
