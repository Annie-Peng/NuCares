import Image from "next/image";
import CourseMiniCard from "./CourseMiniCard";
import { FC } from "react";
import Link from "next/link";
import { NutritionistsRenderDataType } from "@/pages/nutritionist-list";

interface NutritionistCardProps {
  nutritionistData: NutritionistsRenderDataType;
}

const NutritionistCard: FC<NutritionistCardProps> = ({ nutritionistData }) => {
  return (
    <>
      <Link
        href={`/nutritionist-list/${nutritionistData.Id}`}
        className="relative w-full h-[283px] lg:w-[227px]"
      >
        <Image
          src={
            nutritionistData.PortraitImage
              ? nutritionistData.PortraitImage
              : "/images/uploadphoto-no-word.svg"
          }
          fill
          alt="PortraitImage"
          objectFit="cover"
          className="rounded-20"
        />
      </Link>
      <div className="content w-full relative max-w-[454px] flex flex-col">
        <Link href={`/nutritionist-list/${nutritionistData.Id}`}>
          <h3 className="text-24 font-normal">
            {nutritionistData.Title} 營養師
          </h3>
        </Link>
        <ul className="text-12 w-fit flex gap-8 mt-8 lg:text-14">
          {nutritionistData.Expertise.map((tag, index) => (
            <li
              key={index}
              className="border-primary-500 text-primary-500 px-12 rounded-l-35 rounded-r-35 border"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-24 grow">{nutritionistData.AboutMe}</p>
        <Link
          href={`/nutritionist-list/${nutritionistData.Id}`}
          className="ms-auto"
        >
          了解更多課程{">>"}
        </Link>
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
        {nutritionistData.Plan.length > 0 ? (
          nutritionistData.Plan.map((plan, index) => (
            <li key={index}>
              <CourseMiniCard plan={plan} />
            </li>
          ))
        ) : (
          <div className="border border-primary-200 p-20 rounded-15 flex flex-col gap-12 relative">
            <p className="leading-[96px] font-bold text-black-300 mx-auto">
              營養師尚未建立課程
            </p>
          </div>
        )}
      </ul>
    </>
  );
};

export default NutritionistCard;
