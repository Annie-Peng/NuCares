import { useSelector } from "react-redux";
import { selectShowModal } from "../redux/features/showModal";
import MenuEditModal from "@/modules/dashboard/nutritionist/student-list/MenuEditModal";
import CourseStartModal from "@/modules/dashboard/nutritionist/workshop/CourseStartModal";
import BodyRateAddModal from "@/modules/dashboard/student/courses/BodyRateAddModal";
import CourseDeleteModal from "@/modules/dashboard/nutritionist/workshop/CourseDeleteModal";
import CourseSaveModal from "@/modules/dashboard/nutritionist/workshop/CourseSaveModal";
import FoodDetailModal from "../components/dietary-record/FoodDetailModal";
import CommentAddModal from "@/modules/dashboard/student/course-list/CommentAddModal";
import TimerModal from "../components/modals/TimerModal";
import MiniModal from "../components/modals/MiniModal";

const useShowModal = () => {
  const {
    showMenuEditModal,
    showCourseStartModal,
    showBodyRateAddModal,
    showCourseDeleteModal,
    showCourseSaveModal,
    showFoodDetailModal,
    showCommentAddModal,
    showTimerModal,
    showMessageModal,
  } = useSelector(selectShowModal);

  const renderModal = () => {
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
        {showCourseDeleteModal.showModal && (
          <CourseDeleteModal data={showCourseDeleteModal.data} />
        )}
        {showCourseSaveModal.showModal && (
          <CourseSaveModal data={showCourseSaveModal.data} />
        )}
        {showFoodDetailModal.showModal && (
          <FoodDetailModal data={showFoodDetailModal.data} />
        )}
        {showCommentAddModal.showModal && (
          <CommentAddModal data={showCommentAddModal.data} />
        )}
        {showTimerModal.showModal && (
          <TimerModal data={showTimerModal.data} modal="showTimerModal" />
        )}
        {showMessageModal.showModal && (
          <MiniModal modal="showMessageModal">
            {showMessageModal.data}
          </MiniModal>
        )}
      </>
    );
  };

  return renderModal();
};

export default useShowModal;
