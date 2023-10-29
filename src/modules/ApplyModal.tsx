import TitleModal from "@/common/components/TitleModal";

const ApplyModal = () => {
  return (
    <TitleModal title="申請成為平台營養師" width="820px">
      <form className="text-left flex flex-col gap-32">
        <label htmlFor="userName">
          <h4 className="font-bold">真實姓名*</h4>
          <p>請填寫身分證上的姓名</p>
          <input type="text" className="cusInput" name="userName" />
        </label>
        <label htmlFor="Email">
          <h4 className="font-bold">信箱</h4>
          <p>此為註冊之帳號，不可更改</p>
          <input type="text" className="cusInput" name="Email" disabled />
        </label>
        <label htmlFor="Gender">
          <h4 className="font-bold">生理性別*</h4>
          <p>請選擇與身分證上相同的性別</p>
          <select name="Gender" id="Gender">
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
        </label>
        <div>
          <h4 className="font-bold">營養師證照</h4>
          <p>請上傳您的營養師證照供平台審核</p>
          <label htmlFor="CertificateImage" className="cusFileUpload">
            上傳營養師證照
            <input
              type="file"
              name="CertificateImage"
              id="CertificateImage"
              className="hidden"
            />
          </label>
        </div>
        <label htmlFor="UserRule">
          <input type="checkbox" name="UserRule" />
          使用者條款
        </label>
        <button
          type="submit"
          className="btn-cusSecondary w-[250px] mx-auto py-8"
        >
          確認送出申請
        </button>
      </form>
    </TitleModal>
  );
};
export default ApplyModal;
