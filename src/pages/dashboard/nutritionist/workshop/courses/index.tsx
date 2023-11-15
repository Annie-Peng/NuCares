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

interface RenderDataType {
  Id: number;
  Rank: number;
  CourseName: string;
  CourseWeek: number;
  CoursePrice: number;
  Tag: string;
  Detail: string;
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

  const handleDeleteClick = (formKey: string) => {
    setCourseForms((prevCourseForms) =>
      prevCourseForms.filter((form) => form.key !== formKey)
    );
  };

  const handleAddCourseClick = () => {
    const newKey = `${new Date().getTime()}-${courseForms.length}`;
    setCourseForms((prevCourseForms) => [
      ...prevCourseForms,
      <CourseAddForm
        key={newKey}
        courseForms={courseForms}
        formKey={newKey}
        handleDeleteClick={handleDeleteClick}
        Token={Token}
      />,
    ]);
  };

  console.log(courseForms);

  return (
    <div className="container">
      <h2 className="cusPrimaryTitle">課程方案</h2>
      <div className="p-20 bg-white mt-24 rounded-15">
        <ul className="flex flex-col gap-20">
          {renderData.Data.map((item: RenderDataType) => (
            <li key={item.Id}>
              <CourseBigCard Token={Token} planData={item} />
            </li>
          ))}
        </ul>
        <ul>
          {courseForms.map((form, index) => (
            <li
              key={index}
              className="mt-20 px-20 pt-20 pb-40 bg-white rounded-10 border border-secondary-400 text-left"
            >
              {form}
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
      </div>
    </div>
  );
};

export default NutritionistCoursePage;

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ req, res }) => {
      const auth = getCookies({ req, res });
      if (!auth.Token) {
        res.writeHead(302, { Location: "/login" });
        res.end();
      }
      return {
        props: {
          auth,
        },
      };
    }
);
