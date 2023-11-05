import MiniModal from "@/common/components/MiniModal";
import { FC } from "react";

interface CourseSaveModalProps {
  data: string;
}

const CourseSaveModal: FC<CourseSaveModalProps> = ({ data }) => {
  return (
    <MiniModal modal="showCourseSaveModal">
      <p className="text-center text-20 font-bold">是否儲存？</p>
      <div className="text-center mt-[36px]">
        <button type="button" className="btn-cusWritePrimary !py-8 w-[145px]">
          否，離開編輯
        </button>
        <button
          type="button"
          className="btn-cusWriteSecondary ml-10 !py-8 w-[145px]"
        >
          是
        </button>
      </div>
    </MiniModal>
  );
};

export default CourseSaveModal;
