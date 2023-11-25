import PaymentFormSuccessPhase from "@/modules/payment/PaymentFormSuccessPhase";

const PaymentSuccessPage = () => {
  return (
    <div className="container text-center grid cusGrid py-40 lg:py-[64px]">
      <div className=" col-span-4 lg:col-start-2 lg:col-span-10 ">
        <h2 className="text-24 font-bold mt-16">結帳</h2>
        <PaymentFormSuccessPhase />
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
