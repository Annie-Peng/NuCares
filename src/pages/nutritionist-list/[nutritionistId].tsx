import CourseNormalCard from "@/modules/CourseNormalCard";
import NutritionistIntro from "@/modules/NutritionistIntro";

const NutritionistIdPage = () => {
  return (
    <div className="container cusGrid grid my-24">
      <div className="col-span-4 flex flex-col gap-16 lg:col-start-2 lg:col-span-6">
        <NutritionistIntro />
      </div>
      <div className="mt-16 col-span-4 bg-white p-20 self-start rounded-20 lg:col-end-12 lg:mt-0">
        <ul className="flex flex-col gap-10">
          <li>
            <CourseNormalCard />
          </li>
          <li>
            <CourseNormalCard />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NutritionistIdPage;
