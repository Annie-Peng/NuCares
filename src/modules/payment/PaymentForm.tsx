import { Auth } from "@/common/redux/features/auth";
import { usePaymentGetApiQuery } from "@/common/redux/service/payment";
import Image from "next/image";
import paymentStep1 from "public/images/payment/paymentStep1.svg";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface PaymentFormProps {
  auth: Auth;
  planId: string;
}

export interface FormInput {
  UserName: string;
  UserEmail: string;
  UserLineId: string;
  UserPhone: string;
  ContactTime: string;
  Invoice: string;
  PaymentMethod: string;
}

const PaymentForm: FC<PaymentFormProps> = ({ auth, planId }) => {
  const {
    data: renderData,
    isLoading,
    error,
  } = usePaymentGetApiQuery({ Token: auth.Token, planId });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>({
    defaultValues: {
      UserName: auth.UserName,
      UserEmail: auth.Email,
      UserLineId: "",
      UserPhone: "",
      ContactTime: "",
      Invoice: "",
      PaymentMethod: "",
    },
  });

  console.log(renderData);

  if (isLoading || !renderData) {
    return <p>Payment is Loading</p>;
  }

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="hidden mt-16 px-[140px] lg:block">
        <Image
          src={paymentStep1}
          width="783"
          height="45"
          layout="responsive"
          alt="paymentStep1"
        />
      </div>
      <form
        className=" bg-white flex flex-wrap justify-center text-left mt-16 p-40 rounded-20 gap-x-[200px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col gap-12 lg:w-[30%]">
          <div className="flex flex-wrap gap-8 items-center lg:flex">
            <h3 className="text-20 font-normal">訂購人資料</h3>
            <span className="text-14 text-black-400">
              此份資料會提供給營養師
            </span>
          </div>
          <label htmlFor="UserName">
            <p className="font-bold">姓名</p>
            <input
              className="cusInputNoIcon mt-12 w-full"
              type="text"
              value={auth.UserName}
              {...register("UserName")}
              disabled
            />
          </label>
          <label htmlFor="UserEmail" className="w-full">
            <p className="font-bold">E-mail</p>
            <input
              className="cusInputNoIcon mt-12 w-full"
              type="email"
              value={auth.Email}
              {...register("UserEmail")}
              disabled
            />
          </label>
          <label htmlFor="UserPhone" className="w-full">
            <p className="font-bold">手機號碼*</p>
            <input
              className="cusInputNoIcon mt-12 w-full"
              type="number"
              {...register("UserPhone", {
                required: "*必填",
                pattern: {
                  value: /^09\d{8}$/,
                  message: "手機號碼格式有誤",
                },
              })}
            />
          </label>
          <p className="text-secondary-600 -mt-8">
            {errors.UserPhone?.message}
          </p>
          <label htmlFor="UserLineId" className="w-full">
            <p className="font-bold">Line ID*</p>
            <input
              className="cusInputNoIcon mt-12 w-full"
              type="text"
              {...register("UserLineId", {
                required: "*必填",
                pattern: {
                  value: /[a-zA-Z\d]/,
                  message: "Line格式有誤",
                },
              })}
            />
          </label>
          <p className="text-secondary-600 -mt-8">
            {errors.UserLineId?.message}
          </p>
          <label htmlFor="ContactTime" className="relative w-[174px]">
            <p className="font-bold">方便聯絡時間*</p>
            <p className="text-black-400 text-14">營養師將會與您聯繫</p>
            <select
              className="cusInputWithNoIcon mt-12 pr-32"
              {...register("ContactTime", { required: "*必填" })}
            >
              <option value="" disabled selected>
                請選擇
              </option>
              <option value="早上 8:00-12:00">早上 8:00-12:00</option>
              <option value="下午 13:00-17:00">下午 13:00-17:00</option>
              <option value="晚上 18:00-21:00">晚上 18:00-21:00</option>
            </select>
            <div className="bg-arrowDownIcon w-20 h-20 content-[''] absolute bottom-14 right-12 block" />
          </label>
          <p className="text-secondary-600 -mt-8">
            {errors.ContactTime?.message}
          </p>
        </div>
        <div className="w-full flex flex-col gap-12 mt-20 lg:w-[30%] lg:mt-0">
          <div className="p-20 border rounded-15 border-black-300 flex flex-col gap-4">
            <h3 className="text-18 font-bold">訂購項目</h3>
            <hr className="mt-16 border-black-300" />
            <p className="mt-16 font-bold">{renderData.Data.Title} 營養師</p>
            <p className="font-bold">{renderData.Data.CourseName}</p>
            <p className="text-14">共{renderData.Data.CourseWeek}週</p>
            <p className="mt-8 text-20 font-bold">
              NT$ {renderData.Data.CoursePrice}
            </p>
          </div>
          <div className="p-20 border rounded-15 border-black-300">
            <div className="flex justify-between">
              <h3 className="text-18 font-bold">付款方式</h3>
              <span className="text-secondary-600">
                {errors.PaymentMethod?.message}
              </span>
            </div>
            <hr className="mt-12 border-black-300" />
            <label htmlFor="PaymentMethod" className="mt-12 block">
              <input
                type="radio"
                id="PaymentMethod"
                className="hidden"
                value="信用卡"
                {...register("PaymentMethod", { required: "*請勾選" })}
              />
              <span className="w-22 h-22 inline-block border border-black-950 rounded-50 align-middle" />
              <span className="ml-12 align-middle">信用卡</span>
            </label>
          </div>
          <div className="p-20 border rounded-15 border-black-300">
            <div className="flex justify-between">
              <h3 className="text-18 font-bold">發票</h3>
              <span className="text-secondary-600">
                {errors.Invoice?.message}
              </span>
            </div>
            <hr className="mt-12 border-black-300" />
            <label htmlFor="Invoice" className="mt-12 block">
              <input
                type="radio"
                id="Invoice"
                className="hidden"
                value="平台電子發票"
                {...register("Invoice", { required: "*請勾選" })}
              />
              <span className="w-22 h-22 inline-block border border-black-950 rounded-50 align-middle" />
              <span className="ml-12 align-middle">平台電子發票</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full btn-cusSecondary py-8 mx-auto mt-[60px] lg:w-[300px]"
        >
          下一步
        </button>
      </form>
    </>
  );
};

export default PaymentForm;
