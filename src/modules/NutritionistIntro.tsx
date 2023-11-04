import Image from "next/image";
import NutritionistComment from "./NutritionistComment";

const NutritionistIntro = () => {
  return (
    <>
      <div className="profile rounded-20 flex p-20 bg-white">
        <div className="bg-secondary-200 rounded-15 w-[227px]" />
        <div className="flex flex-col ms-10 gap-20 max-w-[349px]">
          <h3 className="text-24 font-normal">陳瘦瘦 營養師</h3>
          <ul className="w-fit flex gap-8 -mt-12">
            <li className="text-14 border-primary-500 text-primary-500 px-12 rounded-l-35 rounded-r-35 border">
              體重控制
            </li>
            <li className="text-14 border-primary-500 text-primary-500 px-12 rounded-l-35 rounded-r-35 border">
              上班族營養
            </li>
            <li className="text-14 border-primary-500 text-primary-500 px-12 rounded-l-35 rounded-r-35 border">
              運動營養
            </li>
          </ul>
          <p className="flex items-center gap-8">
            <Image
              src="/images/icons/clipPath-black-950.svg"
              width={20}
              height={20}
              alt="gender"
            />
            女
          </p>
          <p className="flex items-center gap-8 -mt-12">
            <Image
              src="/images/icons/location.svg"
              width={20}
              height={20}
              alt="location"
            />
            高雄市
          </p>
          <ul className="education">
            <li className="flex gap-8">
              <p className="font-bold">學歷</p>
              <p>中山醫學大學營養學系</p>
            </li>
            <li className="flex gap-8 mt-12">
              <p className="whitespace-nowrap font-bold">經歷</p>
              <p>
                火箭隊健康諮詢機構 營養師
                <br />
                超級健康營養健身公司 營養師
                <br />
                無敵舒適飯店 營養師
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="about rounded-20 bg-white p-24">
        <h3 className="font-bold text-18 text-primary-500">關於我</h3>
        <p className="mt-12">
          致力於提供個人化的營養指導
          <br />
          憑藉多年的經驗，我幫助人們實現健康目標，提供專業的飲食建議和支持。
          <br />
          讓我們一起走上健康之路，共同追求最佳的身體狀態！
          <br />
          <br />
          我是一位具有10年豐富經驗的營養師，專注於體重控制、上班族營養和運動營養。
          <br />
          透過個性化的飲食計劃，我幫助人們實現健康的體重目標，
          <br />
          並在忙碌的上班族生活中維持均衡的營養。
          <br />
          同時，我擅長設計適合各種運動需求的營養方案，提供持久的能量和最佳的身體表現。
          <br />
          讓我協助您實現健康生活，充滿活力和快樂！
        </p>
      </div>
      <div className="courseIntro rounded-20 bg-white p-24">
        <h3 className="font-bold text-18 text-primary-500">課程介紹</h3>
        <p className="mt-12">
          <strong>體重控制課程</strong>
          <br />
          這個課程針對那些希望減重或增重的人設計。我們將通過詳細的健康評估，包括身體質量指數（BMI）、體脂率、代謝率等，制定個性化的飲食計劃。課程將涵蓋健康飲食的基本原則、食材的選擇、食物的攝取量和均衡，以及激勵和目標設定的技巧。
          <br />
          <br />
          <strong>上班族營養課程</strong>
          <br />
          這個課程專為在忙碌的上班族設計，旨在幫助他們在繁忙的工作生活中保持均衡的營養。課程將包括快速、健康的便當和午餐選擇、勞動節奏下的小吃替代品、提高能量和專注力的食物等。我們將提供實用的建議，讓上班族在忙碌的日程中也能維護良好的健康狀態。
          <br />
          <br />
          <strong>運動營養課程</strong>
          <br />
          這個課程針對運動愛好者和運動員，旨在優化他們的飲食，以提高體能、加速康復和提升運動表現。我們將探討運動前、中、後的營養需求，包括適量的蛋白質攝取、碳水化合物的選擇、水分補充等。此外，我們將介紹運動時的能量食品和運動後的恢復餐，以確保肌肉恢復、脫水的防治和運動傷害的預防。
        </p>
      </div>
      <div className="comment rounded-20 p-20 bg-white">
        <div className="flex gap-8">
          <h3 className="font-bold text-18 text-primary-500">評價(10)</h3>
          <div className="flex gap-4 ml-4 items-center">
            <Image
              src="/images/icons/full-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <Image
              src="/images/icons/empty-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <Image
              src="/images/icons/empty-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <Image
              src="/images/icons/empty-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <Image
              src="/images/icons/empty-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            4.8
          </div>
        </div>
        <ul className="flex flex-wrap gap-12 mt-10">
          <li>
            <NutritionistComment />
          </li>
          <li>
            <NutritionistComment />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NutritionistIntro;
