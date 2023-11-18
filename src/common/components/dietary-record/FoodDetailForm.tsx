import { FoodDetailContentType } from "@/common/lib/dashboard/dietary-record/foodDetail";
import Image from "next/image";
import { FC } from "react";

interface FoodDetailFormProps {
  data: FoodDetailContentType;
}

const FoodDetailForm: FC<FoodDetailFormProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center text-black-600">
      <div className="flex justify-center items-center gap-14 text-20 font-bold lg:gap-[36px] lg:text-[36px]">
        <div>
          <div className="relative w-[84px] h-[84px] mx-auto lg:w-[140px] lg:h-[140px]">
            <Image src={data.Photo} fill alt="starchQty" />
          </div>
          <p className="text-14 text-center mt-8">{data.photoName}</p>
        </div>
        {data.equalContent && (
          <>
            <p className="w-8">=</p>
            <p className="whitespace-nowrap">{data.equalContent}</p>
          </>
        )}
        <p className="w-8">=</p>
        <p className="whitespace-nowrap">{data.equalQty}</p>
      </div>
      <p className="text-[#000000] mt-[36px] text-14 lg:text-16">
        {data.Detail}
      </p>
      <div className="mt-[36px]">
        <p className="text-center text-18 font-bold">1份舉例</p>
        <ul className="text-14 flex gap-16 mt-20 flex-wrap lg:flex-nowrap">
          {data.Example.map((item, index) => {
            return (
              <li key={index} className="min-w-[260px]">
                <p
                  key={index}
                  className="font-bold rounded-35 border text-center border-black-600"
                >
                  {item.Title}
                </p>
                <ul className="mt-16">
                  {item.food.map((food, foodIndex) => {
                    return (
                      <li
                        key={foodIndex}
                        className="flex gap-[20px] lg:gap-[50px] ml-10 lg:ml-12"
                      >
                        <p className="w-[100px] lg:w-[95px]">{food.foodName}</p>
                        <p>{food.foodQty}</p>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default FoodDetailForm;
