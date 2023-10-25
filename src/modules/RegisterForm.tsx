import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import logoPrimary from "public/images/logo-primary-300.svg";
import registerStep1 from "public/images/register/registerStep1.svg";
import registerStep2 from "public/images/register/registerStep2.svg";
import registerStep3 from "public/images/register/registerStep3.svg";
import { useState, ChangeEvent, FormEvent, FC } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CusDatePicker from "./CusDatePicker";
import { useDispatch, useSelector } from "react-redux";
import { useUserRegisterPostApiMutation } from "@/common/redux/service/register";
import {
  selectRegister,
  storeRegisterForm,
} from "@/common/redux/features/registerPhases";
import { RegisterData } from "@/types/interface";

interface RegisterFormProps {
  setCurrentPhase: (currentPhase: number) => void;
}

interface Data {
  [key: string]: string | File | number;
}

const errMsg = {
  email: {
    required: false,
    statusCode: [],
  },
  password: {
    required: false,
    statusCode: [],
  },
  RePassword: {
    required: false,
    statusCode: [],
  },
};

const RegisterForm: FC<RegisterFormProps> = ({ setCurrentPhase }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    // e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // let data: Data = {};
    // let showRequired = err;
    // formData.forEach((value, key) => {
    //   data[key] = value;
    //   if (data[key] === "") {
    //     showRequired = {
    //       ...showRequired,
    //       [key]: {
    //         ...showRequired[key],
    //         required: true,
    //       },
    //     };
    //   } else {
    //     showRequired = {
    //       ...showRequired,
    //       [key]: {
    //         ...showRequired[key],
    //         required: false,
    //       },
    //     };
    //   }
    // });
    // setErr(showRequired);
    dispatch(storeRegisterForm(data));
    // setCurrentPhase(2);
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
      <Image src={registerStep1} width="290" height="20" alt="registerStep1" />
      <div className="flex flex-col gap-24 w-full text-14 lg:text-16 lg:gap-32">
        <label htmlFor="Email" className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="帳號(Email)"
            name="Email"
            type="text"
            {...register("Email", { required: true })}
          />
          {errors.Email && (
            <p className="text-left text-secondary-600">*必填</p>
          )}
          <div className="cusShowLeftIcon bg-emailIcon" />
        </label>

        <label htmlFor="Password" className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="密碼(請輸入8個字元的英數組合)"
            name="Password"
            type="password"
            {...register("Password", { required: true })}
          />
          {errors.Password && (
            <p className="text-left text-secondary-600">*必填</p>
          )}
          <div className="cusShowLeftIcon bg-passwordIcon" />
          <div className="cusShowRightIcon bg-eyeCloseIcon" />
        </label>
        <label htmlFor="RePassword" className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="再次確認密碼"
            name="RePassword"
            type="password"
            {...register("RePassword", { required: true })}
          />
          {errors.RePassword && (
            <p className="text-left text-secondary-600">*必填</p>
          )}
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
  const [startDate, setStartDate] = useState<Date | null>(null);
  const dispatch = useDispatch();
  const registerData = useSelector(selectRegister);
  const [userRegisterPostApi] = useUserRegisterPostApiMutation();

  console.log(registerData);

  const userRegisterPost = async (registerData?: RegisterData) => {
    const res = await userRegisterPostApi(registerData);
    console.log(res);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    dispatch(storeRegisterForm(data));
    userRegisterPost(registerData);
    // setCurrentPhase(2);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setColor("text-black-200");
    } else {
      setColor("text-black-500");
    }
  };

  const handleDateClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // 在这里处理点击事件
  };

  return (
    <form
      className="cusForm max-w-[464px] mx-auto mt-[75px] relative text-black-500"
      onSubmit={onSubmit}
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
            className="cusInputWithIcon"
            placeholder="姓名"
            name="nickname"
            type="text"
          />
          <div className="cusShowLeftIcon bg-nameIcon" />
        </label>
        <label htmlFor="Birthday" className="relative">
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            customInput={
              <CusDatePicker
                value={startDate?.toString() || ""}
                onClick={handleDateClick}
              />
            }
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            dateFormat="yyyy-MM-dd"
          />
        </label>
        <label htmlFor="Gender" className="relative">
          <select
            className={`cusInputWithIcon ${color}`}
            name="Gender"
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
        <label htmlFor="Phone" className="relative">
          <input
            className="cusInputWithIcon"
            placeholder="手機號碼"
            name="Phone"
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
