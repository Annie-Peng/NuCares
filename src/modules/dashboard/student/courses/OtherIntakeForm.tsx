import { ReactNode } from "react";

interface OtherIntakeFormProps {
  title: string;
}

const OtherIntakeForm: React.FC<OtherIntakeFormProps> = ({ title }) => {
  return (
    <form>
      <label htmlFor="food">
        <h5>食物名稱</h5>
        <p>請將{title}所有食物名稱列出來</p>
        <textarea className="cusTextarea" name="food" />
      </label>
      <label htmlFor="oilQuantity">
        <h5>份量*</h5>
        <p>{title}</p>
        <select id="oilQuantity">
          <option label="">請選擇</option>
        </select>
      </label>
      <div className="flex gap-24 justify-center">
        <button type="button" className="btn-cusSecondary py-8 w-[250px]">
          放棄變更
        </button>
        <button type="submit" className="btn-cusSecondary py-8 w-[250px]">
          儲存
        </button>
      </div>
    </form>
  );
};

export default OtherIntakeForm;
