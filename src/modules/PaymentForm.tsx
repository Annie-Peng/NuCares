const PaymentForm = () => {
  return (
    <form className=" bg-teal-400 max-w-[856px] mx-auto relative flex flex-wrap justify-between text-left p-32 rounded-20">
      <div className="w-[35%] flex flex-col gap-28">
        <div>
          <h3 className="text-24 font-normal mt-12">訂購者資料</h3>
          <p>此份資料會提供給營養師</p>
        </div>
        <label htmlFor="StudentName" className="w-full">
          <p>姓名</p>
          <input
            className="cusInputNoIcon"
            placeholder="姓名"
            name="text"
            type="StudentName"
          />
        </label>
        <label htmlFor="Email" className="w-full">
          <p>E-mail</p>
          <input
            className="cusInputNoIcon"
            placeholder="E-mail"
            name="Email"
            type="email"
          />
        </label>
        <label htmlFor="Phone" className="w-full">
          <p>手機號碼</p>
          <input
            className="cusInputNoIcon"
            placeholder="手機號碼"
            name="Phone"
            type="number"
          />
        </label>
        <label htmlFor="LineId" className="w-full">
          <p>Line ID</p>
          <input
            className="cusInputNoIcon"
            placeholder="Line ID"
            name="LineId"
            type="text"
          />
        </label>
        <label htmlFor="ContactTime">
          <p>方便聯絡時間</p>
          <p>營養師將會與您聯繫</p>
          <select id="ContactTime" className="w-[210px]">
            <option label="晚上 18:00-21:00">晚上 18:00-21:00</option>
          </select>
        </label>
      </div>
      <div className="w-[35%] flex flex-col gap-20">
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
            <span>信用卡</span>
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
        type="submit"
        className="btn-cusSecondary py-8 mx-auto mt-14 lg:mt-0 lg:py-20"
      >
        下一步
      </button>
    </form>
  );
};

export default PaymentForm;
