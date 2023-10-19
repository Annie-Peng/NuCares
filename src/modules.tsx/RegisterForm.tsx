import Link from "next/link";
import Image from "next/image";
import logoPrimary from "public/images/logo-primary-300.svg";
import registerStep1 from "public/images/register/registerStep1.svg";
import registerStep2 from "public/images/register/registerStep2.svg";
import registerStep3 from "public/images/register/registerStep3.svg";
import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CusDatePicker from "./CusDatePicker";

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
          <div className="cusShowLeftIcon bg-passwordIcon" />
          <div className="cusShowRightIcon bg-eyeCloseIcon" />
        </label>
        <label htmlFor="RePassword" className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="再次確認密碼"
            name="RePassword"
            type="password"
          />
          <div className="cusShowLeftIcon bg-passwordIcon" />
          <div className="cusShowRightIcon bg-eyeCloseIcon" />
        </label>
      </div>
      <Link href="/register/process2" className="w-full">
        <button type="button" className="btn-cusSecondary w-full -mt-8 lg:mt-0">
          下一步
        </button>
      </Link>
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
  const [color, setColor] = useState("text-black-200");
  const [startDate, setStartDate] = useState(null);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setColor("text-black-200");
    } else {
      setColor("text-black-500");
    }
  };

  return (
    <form className="cusForm max-w-[464px] mx-auto mt-[75px] relative text-black-500">
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
        <label htmlFor="userName" className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="姓名"
            name="userName"
            type="text"
          />
          <div className="cusShowLeftIcon bg-nameIcon" />
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<CusDatePicker />}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
        <label htmlFor="gender" className="relative">
          <select
            className={`cusInputWithIcon ${color}`}
            name="gender"
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
        </label>
        <label htmlFor="phone" className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="手機號碼"
            name="phone"
            type="number"
          />
          <div className="cusShowLeftIcon bg-mobileIcon" />
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
      <Link href="/register/process3" className="w-full">
        <button
          type="button"
          className="btn-cusSecondary py-8 w-full -mt-20 lg:mt-0 lg:py-20"
        >
          註冊
        </button>
      </Link>
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
