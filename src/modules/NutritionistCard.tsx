import Image from "next/image";
import CourseMiniCard from "./CourseMiniCard";

const NutritionistCard = () => {
  return (
    <>
      <div className="w-full h-[283px] bg-secondary-200 rounded-20 lg:w-[227px]"></div>
      <div className="content w-full relative max-w-[454px] flex flex-col">
        <h3 className="text-24 font-normal">陳瘦瘦 營養師</h3>
        <ul className="text-12 w-fit flex gap-8 mt-8 lg:text-14">
          <li className="border-primary-500 text-primary-500 px-12 rounded-l-35 rounded-r-35 border">
            體重控制
          </li>
          <li className="border-primary-500 text-primary-500 px-12 rounded-l-35 rounded-r-35 border">
            上班族營養
          </li>
          <li className="border-primary-500 text-primary-500 px-12 rounded-l-35 rounded-r-35 border">
            運動營養
          </li>
        </ul>
        <p className="mt-24 grow">
          致力於提供個人化的營養指導。憑藉多年的經驗，我幫助人們實現健康目標，提供專業的飲食建議和支持。讓我們一起走上健康之路，共同追求最佳的身體狀態！
        </p>
        <button className="ms-auto">了解更多課程{">>"}</button>
        <button type="button">
          <Image
            src="/images/icons/favorite.svg"
            width={30}
            height={30}
            alt="favorite"
            className="absolute top-0 right-0"
          />
        </button>
      </div>
      <ul className="min-w-[260px] flex flex-col gap-16">
        <li>
          <CourseMiniCard />
        </li>
        <li>
          <CourseMiniCard />
        </li>
      </ul>
    </>
  );
};

export default NutritionistCard;
