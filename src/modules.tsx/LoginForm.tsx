import Link from "next/link";
const LoginForm = () => {
  return (
    <form className="cusForm w-[564px] mx-auto mt-24 relative">
      <label htmlFor="email" className="w-full">
        <input
          className="cusInputWithIcon"
          placeholder="帳號(Email)"
          name="email"
          type="email"
        />
      </label>
      <label htmlFor="email" className="w-full">
        <input
          className="cusInputWithIcon"
          placeholder="密碼(請輸入6-12碼由英文和數字的組合)"
          name="password"
          type="password"
        />
      </label>
      <button type="submit" className="btn-cusPrimary w-full">
        登入
      </button>
      <Link href="/">忘記密碼</Link>
      <span>
        還不是會員嗎？
        <Link href="register" className="ms-8 border-b border-tertiary-950">
          立即註冊新帳號
        </Link>
      </span>
      <Link href="/">回到上一頁</Link>
    </form>
  );
};

export default LoginForm;
