import Image from "next/legacy/image";
import NutritionistComment from "./NutritionistComment";
import { NutritionistDataType } from "@/pages/nutritionist-list/[nutritionistId]";
import { FC, useState } from "react";
import { useFavoritePostApiMutation } from "@/common/redux/service/favorite";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

interface NutritionistIntroProps {
  nutritionistData: NutritionistDataType;
}

const NutritionistIntro: FC<NutritionistIntroProps> = ({
  nutritionistData,
}) => {
  const starsNum = Array(5).fill(null);

  const [favoritePostApi] = useFavoritePostApiMutation();
  const [favorite, setFavorite] = useState(nutritionistData.Favorite);

  const router = useRouter();

  const { nutritionistId } = router.query;

  const handleFavoriteClick = async () => {
    try {
      const Token = getCookie("Token");

      if (!Token) router.push("/login");

      const result = await favoritePostApi({
        Token,
        NutritionistId: nutritionistId,
      });
      console.log(result);
      setFavorite(!favorite);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="profile rounded-20 flex flex-wrap p-20 gap-10 bg-white lg:flex-nowrap">
        <div className="w-full lg:max-w-[200px] h-[283px] relative">
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
        <div className="flex flex-col gap-20 w-full relative">
          <h3 className="text-22 font-normal lg:text-24">
            {nutritionistData.Title} 營養師
          </h3>
          <ul className="w-fit flex flex-wrap gap-8 -mt-12">
            {nutritionistData.Expertise.map((tag, index) => (
              <li
                key={index}
                className="text-14 border-primary-500 text-primary-500 px-12 rounded-l-35 rounded-r-35 border"
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-8">
            <Image
              src="/images/icons/clipPath-black-950.svg"
              layout="fixed"
              width={20}
              height={20}
              alt="gender"
            />
            {nutritionistData.Gender}
          </p>
          <p className="flex items-center gap-8 -mt-12">
            <Image
              src="/images/icons/location.svg"
              layout="fixed"
              width={20}
              height={20}
              alt="location"
            />
            {nutritionistData.City}
          </p>
          <ul className="education">
            <li className="flex flex-wrap gap-8">
              <p className="font-bold">學歷</p>
              <p>{nutritionistData.Education}</p>
            </li>
            <li className="flex flex-wrap gap-8 mt-12">
              <p className="whitespace-nowrap font-bold">經歷</p>
              <p>{nutritionistData.Experience}</p>
            </li>
          </ul>
          <button
            type="button"
            onClick={handleFavoriteClick}
            className="absolute top-[3px] right-0"
          >
            <Image
              src={
                favorite
                  ? "/images/icons/favorite-fill.svg"
                  : "/images/icons/favorite.svg"
              }
              width={30}
              height={30}
              alt="favorite"
            />
          </button>
        </div>
      </div>
      <div className="about rounded-20 bg-white p-24">
        <h3 className="font-bold text-18 text-primary-500">關於我</h3>
        <p className="mt-12">{nutritionistData.AboutMe}</p>
      </div>
      <div className="courseIntro rounded-20 bg-white p-24">
        <h3 className="font-bold text-18 text-primary-500">課程介紹</h3>
        <p className="mt-12">{nutritionistData.CourseIntro}</p>
      </div>
      <div className="comment rounded-20 p-20 bg-white">
        <div className="flex gap-8">
          <h3 className="font-bold text-18 text-primary-500">
            評價({nutritionistData.Comment.length})
          </h3>
          <ul className="flex gap-4 ml-4 items-center">
            {starsNum.map((star, index) => {
              if (index + 1 <= nutritionistData.RateAVG) {
                return (
                  <li key={index} className="block w-[20px] h-[20px]">
                    <Image
                      src="/images/icons/full-star.svg"
                      layout="fixed"
                      width={20}
                      height={20}
                      alt="full-star"
                    />
                  </li>
                );
              } else {
                return (
                  <li key={index} className="block w-[20px] h-[20px]">
                    <Image
                      src="/images/icons/empty-star.svg"
                      layout="fixed"
                      width={20}
                      height={20}
                      alt="empty-star"
                    />
                  </li>
                );
              }
            })}
            {nutritionistData.RateAVG}
          </ul>
        </div>
        <ul className="flex flex-wrap gap-12 mt-10">
          {nutritionistData.Comment.map((comment, index) => (
            <li key={index} className="w-full lg:max-w-[280px] h-[226px]">
              <NutritionistComment comment={comment} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NutritionistIntro;
