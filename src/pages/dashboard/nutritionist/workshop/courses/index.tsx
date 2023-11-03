import CourseAddForm from "@/modules/dashboard/nutritionist/workshop/CourseAddForm";
import CourseBigCard from "@/modules/dashboard/nutritionist/workshop/CourseBigCard";
import Image from "next/image";
import { ReactElement, useState } from "react";

const NutritionistCoursePage = () => {
  const [courseForms, setCourseForms] = useState<ReactElement[]>([]);

  const handleAddCourseClick = () => {
    setCourseForms([
      ...courseForms,
      <CourseAddForm key={courseForms.length} />,
    ]);
  };

  return (
    <>
      <h2 className="cusPrimaryTitle">課程方案</h2>
      <form className="p-20 bg-white mt-24 rounded-15">
        <ul className="flex flex-col gap-20">
          <li>
            <CourseBigCard />
          </li>
        </ul>
        <ul>
          {courseForms.map((form, index) => (
            <li
              key={index}
              className="mt-20 px-20 pt-20 pb-40 bg-white rounded-10 border border-black-200 text-left"
            >
              {form}
              <div className="text-center mt-[60px]">
                <button
                  type="button"
                  className="btn-cusWritePrimary !py-8 w-[278px]"
                >
                  放棄新增
                </button>
                <button
                  type="submit"
                  className="btn-cusWriteSecondary !py-8 w-[278px] ml-10"
                >
                  儲存
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="text-left btn-cusWritePrimary !px-20 !py-8 mt-20 flex items-center gap-4"
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
    </>
  );
};

export default NutritionistCoursePage;
