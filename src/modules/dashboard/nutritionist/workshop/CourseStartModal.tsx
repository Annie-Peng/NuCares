import MiniModal from "@/common/components/MiniModal";

const CourseStartModal = () => {
  return (
    <MiniModal modal="CourseStartModal">
      <div className="flex flex-col justify-between mx-auto max-w-[300px] h-[236px] text-20 font-bold">
        <div className="flex flex-col gap-8">
          <p className="border-black-950 border-b-2 w-fit mx-auto">
            蛋黃哥/進階-8週飲食建議
          </p>
          <p>此課程期間為</p>
          <p>2023/10/01-2023/11/25</p>
          <p className="grow">確定開始課程？</p>
        </div>
        <button className=" btn-cusSecondary p-6">確定</button>
      </div>
    </MiniModal>
  );
};

export default CourseStartModal;
