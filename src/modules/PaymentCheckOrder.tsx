const PaymentCheckOrder = () => {
  return (
    <form className=" bg-teal-400 max-w-[856px] mx-auto relative flex flex-wrap justify-between text-left p-32 rounded-20">
      <div className="w-full flex flex-col gap-28">
        <div className="p-20 border rounded-15">
          <h3>訂購人資料</h3>
          <hr className="mt-20" />
          <div className="flex">
            <div className="mt-20 text-right flex flex-col gap-12">
              <p>姓名</p>
              <p>E-mail</p>
              <p>手機號碼</p>
              <p>Line ID</p>
              <p>方便聯絡時間</p>
            </div>
            <div className="ms-20 mt-20 flex flex-col gap-12">
              <p>蛋黃哥</p>
              <p>eggger@gmail.com</p>
              <p>0911-222333</p>
              <p>eggger</p>
              <p>晚上 18:00-21:00</p>
            </div>
          </div>
        </div>
        <div className="p-20 border rounded-15">
          <h3>訂購項目</h3>
          <hr className="mt-20" />
          <p className="mt-20">陳瘦瘦 營養師</p>
          <p>小資 - 4週飲食建議</p>
          <p>共5堂</p>
          <p>NT$ 4,000</p>
        </div>
        <div className="p-20 border rounded-15">
          <h3>付款方式</h3>
          <hr className="mt-20" />
          <label htmlFor="IsCreditCard" className="mt-20 block">
            <input name="IsCreditCard" type="radio" id="IsCreditCard" />
            <span className="mt-20">信用卡</span>
          </label>
        </div>
        <div className="p-20 border rounded-15">
          <h3>發票</h3>
          <hr className="mt-20" />
          <label htmlFor="IsEInvoice" className="mt-20 block">
            <input name="IsEInvoice" type="radio" id="IsEInvoice" />
            <span>平台電子發票</span>
          </label>
        </div>
      </div>
      <div className="w-full"></div>
      <button
        type="button"
        className="btn-cusSecondary py-8 mt-14 lg:mt-0 lg:py-20 ms-auto"
      >
        上一步
      </button>
      <button
        type="submit"
        className="btn-cusSecondary py-8 mt-14 lg:mt-0 lg:py-20 ms-24 mr-auto"
      >
        下一步
      </button>
    </form>
  );
};

export default PaymentCheckOrder;
