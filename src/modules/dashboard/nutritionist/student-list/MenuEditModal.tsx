import BigModal from "@/common/components/BigModal";

const MenuEditModal = () => {
  return (
    <BigModal title="學員攝取份量">
      <div className="text-center">
        <p>今天 10月1日(日)</p>
        <div className="breakfastQuantity">
          <h5 className="bg-secondary-300">早餐</h5>
          <ul className="flex justify-center">
            <li>
              <label htmlFor="breakfastStarchQuantity">
                <p>澱粉</p>
                <select id="breakfastStarchQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="breakfastProTeinQuantity">
                <p>蛋白質</p>
                <select id="breakfastProTeinQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="breakfastVegetableQuantity">
                <p>蔬菜</p>
                <select id="breakfastVegetableQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
        <div className="lunchQuantity">
          <h5 className="bg-secondary-300">午餐</h5>
          <ul className="flex justify-center">
            <li>
              <label htmlFor="lunchStarchQuantity">
                <p>澱粉</p>
                <select id="lunchStarchQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="lunchProTeinQuantity">
                <p>蛋白質</p>
                <select id="lunchProTeinQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="lunchVegetableQuantity">
                <p>蔬菜</p>
                <select id="lunchVegetableQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
        <div className="dinnerQuantity">
          <h5 className="bg-secondary-300">晚餐</h5>
          <ul className="flex justify-center">
            <li>
              <label htmlFor="dinnerStarchQuantity">
                <p>澱粉</p>
                <select id="dinnerStarchQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="dinnerProTeinQuantity">
                <p>蛋白質</p>
                <select id="dinnerProTeinQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="dinnerVegetableQuantity">
                <p>蔬菜</p>
                <select id="dinnerVegetableQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
        <div className="otherQuantity">
          <h5 className="bg-secondary-300">其他</h5>
          <ul className="flex justify-center">
            <li>
              <label htmlFor="oilQuantity">
                <p>油脂</p>
                <select id="oilQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="fruitQuantity">
                <p>水果</p>
                <select id="fruitQuantity">
                  <option label="">請選擇</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="waterAmount">
                <p>飲水</p>
                <select id="waterAmount">
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
      </div>
    </BigModal>
  );
};

export default MenuEditModal;
