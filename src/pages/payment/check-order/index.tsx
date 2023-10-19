import PaymentCheckOrder from "@/modules/PaymentCheckOrder";

const CheckOrderPage = () => {
  return (
    <div className="container text-center cusGrid">
      <p>返回營養師專頁</p>
      <h2>結帳</h2>
      <PaymentCheckOrder />
    </div>
  );
};

export default CheckOrderPage;
