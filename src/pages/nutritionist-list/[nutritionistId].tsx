import CourseNormalCard from "@/common/components/CourseNormalCard";
import NutritionistIntro from "@/modules.tsx/NutritionistIntro";

const NutritionistIdPage = () => {
  return (
    <div className="container cusGrid grid mt-74">
      <div className="col-start-2 col-span-6 bg-black-300 h-screen flex flex-col gap-14">
        <NutritionistIntro />
      </div>
      <div className="col-end-12 col-span-4 bg-primary-300 h-screen">
        <ul className="flex flex-col gap-22">
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
