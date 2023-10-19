import { DashboardLayoutProps } from "@/types/interface";
import Image from "next/image";

const NutritionistDashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="container bg-red-300 p-20 flex min-h-[740px] mt-[30px] rounded-50">
      <div className="w-[25%] ">
        <div className="profile flex flex-col items-center">
          <Image
            src="/"
            width="100"
            height="100"
            alt="profile-photo"
            className="rounded"
          />
          <p className="px-10 bg-white w-fit rounded-10 mt-16">營養師</p>
          <p className="font-bold text-24">陳瘦瘦</p>
        </div>
        <ul className="sideBar text-18 font-bold flex flex-col">
          <li className="bg-white p-[25px] rounded-s-50 mt-[25px]">我的學員</li>
          <li className="p-[25px]">我的營養師專頁</li>
          <li className="p-[25px]">個人資料</li>
          <li className="p-[25px]">帳戶</li>
        </ul>
      </div>
      <div className="bg-white w-[75%] rounded-35 text-center p-20">
        {children}
      </div>
    </div>
  );
};

export default NutritionistDashboardLayout;
