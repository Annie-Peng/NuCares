import usePagination from "@/common/hooks/usePagination";
import NutritionistCard from "@/modules/NutritionistCard";
import axios from "axios";
import { GetServerSideProps } from "next";
import { FC } from "react";

export interface PlanType {
  Rank: number;
  CourseName: string;
  CourseWeek: number;
  CoursePrice: number;
  Tag: string;
}

export interface NutritionistsRenderDataType {
  Id: string;
  Title: string;
  PortraitImage: string;
  Expertise: string[];
  AboutMe: string;
  Favorite: boolean;
  Plan: PlanType[];
}

interface NutritionistListPageProps {
  nutritionistsRenderData: NutritionistsRenderDataType[];
  pagination: {
    Current_page: number;
    Total_pages: number;
  };
}

const NutritionistListPage: FC<NutritionistListPageProps> = ({
  nutritionistsRenderData,
  pagination,
}) => {
  const url = "/nutritionist-list?page=";
  const { showPage, setShowPage, renderPaginationData } = usePagination({
    pagination,
    url,
  });

  return (
    <div className="container grid cusGrid my-24">
      <div className="col-span-4 lg:col-start-2 lg:col-span-10">
        <div className="text-center text-20 font-bold">
          為您找到合適的營養師
        </div>
        <ul className="flex flex-wrap justify-between gap-4 text-center mt-24 text-16 font-bold lg:flex-nowrap lg:gap-10 lg:text-18">
          <li className="!p-20 w-[48%] btn-cusWritePrimary !rounded-15 bg-white flex justify-center items-center lg:w-full">
            <h2>體重控制</h2>
          </li>
          <li className="!p-20 w-[48%] btn-cusWritePrimary !rounded-15 bg-white flex justify-center items-center lg:w-full">
            <h2>上班族營養</h2>
          </li>
          <li className="!p-20 w-[48%] btn-cusWritePrimary !rounded-15 bg-white flex justify-center items-center lg:w-full">
            <h2>孕期營養</h2>
          </li>
          <li className="!p-20 w-[48%] btn-cusWritePrimary !rounded-15 bg-white flex justify-center items-center lg:w-full">
            <h2>樂玲營養與保健</h2>
          </li>
        </ul>
        <div className="mt-[36px] flex flex-wrap justify-end items-center">
          <span className="font-bold">排列依序</span>
          <ul className="flex gap-8 ms-8">
            <li className="border border-black-950 rounded-50 py-4 px-10">
              價格最低
            </li>
            <li className="border border-black-950 rounded-50 py-4 px-10">
              評價最高
            </li>
            <li className="border border-black-950 rounded-50 py-4 px-10">
              評價數量最多
            </li>
          </ul>
        </div>
        <ul>
          {nutritionistsRenderData.map((nutritionistData) => {
            return (
              <li
                key={nutritionistData.Id}
                className="bg-white rounded-20 mt-16 p-40 flex flex-wrap gap-20 lg:flex-nowrap"
              >
                <NutritionistCard nutritionistData={nutritionistData} />
              </li>
            );
          })}
        </ul>
        {renderPaginationData}
      </div>
    </div>
  );
};

export default NutritionistListPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { query } = context;
    const { page } = query;

    const queryString = page ? `page=${page}` : "";
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/nutritionists?${queryString}`
    );

    const data = result.data;

    return {
      props: {
        nutritionistsRenderData: data.Data,
        pagination: data.Pagination,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
