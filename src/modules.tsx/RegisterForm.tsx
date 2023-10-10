import Link from "next/link";
import Image from "next/image";
import logoShadow from "public/images/logo-shadow.svg";
const RegisterForm = () => {
  return (
    <form className="cusForm bg-teal-400 max-w-[564px] mx-auto mt-[75px] relative text-black-500">
      <Image src={logoShadow} width="147" height="27" alt="NuCares-logo" />
      <h2 className="text-24 font-normal mt-12">會員註冊</h2>
      <label htmlFor="email" className="w-full">
        <input
          className="cusInputWithIcon"
          placeholder="帳號(Email)"
          name="email"
          type="email"
        />
      </label>
      <label htmlFor="password" className="w-full">
        <input
          className="cusInputWithIcon"
          placeholder="密碼(請輸入6-12碼由英文和數字的組合)"
          name="password"
          type="password"
        />
      </label>
      <label htmlFor="rePassword" className="w-full">
        <input
          className="cusInputWithIcon"
          placeholder="再次確認密碼"
          name="rePassword"
          type="password"
        />
      </label>
      <button
        type="submit"
        className="btn-cusSecondary py-8 w-full mt-14 lg:mt-0 lg:py-20"
      >
        下一步
      </button>
      <span className="mt-6 lg:mt-0">
        已經是會員？
        <Link href="login" className="ms-8 border-b border-tertiary-950">
          立即登入
        </Link>
      </span>
      <Link href="/" className="mt-14 lg:mt-0">
        回上一頁
      </Link>
    </form>
  );
};

export default RegisterForm;

const RegisterFormSecondPhase = () => {
  return (
    <form className="cusForm max-w-[564px] mx-auto mt-[75px] relative text-black-500">
      <Image src={logoShadow} width="147" height="27" alt="NuCares-logo" />
      <h2 className="text-24 font-normal mt-12">會員註冊</h2>
      <label htmlFor="userName" className="w-full">
        <input
          className="cusInputNoIcon"
          placeholder="真實姓名"
          name="userName"
          type="text"
        />
      </label>
      <label htmlFor="birthday" className="w-full">
        <input
          className="cusInputNoIcon"
          placeholder="生日"
          name="birthday"
          type="date"
        />
      </label>
      <label htmlFor="gender" className="w-full">
        <select className="cusInputNoIcon" name="gender">
          <option value="" disabled className="text-tertiary-200">
            生理性別
          </option>
          <option value="male">男</option>
          <option value="woman">女</option>
        </select>
      </label>
      <label htmlFor="phone" className="w-full">
        <input
          className="cusInputNoIcon"
          placeholder="手機號碼"
          name="phone"
          type="number"
        />
      </label>
      <label htmlFor="lineId" className="w-full">
        <input
          className="cusInputNoIcon"
          placeholder="Line ID"
          name="lineId"
          type="text"
        />
      </label>
      <label htmlFor="otherContact" className="w-full">
        <input
          className="cusInputNoIcon"
          placeholder="其他通訊軟體"
          name="otherContact"
          type="text"
        />
      </label>
      <label htmlFor="userRule">
        <input type="checkbox" name="userRule" />
        <span className="ms-4">使用者條款</span>
      </label>
      <button
        type="submit"
        className="btn-cusSecondary py-8 w-full mt-14 lg:mt-0 lg:py-20"
      >
        確定送出
      </button>
      <Link href="/" className="mt-14 lg:mt-0">
        回上一頁
      </Link>
    </form>
  );
};

export { RegisterFormSecondPhase };
