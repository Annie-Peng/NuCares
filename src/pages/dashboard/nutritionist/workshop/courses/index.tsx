import MetaData from "@/common/components/MetaData";
import { showLoading } from "@/common/redux/features/loading";
import { usePlanGetApiQuery } from "@/common/redux/service/plan";
import wrapper from "@/common/redux/store";
import CourseAddForm from "@/modules/dashboard/nutritionist/workshop/CourseAddForm";
import CourseBigCard from "@/modules/dashboard/nutritionist/workshop/CourseBigCard";
import { AuthType, PlanType } from "@/types/interface";
import { getCookies } from "cookies-next";
import Image from "next/legacy/image";
import { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface NutritionistCoursePageProps {
  auth: AuthType;
}

const NutritionistCoursePage: FC<NutritionistCoursePageProps> = ({ auth }) => {
  const Token = auth.Token;
  const [courseForms, setCourseForms] = useState<ReactElement[]>([]);
  const dispatch = useDispatch();

  const { data: renderData, isLoading, error } = usePlanGetApiQuery({ Token });

  useEffect(() => {
    if (isLoading) {
      dispatch(showLoading(true));
      return;
    }
    if (error) {
      console.log(error);
    }

    if (renderData) {
      dispatch(showLoading(false));
    }
  }, [renderData, isLoading, error, dispatch]);

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
        formKey={newKey}
        handleDeleteClick={handleDeleteClick}
        Token={Token}
      />,
    ]);
  };

  if (!renderData) return;

  return (
    <>
      <MetaData title="課程方案" />
      <div className="container py-20 lg:py-0">
        <h2 className="cusPrimaryTitle">課程方案</h2>
        <div className="px-20 lg:py-20 bg-white mt-32 rounded-15">
          <ul className="flex flex-col gap-20">
            {renderData.Data.map((planData: PlanType) => (
              <li key={planData.Id}>
                <CourseBigCard Token={Token} planData={planData} />
              </li>
            ))}
          </ul>
          <ul>
            {courseForms.map((form) => (
              <li
                key={form.key}
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
              layout="fixed"
              width={20}
              height={20}
            />
            新增方案
          </button>
        </div>
      </div>
    </>
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
