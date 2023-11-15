import PaymentFormFailurePhase from "@/modules/payment/PaymentFormFailurePhase";

const PaymentFailurePage = () => {
  return (
    <div className="container text-center grid cusGrid">
      <div className=" col-span-4 lg:col-start-2 lg:col-span-10 ">
        <h2 className="text-24 font-bold mt-16">結帳</h2>
        <PaymentFormFailurePhase />
      </div>
    </div>
  );
};

export default PaymentFailurePage;
