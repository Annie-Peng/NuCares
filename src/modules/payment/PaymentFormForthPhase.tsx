import { setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import paymentStep4 from "public/images/payment/paymentStep4.svg";

const PaymentFormForthPhase = () => {
  return (
    <>
      <div className="hidden mt-16 px-[140px] lg:block">
        <Image
          src={paymentStep4}
          width="783"
          height="45"
          layout="responsive"
          alt="paymentStep2"
        />
      </div>
      <form className=" bg-white text-center mt-16 p-20 rounded-20 font-normal lg:p-40">
        <p className="text-20 lg:text-24">訂購完成</p>
        <p className="mt-24 text-14 lg:text-24">
          您可至後台管理
          <Link
            href="/dashboard/student/course-list"
            onClick={() => setCookie("UserCurrentStatus", "user")}
            className="border-b border-black-950"
          >
            我的課程
          </Link>
          開始使用紀錄功能
        </p>
      </form>
    </>
  );
};

export default PaymentFormForthPhase;
