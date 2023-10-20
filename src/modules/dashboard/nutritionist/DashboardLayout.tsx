import { DashboardLayoutProps } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nutritionistTabs = [
  {
    tab: "我的學員",
    tabURL: "/dashboard/nutritionist/student-list",
    iconURL: "/images/dashboard/dietary-record/sidebar-icons/course.svg",
  },
  {
    tab: "營養師專頁",
    tabURL: "/dashboard/nutritionist/workshop",
    iconURL:
      "/images/dashboard/dietary-record/sidebar-icons/nutritionist/workshop.svg",
  },
  {
    tab: "帳戶",
    tabURL: "/dashboard/nutritionist/account",
    iconURL:
      "/images/dashboard/dietary-record/sidebar-icons/nutritionist/account.svg",
  },
];

const NutritionistDashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [tab, setTab] = useState(nutritionistTabs[0]);
  return (
    <div className="container p-20 flex mt-[54px] rounded-50 max-w-[1210px] relative cusBackgroundBackdrop">
      <div className="w-[20%]">
        <div className="profile flex flex-col items-center">
          <Image
            src="/"
            width="100"
            height="100"
            alt="profile-photo"
            className="rounded-50 bg-black-200 border border-white"
          />
          <p className="px-10 bg-primary-500 text-white w-fit rounded-10 mt-16 text-12 font-bold">
            營養師
          </p>
          <p className="mt-4 text-24 font-normal relative">陳瘦瘦</p>
        </div>
        <ul
          className={`sideBar text-18 font-bold flex flex-col text-black-500 mt-32`}
        >
          {nutritionistTabs.map((nutritionistTab, index) => {
            return (
              <li key={index}>
                <Link
                  href={nutritionistTab.tabURL}
                  className="align-middle inline-block py-20 px-28 rounded-s-50 w-full"
                >
                  <Image
                    src={nutritionistTab.iconURL}
                    width={20}
                    height={20}
                    className="inline-block align-middle mr-8"
                  />
                  <span className="align-middle">{nutritionistTab.tab}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-white bg-opacity-50 w-[80%] rounded-35 text-center p-20">
        {children}
      </div>
    </div>
  );
};

export default NutritionistDashboardLayout;
