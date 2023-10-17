import CourseMiniCard from "@/common/components/CourseMiniCard";

const NutritionistCard = () => {
  return (
    <>
      <div className="flex">
        <img width="220" height="302" className="bg-white rounded-15" />
        <div className="content max-w-[454px] ms-22">
          <h3 className="text-24 font-normal">陳瘦瘦 營養師</h3>
          <img />
          <ul className="w-fit flex gap-8 mt-12">
            <li className="border rounded-50 py-2 px-10">體重控制</li>
            <li className="border rounded-50 py-2 px-10">上班族營養</li>
            <li className="border rounded-50 py-2 px-10">運動營養</li>
          </ul>
          <p className="mt-20">
            致力於提供個人化的營養指導。憑藉多年的經驗，我幫助人們實現健康目標，提供專業的飲食建議和支持。讓我們一起走上健康之路，共同追求最佳的身體狀態！
          </p>
        </div>
        <ul className="min-w-[272px] ms-46 flex flex-col gap-8">
          <li>
            <CourseMiniCard />
          </li>
          <li>
            <CourseMiniCard />
          </li>
        </ul>
      </div>
      <p className="text-right -mt-16 after:content-['>>']">了解更多課程</p>
    </>
  );
};

export default NutritionistCard;
