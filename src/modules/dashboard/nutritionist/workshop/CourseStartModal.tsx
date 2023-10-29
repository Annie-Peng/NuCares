import MiniModal from "@/common/components/MiniModal";

const CourseStartModal = () => {
  return (
    <MiniModal>
      <p>此課程期間為2023.10.1-2023.11.25</p>
      <p className="text-center">確定開始課程？</p>
      <button
        type="button"
        className="btn-cusSecondary block mx-auto mt-24 py-8 w-[250px]"
      >
        確定
      </button>
    </MiniModal>
  );
};

export default CourseStartModal;
