import BigModal from "@/common/components/BigModal";

const CourseEditModal = () => {
  return (
    <BigModal title="課程">
      <form className="mt-50 flex flex-col gap-32">
        <label htmlFor="courseOrder">
          <h5>排列順序</h5>
          <select name="courseOrder">
            <option>1</option>
          </select>
        </label>
        <label htmlFor="courseName">
          <h5>課程名稱</h5>
          <p>限18字元，超過之字無法顯示</p>
          <input type="text" name="courseOrder" />
        </label>
        <label htmlFor="courseNum">
          <h5>堂數</h5>
          <p>與學員諮詢次數</p>
          <input type="number" name="courseNum" />
        </label>
        <label htmlFor="coursePrice">
          <h5>價格</h5>
          <p>課程總價</p>
          <span>NT$</span>
          <input type="number" name="coursePrice" />
        </label>
        <label htmlFor="courseTag">
          <h5>標籤</h5>
          <p>在課程方案列表上放上標籤，吸引注意</p>
          <select name="courseTag">
            <option>請選擇</option>
          </select>
        </label>
        <label htmlFor="courseIntro">
          <h5>課程說明</h5>
          <p>限100字，超過之字無法顯示</p>
          <textarea className="cusTextarea" />
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
    </BigModal>
  );
};

export default CourseEditModal;
