import NutritionistSidebar from "@/modules/dashboard/nutritionist/NutritionistSidebar";
import StudentSidebar from "@/modules/dashboard/student/StudentSidebar";
import { DashboardLayoutProps } from "@/types/interface";
import Image from "next/image";
import MenuEditModal from "@/modules/dashboard/nutritionist/student-list/MenuEditModal";
import { useSelector } from "react-redux";
import { selectShowModal } from "../redux/features/showModal";
import CourseStartModal from "@/modules/dashboard/nutritionist/workshop/CourseStartModal";
import BodyRateAddModal from "@/modules/dashboard/student/courses/BodyRateAddModal";
import { getCookie } from "cookies-next";

const DashboardContainerLayout = ({ children }: DashboardLayoutProps) => {
  const { showMenuEditModal, showCourseStartModal, showBodyRateAddModal } =
    useSelector(selectShowModal);

  const UserCurrentStatus = getCookie("UserCurrentStatus");
  const UserName = getCookie("UserName");

  return (
    <>
      {showMenuEditModal.showModal && (
        <MenuEditModal data={showMenuEditModal.data} />
      )}
      {showCourseStartModal.showModal && (
        <CourseStartModal data={showCourseStartModal.data} />
      )}
      {showBodyRateAddModal.showModal && (
        <BodyRateAddModal data={showBodyRateAddModal.data} />
      )}
      <div className="container p-20 flex mt-[54px] rounded-50 max-w-[1210px] relative cusBackgroundBackdrop min-h-[777px]">
        <div className="w-[20%]">
          <div className="profile flex flex-col items-center">
            <Image
              src="/"
              width="100"
              height="100"
              alt="profile-photo"
              className="rounded-50 bg-black-200 border border-white"
            />
            {UserCurrentStatus === "user" ? (
              <p className="px-10 bg-primary-500 text-white w-fit rounded-10 mt-16 text-12 font-bold">
                一般會員
              </p>
            ) : (
              <p className="px-10 bg-tertiary-400 text-white w-fit rounded-10 mt-16 text-12 font-bold">
                營養師
              </p>
            )}
            <p className="mt-4 text-24 font-normal relative">{UserName}</p>
          </div>
            {UserCurrentStatus === "user" ? (
              <StudentSidebar />
            ) : (
              <NutritionistSidebar />
            )}
        </div>
        <div className="bg-white bg-opacity-50 w-[80%] rounded-35 text-center p-20">
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardContainerLayout;
