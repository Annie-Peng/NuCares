const MealForm = () => {
  return (
    <form>
      <label htmlFor="photo">
        <h5>食物照片</h5>
        <p>請將早餐照片上傳</p>
        <input type="file" name="photo" />
      </label>
      <label htmlFor="food">
        <h5>食物名稱</h5>
        <p>請將早餐所有食物名稱列出來</p>
        <textarea className="cusTextarea" name="food" />
      </label>
      <div className="quantity">
        <h5>份量*</h5>
        <ul className="flex text-center">
          <li>
            <label htmlFor="starchQuantity">
              <p>澱粉</p>
              <select id="starchQuantity">
                <option label="">請選擇</option>
              </select>
            </label>
          </li>
          <li>
            <label htmlFor="proTeinQuantity">
              <p>蛋白質</p>
              <select id="proTeinQuantity">
                <option label="">請選擇</option>
              </select>
            </label>
          </li>
          <li>
            <label htmlFor="vegetableQuantity">
              <p>蔬菜</p>
              <select id="vegetableQuantity">
                <option label="">請選擇</option>
              </select>
            </label>
          </li>
        </ul>
      </div>
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

export default MealForm;
