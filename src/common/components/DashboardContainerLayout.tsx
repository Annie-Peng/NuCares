import NutritionistSidebar from "@/modules/dashboard/nutritionist/NutritionistSidebar";
import StudentSidebar from "@/modules/dashboard/student/StudentSidebar";
import { DashboardLayoutProps } from "@/types/interface";
import Image from "next/image";

const DashboardContainerLayout = ({ children }: DashboardLayoutProps) => {
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
        {/* <NutritionistSidebar /> */}
        <StudentSidebar />
      </div>
      <div className="bg-white bg-opacity-50 w-[80%] rounded-35 text-center p-20">
        {children}
      </div>
    </div>
  );
};

export default DashboardContainerLayout;