import CourseNormalCard from "@/modules/CourseNormalCard";
import NutritionistIntro from "@/modules/NutritionistIntro";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

interface NutritionistType {
  Id: number;
}

export interface CourseType {
  Rank: string;
  CourseName: string;
  CourseWeek: string;
  CoursePrice: string;
  Tag: string;
  Detail: string;
}

export interface CommentType {
  UserName: string;
  Content: string;
  Rate: number;
  CreateDate: string;
}

export interface NutritionistDataType {
  Id: string;
  Title: string;
  PortraitImage: string;
  Expertise: string[];
  Gender: string;
  City: string;
  Education: string;
  Experience: string;
  AboutMe: string;
  CourseIntro: string;
  Course: CourseType[];
  Comment: CommentType[];
  RateAVG: number;
}

interface NutritionistIdPageProps {
  nutritionistData: NutritionistDataType[];
}

const NutritionistIdPage: FC<NutritionistIdPageProps> = ({
  nutritionistData,
}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Data is Loading ...</h1>;
  }

  if (nutritionistData.length === 0) {
    return;
  }

  return (
    <div className="container cusGrid grid my-24">
      <div className="col-span-4 flex flex-col gap-16 lg:col-start-2 lg:col-span-6">
        <NutritionistIntro nutritionistData={nutritionistData[0]} />
      </div>
      <div className="mt-16 col-span-4 bg-white p-20 self-start rounded-20 lg:col-end-12 lg:mt-0">
        <ul className="flex flex-col gap-10">
          {nutritionistData[0].Course.length > 0 ? (
            nutritionistData[0].Course.map((course, index) => (
              <li key={index}>
                <CourseNormalCard course={course} />
              </li>
            ))
          ) : (
            <div className="border border-primary-200 p-20 rounded-15 flex flex-col gap-12 relative">
              <p className="leading-[261px] font-bold text-black-300 mx-auto">
                營養師尚未建立課程
              </p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NutritionistIdPage;

export const getStaticPaths = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/nutritionistsid`
  );
  const nutritionists = result.data.Data;

  const paths = nutritionists.map((nutritionist: NutritionistType) => {
    return {
      params: { nutritionistId: nutritionist.Id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetServerSideProps = async (context) => {
  try {
    const nutritionistId = context.params?.nutritionistId as string;

    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/nutritionist?nutritionistid=${nutritionistId}`
    );
    const data = result.data;

    if (data.Data.length === 0) {
      return { notFound: true };
    }

    return {
      props: {
        nutritionistData: data.Data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
