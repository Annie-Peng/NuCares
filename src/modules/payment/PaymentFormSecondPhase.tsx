import Image from "next/image";
import paymentStep2 from "public/images/payment/paymentStep2.svg";

const PaymentFormSecondPhase = () => {
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
      <form className=" bg-white flex flex-wrap justify-center text-left p-20 rounded-20 mt-16 lg:p-40">
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
                  <p>蛋黃哥</p>
                  <p>eggger@gmail.com</p>
                  <p>0911-222333</p>
                  <p>eggger</p>
                  <p>晚上 18:00-21:00</p>
                </div>
              </div>
            </div>
            <div className="p-20 border border-black-300 rounded-15">
              <h3 className="text-18 font-bold">訂購項目</h3>
              <hr className="mt-12 border-black-300" />
              <p className="mt-12 font-bold">陳瘦瘦 營養師</p>
              <p className="mt-4 font-bold">小資 - 4週飲食建議</p>
              <p className="mt-4 text-14">共5週</p>
              <p className="mt-12 text-20 font-bold">NT$ 4,000</p>
            </div>
            <div className="p-20 border border-black-300 rounded-15">
              <h3 className="text-18 font-bold">付款方式</h3>
              <hr className="mt-12 border-black-300" />
              <p className="mt-12">信用卡</p>
            </div>
            <div className="p-20 border border-black-300 rounded-15">
              <h3 className="text-18 font-bold">發票</h3>
              <hr className="mt-12 border-black-300" />
              <p className="mt-12">平台電子發票</p>
            </div>
          </div>
          <div className="w-full mt-[60px] text-center">
            <button
              type="button"
              className="btn-cusWritePrimary w-full !py-8 lg:w-[278px]"
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
        </div>
      </form>
    </>
  );
};

export default PaymentFormSecondPhase;
