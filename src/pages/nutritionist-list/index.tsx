import usePagination from "@/common/hooks/usePagination";
import NutritionistCard from "@/modules/NutritionistCard";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
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
  filter: string;
  page: string;
  sort: string;
}

const filterTabs = [
  { name: "體重控制", enName: "Weight" },
  { name: "上班族營養", enName: "Colleague" },
  { name: "孕期營養", enName: "Pregnant" },
  { name: "樂玲營養與保健", enName: "Health" },
];

const sortTabs = [
  { name: "評價最高", enName: "HeighestComment" },
  { name: "評價數量最多", enName: "MostComment" },
];

const NutritionistListPage: FC<NutritionistListPageProps> = ({
  nutritionistsRenderData,
  pagination,
  filter,
  page,
  sort,
}) => {
  const url = "/nutritionist-list?page=";

  const router = useRouter();

  console.log(nutritionistsRenderData, pagination, filter, page, sort);

  const { showPage, setShowPage, renderPaginationData } = usePagination({
    pagination,
    url,
    filter: filter === null ? "" : filter,
    sort: sort === null ? "" : sort,
  });

  const handleFilterClick = (filterTag: string) => {
    if (filterTag === filter) {
      router.push(`${url}1${sort && `&sort=${sort}`}`, undefined, {
        shallow: false,
      });
    } else {
      router.push(
        `${url}1&filter=${filterTag}${sort && `&sort=${sort}`}`,
        undefined,
        {
          shallow: false,
        }
      );
    }
  };

  const handleSortClick = (sortTag: string) => {
    if (sortTag === sort) {
      router.push(`${url}1${filter && `&filter=${filter}`}`, undefined, {
        shallow: false,
      });
    } else {
      router.push(
        `${url}1${filter && `&filter=${filter}`}&sort=${sortTag}`,
        undefined,
        {
          shallow: false,
        }
      );
    }
  };

  return (
    <div className="container grid cusGrid my-24">
      <div className="col-span-4 lg:col-start-2 lg:col-span-10">
        <div className="text-center text-20 font-bold">
          為您找到合適的營養師
        </div>
        <ul className="flex flex-wrap justify-between gap-4 text-center mt-24 text-16 font-bold lg:flex-nowrap lg:gap-10 lg:text-18">
          {filterTabs.map((tab, index) => {
            const tabClass =
              tab.enName === filter
                ? "border border-secondary-600 bg-secondary-500 text-white"
                : "btn-cusWritePrimary bg-white hover:bg-primary-50";
            return (
              <li key={index} className="w-[48%] lg:w-full">
                <input
                  type="button"
                  name={tab.enName}
                  value={tab.name}
                  className={`cursor-pointer !rounded-15 !p-20 h-full w-full flex justify-center items-center ${tabClass} lg:w-full`}
                  onClick={() => handleFilterClick(tab.enName)}
                />
              </li>
            );
          })}
        </ul>
        <div className="mt-[36px] flex flex-wrap justify-end items-center">
          <span className="font-bold">排列依序</span>
          <ul className="flex gap-8 ms-8 text-14">
            {sortTabs.map((tab, index) => {
              const tabClass =
                tab.enName === sort
                  ? "text-white bg-primary-500"
                  : "border-black-950 hover:border-primary-500 hover:text-primary-500";
              return (
                <li key={index}>
                  <input
                    type="button"
                    name={tab.enName}
                    value={tab.name}
                    className={`cursor-pointer border rounded-50 py-4 px-10 ${tabClass}`}
                    onClick={() => handleSortClick(tab.enName)}
                  />
                </li>
              );
            })}
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
    const page = query.page || "";
    const filter = query.filter || "";
    const sort = query.sort || "";

    const queryStringPage = page ? `&page=${page}` : "";
    const queryStringFilter = filter ? `filter=${filter}` : "";
    const queryStringSort = sort ? `&sort=${sort}` : "";

    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/nutritionist/search?${queryStringFilter}${queryStringSort}${queryStringPage}`
    );

    const data = result.data;

    return {
      props: {
        nutritionistsRenderData: data.Data,
        pagination: data.Pagination,
        page: page,
        filter: filter,
        sort: sort,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
