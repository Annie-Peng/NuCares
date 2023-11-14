import { selectPayment } from "@/common/redux/features/paymentPhases";
import { Auth, PlanType } from "@/types/interface";
import Image from "next/image";
import paymentStep2 from "public/images/payment/paymentStep2.svg";
import { FC } from "react";
import { useSelector } from "react-redux";

interface PaymentFormSecondPhase {
  auth: Auth;
  renderData: PlanType;
  setCurrentPhase: (currentPhase: number) => void;
}

const PaymentFormSecondPhase: FC<PaymentFormSecondPhase> = ({
  auth,
  renderData,
  setCurrentPhase,
}) => {
  const paymentData = useSelector(selectPayment);
  return (
    <>
      <div className="hidden mt-16 px-[140px] lg:block">
        <Image
          src={paymentStep2}
          width="783"
          height="45"
          layout="responsive"
          alt="paymentStep2"
        />
      </div>
      <div className=" bg-white flex flex-wrap justify-center text-left p-20 rounded-20 mt-16 lg:p-40">
        <div className="w-full lg:w-[79%]">
          <div className="flex flex-col gap-20">
            <div className="p-20 border border-black-300 rounded-15">
              <h3 className="text-18 font-bold">訂購人資料</h3>
              <hr className="mt-12 border-black-300" />
              <div className="flex mt-12">
                <div className="text-14 text-right text-black-400 flex flex-col gap-12 lg:text-16">
                  <p>姓名</p>
                  <p>E-mail</p>
                  <p>手機號碼</p>
                  <p>Line ID</p>
                  <p>方便聯絡時間</p>
                </div>
                <div className="text-14 ms-20 flex flex-col gap-12 lg:text-16">
                  <p>{paymentData.UserName}</p>
                  <p>{paymentData.UserEmail}</p>
                  <p>{paymentData.UserPhone}</p>
                  <p>{paymentData.UserLineId}</p>
                  <p>{paymentData.ContactTime}</p>
                </div>
              </div>
            </div>
            <div className="p-20 border border-black-300 rounded-15">
              <h3 className="text-18 font-bold">訂購項目</h3>
              <hr className="mt-12 border-black-300" />
              <p className="mt-12 font-bold">{renderData.Title} 營養師</p>
              <p className="mt-4 font-bold">{renderData.CourseName}</p>
              <p className="mt-4 text-14">共{renderData.CourseWeek}週</p>
              <p className="mt-12 text-20 font-bold">
                NT$ {renderData.CoursePrice}
              </p>
            </div>
            <div className="p-20 border border-black-300 rounded-15">
              <h3 className="text-18 font-bold">付款方式</h3>
              <hr className="mt-12 border-black-300" />
              <p className="mt-12">{paymentData.PaymentMethod}</p>
            </div>
            <div className="p-20 border border-black-300 rounded-15">
              <h3 className="text-18 font-bold">發票</h3>
              <hr className="mt-12 border-black-300" />
              <p className="mt-12">{paymentData.Invoice}</p>
            </div>
          </div>
          {/* <!-- 用表單送給藍新 --> */}
          <form
            name="Newebpay"
            method="post"
            action="https://ccore.newebpay.com/MPG/mpg_gateway"
          >
            {/* <!-- 設定 hidden 可以隱藏不用給使用者看的資訊 --> */}
            {/* <!-- 藍新金流商店代號 --> */}
            <input
              type="hidden"
              id="MerchantID"
              name="MerchantID"
              value={paymentData.MerchantID}
            />
            {/* <!-- 交易資料透過 Key 及 IV 進行 AES 加密 --> */}
            <input
              type="hidden"
              id="TradeInfo"
              name="TradeInfo"
              value={paymentData.TradeInfo}
            />
            {/* <!-- 經過上述 AES 加密過的字串，透過商店 Key 及 IV 進行 SHA256 加密 --> */}
            <input
              type="hidden"
              id="TradeSha"
              name="TradeSha"
              value={paymentData.TradeSha}
            />
            {/* <!-- 串接程式版本 --> */}
            <input type="hidden" id="Version" name="Version" value="2.0" />
            {/* <!-- 直接執行送出 --> */}
            <div className="w-full mt-[60px] text-center">
              <button
                type="button"
                className="btn-cusWritePrimary w-full !py-8 lg:w-[278px]"
                onClick={() => setCurrentPhase(1)}
              >
                上一步
              </button>
              <button
                type="submit"
                className="mt-10 btn-cusSecondary w-full py-8 lg:ml-10 lg:w-[278px]"
              >
                下一步
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentFormSecondPhase;
