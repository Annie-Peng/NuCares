import MiniModal from "@/common/components/MiniModal";
import { FC } from "react";

interface CourseSaveModalProps {
  data: string;
}

const CourseSaveModal: FC<CourseSaveModalProps> = ({ data }) => {
  return (
    <MiniModal modal="showCourseSaveModal">
      <p className="text-center text-20 font-bold">是否要儲存？</p>
      <div className="text-center mt-[36px] flex flex-wrap gap-y-10 justify-center">
        <button
          type="button"
          className="order-2 w-full bg-white btn-cusWritePrimary !py-8 lg:w-[145px] lg:order-1"
        >
          否，離開編輯
        </button>
        <button
          type="button"
          className="order-1 w-full btn-cusWriteSecondary !py-8 lg:w-[145px] lg:ml-10 lg:order-2"
        >
          是
        </button>
      </div>
    </MiniModal>
  );
};

export default CourseSaveModal;
