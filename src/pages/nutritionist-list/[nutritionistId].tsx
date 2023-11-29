import MetaData from "@/common/components/MetaData";
import wrapper from "@/common/redux/store";
import CourseNormalCard from "@/modules/CourseNormalCard";
import NutritionistIntro from "@/modules/NutritionistIntro";
import {
  CommentType,
  Favorite,
  Gender,
  NutritionistIntroDataType,
  PlanType,
  RateAVG,
} from "@/types/interface";
import axios from "axios";
import { getCookies } from "cookies-next";
import { useRouter } from "next/router";
import { FC } from "react";

export interface NutritionistDataType extends NutritionistIntroDataType {
  Gender: Gender;
  Plan: PlanType[];
  Comment: CommentType[];
  RateAVG: RateAVG;
  Favorite: Favorite;
}

interface NutritionistIdPageProps {
  nutritionistData: NutritionistDataType;
}

const NutritionistIdPage: FC<NutritionistIdPageProps> = ({
  nutritionistData,
}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Data is Loading ...</h1>;
  }

  return (
    <>
      <MetaData
        title={nutritionistData.Title}
        description={nutritionistData.Expertise.toString()}
      />
      <div className="container cusGrid grid my-24 py-40">
        <div className="col-span-4 flex flex-col gap-16 lg:col-start-2 lg:col-span-6">
          <NutritionistIntro nutritionistData={nutritionistData} />
        </div>
        <div className="mt-16 col-span-4 bg-white p-20 self-start rounded-20 lg:col-end-12 lg:mt-0">
          <ul className="flex flex-col gap-10">
            {nutritionistData.Plan.length > 0 ? (
              nutritionistData.Plan.map((plan, index) => (
                <li key={index}>
                  <CourseNormalCard plan={plan} />
                </li>
              ))
            ) : (
              <div className="border border-primary-200 p-20 rounded-15 flex flex-col gap-12 relative">
                <p className="leading-[203px] font-bold text-black-300 mx-auto">
                  營養師尚未建立課程
                </p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NutritionistIdPage;

export const getServerSideProps = wrapper.getServerSideProps(
  () => async (context) => {
    try {
      const nutritionistId = context.params?.nutritionistId as string;
      const { req, res } = context;
      const auth = getCookies({ req, res });
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/nutritionist/${nutritionistId}`,
        {
          headers: {
            Authorization: auth.Token,
          },
        }
      );
      const data = result.data;

      return {
        props: {
          nutritionistData: data.Data,
        },
      };
    } catch (error) {
      return { notFound: true };
    }
  }
);
