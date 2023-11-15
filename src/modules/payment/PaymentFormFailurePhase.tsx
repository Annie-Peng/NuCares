import Image from "next/image";
import paymentFailure from "public/images/payment/paymentFailure.svg";

const PaymentFormFailurePhase = () => {
  return (
    <>
      <div className="hidden mt-16 px-[140px] lg:block">
        <Image
          src={paymentFailure}
          width="783"
          height="45"
          layout="responsive"
          alt="paymentStep2"
        />
      </div>
      <form className=" bg-white text-center mt-16 p-20 rounded-20 font-normal lg:p-40">
        <p className="text-20 lg:text-24">訂購失敗</p>
        <p className="mt-24 text-14 lg:text-24">
          請聯絡
          <span className="border-b border-black-950">客服人員</span>
        </p>
      </form>
    </>
  );
};

export default PaymentFormFailurePhase;
