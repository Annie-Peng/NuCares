import CourseNormalCard from "@/modules/CourseNormalCard";
import NutritionistIntro from "@/modules/NutritionistIntro";

const NutritionistIdPage = () => {
  return (
    <div className="container cusGrid grid my-24">
      <div className="col-start-2 col-span-6 flex flex-col gap-16">
        <NutritionistIntro />
      </div>
      <div className="col-end-12 col-span-4 bg-white p-20 self-start rounded-20">
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
