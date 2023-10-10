import Link from "next/link";
import Image from "next/image";
import logoShadow from "public/images/logo-shadow.svg";
const LoginForm = () => {
  return (
    <form className="cusForm max-w-[464px] mx-auto mt-[75px] relative text-black-500">
      <Image src={logoShadow} width="147" height="27" alt="NuCares-logo" />
      <h2 className="text-24 text-white font-normal drop-shadow-shadow">
        會員登入
      </h2>
      <label htmlFor="email" className="w-full mt-20 lg:mt-0">
        <input
          className="cusInputWithIcon"
          placeholder="帳號(Email)"
          name="email"
          type="email"
        />
      </label>
      <label htmlFor="email" className="w-full mt-14 lg:mt-0">
        <input
          className="cusInputWithIcon"
          placeholder="密碼(請輸入6-12碼由英文和數字的組合)"
          name="password"
          type="password"
        />
      </label>
      <button
        type="submit"
        className="btn-cusSecondary py-8 w-full mt-14 lg:mt-0 lg:py-20"
      >
        登入
      </button>
      <Link href="/" className="mt-20 lg:mt-0">
        忘記密碼
      </Link>
      <span className="mt-6 lg:mt-0">
        還不是會員嗎？
        <Link href="register" className="ms-8 border-b border-tertiary-950">
          立即註冊新帳號
        </Link>
      </span>
      <Link href="/" className="mt-14 lg:mt-0">
        回到上一頁
      </Link>
    </form>
  );
};

export default LoginForm;
