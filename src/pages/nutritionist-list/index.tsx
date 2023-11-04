import usePagination from "@/common/hooks/usePagination";
import NutritionistCard from "@/modules/NutritionistCard";

const NutritionistListPage = () => {
  const { showPage, setShowPage, renderData } = usePagination();

  return (
    <div className="container grid cusGrid my-24">
      <div className="col-start-2 col-span-10">
        <div className="text-center text-20 font-bold">
          為您找到合適的營養師
        </div>
        <ul className="flex justify-between gap-x-10 text-center mt-24 text-20 font-bold">
          <li className="!p-20 w-full btn-cusWritePrimary text-18 !rounded-15 bg-white flex justify-center items-center">
            <h2>體重控制</h2>
          </li>
          <li className="!p-20 w-full btn-cusWritePrimary text-18 !rounded-15 bg-white flex justify-center items-center">
            <h2>上班族營養</h2>
          </li>
          <li className="!p-20 w-full btn-cusWritePrimary text-18 !rounded-15 bg-white flex justify-center items-center">
            <h2>孕期營養</h2>
          </li>
          <li className="!p-20 w-full btn-cusWritePrimary text-18 !rounded-15 bg-white flex justify-center items-center">
            <h2>樂玲營養與保健</h2>
          </li>
        </ul>
        <div className="mt-[36px] flex justify-end items-center">
          <span className="font-bold">排列依序</span>
          <ul className="flex gap-8 ms-8">
            <li className="border border-black-950 rounded-50 py-4 px-10">
              價格最低
            </li>
            <li className="border border-black-950 rounded-50 py-4 px-10">
              評價最高
            </li>
            <li className="border border-black-950 rounded-50 py-4 px-10">
              評價數量最多
            </li>
          </ul>
        </div>
        <ul>
          <li className="bg-white rounded-20 mt-16 p-40 flex gap-20">
            <NutritionistCard />
          </li>
        </ul>
        {renderData}
      </div>
    </div>
  );
};

export default NutritionistListPage;
