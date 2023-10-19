import MiniModal from "@/common/components/MiniModal";

const CourseDeleteModal = () => {
  return (
    <MiniModal title="確定刪除此課程？">
      <button
        type="button"
        className="btn-cusSecondary block mx-auto mt-24 py-8 w-[250px]"
      >
        確定
      </button>
    </MiniModal>
  );
};

export default CourseDeleteModal;
