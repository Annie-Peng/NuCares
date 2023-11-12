import Image from "next/image";
import Link from "next/link";
import paymentStep1 from "public/images/payment/paymentStep1.svg";
import { FC } from "react";

interface PaymentFormProps {
  planId: string;
}

const PaymentForm: FC<PaymentFormProps> = ({ planId }) => {
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
      <form className=" bg-white flex flex-wrap justify-center text-left mt-16 p-40 rounded-20 gap-x-[200px]">
        <div className="w-[30%] flex flex-col gap-12">
          <div className="flex gap-8 items-center">
            <h3 className="text-20 font-normal">訂購人資料</h3>
            <span className="text-14 text-black-400">
              此份資料會提供給營養師
            </span>
          </div>
          <label htmlFor="UserName">
            <p className="font-bold">姓名</p>
            <input
              className="cusInputNoIcon mt-12 w-full"
              name="UserName"
              type="text"
              disabled
            />
          </label>
          <label htmlFor="UserEmail" className="w-full">
            <p className="font-bold">E-mail</p>
            <input
              className="cusInputNoIcon mt-12 w-full"
              name="UserEmail"
              type="email"
              disabled
            />
          </label>
          <label htmlFor="UserPhone" className="w-full">
            <p className="font-bold">手機號碼</p>
            <input
              className="cusInputNoIcon mt-12 w-full"
              name="UserPhone"
              type="number"
            />
          </label>
          <label htmlFor="UserLineId" className="w-full">
            <p className="font-bold">Line ID*</p>
            <input
              className="cusInputNoIcon mt-12 w-full"
              name="UserLineId"
              type="text"
            />
          </label>
          <label htmlFor="ContactTime" className="relative w-[174px]">
            <p className="font-bold">方便聯絡時間*</p>
            <p className="text-black-400 text-14">營養師將會與您聯繫</p>
            <select
              className="cusInputWithNoIcon mt-12 pr-32"
              name="ContactTime"
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
        </div>
        <div className="w-full flex flex-col gap-12 lg:w-[30%]">
          <div className="p-20 border rounded-15 border-black-300 flex flex-col gap-4">
            <h3 className="text-18 font-bold">訂購項目</h3>
            <hr className="mt-16 border-black-300" />
            <p className="mt-16 font-bold">陳瘦瘦 營養師</p>
            <p className="font-bold">小資 - 4週飲食建議</p>
            <p className="text-14">共5堂</p>
            <p className="mt-8 text-20 font-bold">NT$ 4,000</p>
          </div>
          <div className="p-20 border rounded-15 border-black-300">
            <h3 className="text-18 font-bold">付款方式</h3>
            <hr className="mt-12 border-black-300" />
            <label htmlFor="PaymentMethod" className="mt-12 block">
              <input
                name="PaymentMethod"
                type="radio"
                id="PaymentMethod"
                className="hidden"
              />
              <span className="w-22 h-22 inline-block border border-black-950 rounded-50 align-middle" />
              <span className="ml-12 align-middle">信用卡</span>
            </label>
          </div>
          <div className="p-20 border rounded-15 border-black-300">
            <h3 className="text-18 font-bold">發票</h3>
            <hr className="mt-12 border-black-300" />
            <label htmlFor="Invoice" className="mt-12 block">
              <input
                name="Invoice"
                type="radio"
                id="Invoice"
                className="hidden"
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
