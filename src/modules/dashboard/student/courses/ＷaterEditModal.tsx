import NormalModal from "@/common/components/NormalModal";

const WaterEditModal = () => {
  return (
    <NormalModal title="飲水">
      <form>
        <label htmlFor="food">
          <h5>飲品名稱</h5>
          <p>請將飲品名稱列出來</p>
          <textarea className="cusTextarea" name="food" />
        </label>
        <label htmlFor="waterAmount">
          <h5>份量*</h5>
          <p>飲水</p>
          <select id="waterAmount">
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
    </NormalModal>
  );
};

export default WaterEditModal;
