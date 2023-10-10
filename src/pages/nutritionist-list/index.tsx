import NutritionistCard from "@/modules.tsx/NutritionistCard";

const NutritionistListPage = () => {
  return (
    <div className="container grid cusGrid">
      <div className="col-start-2 col-span-10">
        <div className="text-center text-20 font-bold">選擇營養師專長</div>
        <ul className="flex justify-between gap-x-10 text-center mt-28 text-20 font-bold">
          <li className="py-[25px] border w-full rounded-15">
            <h2>體重控制</h2>
          </li>
          <li className="py-[25px] border w-full rounded-15">
            <h2>上班族營養</h2>
          </li>
          <li className="py-[25px] border w-full rounded-15">
            <h2>孕期營養</h2>
          </li>
          <li className="py-[25px] border w-full rounded-15">
            <h2>樂玲營養與保健</h2>
          </li>
        </ul>
        <div className="mt-80 flex justify-end items-center">
          <span className="font-bold">排列依序</span>
          <ul className="flex gap-8 ms-8">
            <li className="border rounded-50 py-4 px-10">價格最高</li>
            <li className="border rounded-50 py-4 px-10">價格最低</li>
            <li className="border rounded-50 py-4 px-10">評價最高</li>
            <li className="border rounded-50 py-4 px-10">平價數量最多</li>
          </ul>
        </div>
        <ul>
          <li className="bg-red-500 rounded-20 mt-28 p-28">
            <NutritionistCard />
          </li>
          <li className="bg-red-500 rounded-20 mt-28 p-28">
            <NutritionistCard />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NutritionistListPage;
