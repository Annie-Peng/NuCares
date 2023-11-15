import { useFavoritePostApiMutation } from "@/common/redux/service/favorite";
import { NutritionistDataType } from "@/pages/dashboard/student/favorite";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface FavoriteCardProps {
  Token: string;
  nutritionistData: NutritionistDataType;
}

const FavoriteCard: FC<FavoriteCardProps> = ({ Token, nutritionistData }) => {
  const [favoritePostApi] = useFavoritePostApiMutation();

  const handleFavoriteClick = async () => {
    try {
      const result = await favoritePostApi({
        Token,
        NutritionistId: nutritionistData.Id,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-16 rounded-20 flex flex-wrap gap-12 bg-white relative">
      <div className="relative w-full h-[200px] lg:w-[38%]">
        <Image
          src={
            // nutritionistData.PortraitImage
            //   ? nutritionistData.PortraitImage
            //   : "/images/uploadphoto-no-word.svg"
            "/images/uploadphoto-no-word.svg"
          }
          fill
          alt="PortraitImage"
          objectFit="cover"
          className="rounded-5"
        />
      </div>
      <div className="text-left content w-full flex flex-col lg:w-[59%]">
        <h3 className="text-20 font-normal">{nutritionistData.Title} 營養師</h3>
        <ul className="text-12 w-fit flex gap-8 mt-8">
          {/* {nutritionistData.Expertise.map((tag, index) => (
            <li
              key={index}
              className="border-primary-500 text-primary-500 px-12 rounded-l-35 rounded-r-35 border"
            >
              {tag}
            </li>
          ))} */}
        </ul>
        <p className="mt-16 aboutMe">{nutritionistData.AboutMe}</p>
        <button
          type="button"
          onClick={handleFavoriteClick}
          className="absolute top-16 right-16"
        >
          <Image
            src="/images/icons/favorite-fill.svg"
            width={30}
            height={30}
            alt="favorite"
          />
        </button>
      </div>
      <Link
        href={`/nutritionist-list/${nutritionistData.Id}`}
        className="mt-4 w-full btn-cusBigSecondary"
      >
        預約課程
      </Link>
    </div>
  );
};

export default FavoriteCard;
