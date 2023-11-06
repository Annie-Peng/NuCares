import CourseForm from "@/common/components/course/CourseForm";
import {
  usePlanGetApiQuery,
  usePlanPostApiMutation,
} from "@/common/redux/service/plan";
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
  const [planPostApi] = usePlanPostApiMutation();

  if (isLoading || !renderData) {
    return <p>Plan is Loading</p>;
  }

  if (error) {
    console.log(error);
  }

  console.log(renderData);

  const handleAddCourseClick = () => {
    const newKey = `${new Date().getTime()}-${courseForms.length}`;
    setCourseForms([...courseForms, <CourseAddForm key={newKey} />]);
    console.log(newKey);
  };

  const handleDeleteClick = (key) => {
    const newCourseForms = courseForms.filter((courseForm) => {
      console.log(courseForm.key, key);
      return courseForm.key !== key;
    });
    setCourseForms(newCourseForms);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      let body = {};
      formData.forEach((value, key) => {
        body[key] = value;
      });
      console.log(body);
      const result = await planPostApi({ Token, body }).unwrap();

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2 className="cusPrimaryTitle">課程方案</h2>
      <form className="p-20 bg-white mt-24 rounded-15" onSubmit={handleSubmit}>
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
                  onClick={() => handleDeleteClick(form.key)}
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
