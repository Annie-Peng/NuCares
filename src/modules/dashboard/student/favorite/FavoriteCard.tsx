import { useFavoritePostApiMutation } from "@/common/redux/service/favorite";
import { NutritionistDataType } from "@/pages/dashboard/student/favorite";
import Image from "next/legacy/image";
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
    <div className="border border-primary-400 p-16 rounded-5 flex flex-wrap gap-12 bg-white relative lg:rounded-20 lg:border-none">
      <div className="flex gap-12">
        <div className="min-w-[89px] h-[111px] relative lg:h-[200px] lg:w-[38%]">
          <Image
            src={
              nutritionistData.PortraitImage
                ? nutritionistData.PortraitImage
                : "/images/uploadphoto-no-word.svg"
            }
            layout="fill"
            alt="PortraitImage"
            className="rounded-5 object-cover"
            priority={true}
          />
        </div>
        <div className="text-left content flex flex-col lg:w-[59%]">
          <h3 className="font-normal max-w-[165px] lg:text-20 lg:max-w-[208px]">
            {nutritionistData.Title} 營養師
          </h3>
          <ul className="text-12 w-fit flex flex-wrap gap-8 mt-8">
            {nutritionistData.Expertise.map((tag, index) => (
              <li
                key={index}
                className="border-primary-500 text-primary-500 px-12 rounded-l-35 rounded-r-35 border"
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="hidden h-[96px] lg:mt-auto lg:block">
            <span className="aboutMe hideText-4">
              {nutritionistData.AboutMe}
            </span>
          </p>
          <button
            type="button"
            onClick={handleFavoriteClick}
            className="absolute top-16 right-16"
          >
            <Image
              src="/images/icons/favorite-fill.svg"
              layout="fixed"
              width={30}
              height={30}
              alt="favorite"
            />
          </button>
        </div>
      </div>
      <p className="text-14 mt-12 lg:h-[96px] lg:hidden">
        <span className="aboutMe hideText-4">{nutritionistData.AboutMe}</span>
      </p>
      <Link
        href={`/nutritionist-list/${nutritionistData.Id}`}
        className="text-center mt-20 w-full btn-cusBigSecondary lg:mt-4"
      >
        預約課程
      </Link>
    </div>
  );
};

export default FavoriteCard;
