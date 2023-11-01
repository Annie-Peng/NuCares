import { DashboardLayoutProps } from "@/types/interface";
import Header from "./Header";
import Footer from "./Footer";
import { FC } from "react";
import MenuEditModal from "@/modules/dashboard/nutritionist/student-list/MenuEditModal";
import { useSelector } from "react-redux";
import { selectShowModal } from "../redux/features/showModal";
import CourseStartModal from "@/modules/dashboard/nutritionist/workshop/CourseStartModal";
import BodyRateAddModal from "@/modules/dashboard/student/courses/BodyRateAddModal";

const DashboardLayout: FC<DashboardLayoutProps> = ({ value, children }) => {
  const showModal = useSelector(selectShowModal);
  const { showMenuEditModal, showCourseStartModal, showBodyRateAddModal } =
    useSelector(selectShowModal);

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
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow lg:py-[75px]">{children}</main>
        {value ? null : <Footer />}
      </div>
    </>
  );
};

export default DashboardLayout;
