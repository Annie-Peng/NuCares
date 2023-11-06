import { usePlanGetApiQuery } from "@/common/redux/service/plan";
import wrapper from "@/common/redux/store";
import CourseAddForm from "@/modules/dashboard/nutritionist/workshop/CourseAddForm";
import CourseBigCard from "@/modules/dashboard/nutritionist/workshop/CourseBigCard";
import { getCookies } from "cookies-next";
import Image from "next/image";
import { FC, ReactElement, useState } from "react";

interface NutritionistCoursePageProps {
  [key: string]: any;
}

const NutritionistCoursePage: FC<NutritionistCoursePageProps> = ({ auth }) => {
  const Token = auth.Token;
  const [courseForms, setCourseForms] = useState<ReactElement[]>([]);

  const { data: renderData, isLoading, error } = usePlanGetApiQuery({ Token });

  if (isLoading || !renderData) {
    return <p>Plan is Loading</p>;
  }

  if (error) {
    console.log(error);
  }

  console.log(renderData);

  const handleAddCourseClick = () => {
    setCourseForms([
      ...courseForms,
      <CourseAddForm key={courseForms.length} />,
    ]);
  };

  return (
    <div className="container">
      <h2 className="cusPrimaryTitle">課程方案</h2>
      <form className="p-20 bg-white mt-24 rounded-15">
        <ul className="flex flex-col gap-20">
          {renderData.Data.map((item) => (
            <li key={item.Id}>
              <CourseBigCard Token={Token} planData={item} />
            </li>
          ))}
        </ul>
        <ul>
          {courseForms.map((form, index) => (
            <li
              key={index}
              className="mt-20 px-20 pt-20 pb-40 bg-white rounded-10 border border-black-200 text-left"
            >
              {form}
              <div className="text-center mt-[60px] flex flex-col gap-10 justify-center items-center lg:flex-row">
                <button
                  type="button"
                  className="btn-cusWritePrimary !py-8 w-full lg:w-[278px] order-2 lg:order-1"
                >
                  放棄變更
                </button>
                <button
                  type="submit"
                  className="btn-cusWriteSecondary !py-8 w-full lg:w-[278px] order-1 lg:order-2"
                >
                  儲存
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="text-left mx-auto btn-cusWritePrimary !px-20 !py-8 mt-32 flex items-center gap-4 lg:mt-20 lg:mx-0"
          onClick={handleAddCourseClick}
        >
          <Image
            src="/images/dashboard/nutritionist/course/add.svg"
            alt="add"
            width={20}
            height={20}
          />
          新增方案
        </button>
      </form>
    </div>
  );
};

export default NutritionistCoursePage;

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ req, res }) => {
      const auth = getCookies({ req, res });
      if (!auth.Token) {
        res.writeHead(400, { Location: "/login" });
        res.end();
      }
      return {
        props: {
          auth,
        },
      };
    }
);
