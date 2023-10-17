import Link from "next/link";
import Image from "next/image";
import logoPrimary from "public/images/logo-primary-300.svg";
import registerStep1 from "public/images/register/registerStep1.svg";
import registerStep2 from "public/images/register/registerStep1.svg";
import registerStep3 from "public/images/register/registerStep1.svg";

const RegisterForm = () => {
  return (
    <form className="cusForm max-w-[464px] mx-auto mt-[75px] relative text-black-500">
      <div>
        <Image src={logoPrimary} width="147" height="27" alt="NuCares-logo" />
        <h2 className="text-20 text-primary-400 font-normal mt-12">會員註冊</h2>
      </div>
      <Image src={registerStep1} width="290" height="20" alt="registerStep1" />
      <div className="flex flex-col gap-24 w-full text-14 lg:text-16 lg:gap-32">
        <label htmlFor="Email" className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="帳號(Email)"
            name="Email"
            type="email"
          />
          <div className="cusShowLeftIcon bg-emailIcon" />
        </label>
        <label htmlFor="Password" className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="密碼(請輸入8個字元的英數組合)"
            name="Password"
            type="password"
          />
          <div className="cusShowLeftIcon bg-password" />
          <div className="cusShowRightIcon bg-eyeClose" />
        </label>
        <label htmlFor="RePassword" className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="再次確認密碼"
            name="RePassword"
            type="password"
          />
          <div className="cusShowLeftIcon bg-password" />
          <div className="cusShowRightIcon bg-eyeClose" />
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
