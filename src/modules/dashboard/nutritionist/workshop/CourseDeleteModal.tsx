import MiniModal from "@/common/components/MiniModal";
import { FC } from "react";

interface CourseDeleteModalProps {
  data: string;
}

const CourseDeleteModal: FC<CourseDeleteModalProps> = ({ data }) => {
  return (
    <MiniModal modal="showCourseDeleteModal">
      <p className="text-center text-20 font-bold">確定刪除此方案？</p>
      <button
        type="button"
        className="btn-cusSecondary block mx-auto mt-[36px] py-8 w-[250px]"
      >
        確定
      </button>
    </MiniModal>
  );
};

export default CourseDeleteModal;
