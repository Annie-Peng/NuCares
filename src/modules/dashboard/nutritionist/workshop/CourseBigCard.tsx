import useResize from "@/common/hooks/useResize";
import { showModal } from "@/common/redux/features/showModal";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const CourseBigCard = () => {
  const dispatch = useDispatch();
  const isMobile = useResize();

  return (
    <div className="courseBigCard p-20 bg-white rounded-10 border border-black-200 flex gap-[47px] flex-wrap lg:flex-nowrap">
      <table className="flex gap-x-20 after:content-[''] after:top-0 after:bottom-0 after:block after:bg-black-200 lg:after:w-[1px]">
        <tr className="flex flex-col gap-16 text-right">
          <th className="whitespace-nowrap">排列順序</th>
          <th>課程名稱</th>
          <th>週數</th>
          <th>價格</th>
          <th>標籤</th>
          <th>課程說明</th>
        </tr>
        <tbody>
          <tr className="flex flex-col gap-16 text-left">
            <td>1</td>
            <td>體驗 - 1週飲食建議</td>
            <td>1</td>
            <td>NT$ 1,500</td>
            <td>體驗價</td>
            <td>
              課程說明
              課程提供專業的健康評估和指導，包括體重、BMI、飲食習慣等多項健康指標的詳盡分析。我們將幫助您了解自身健康狀況，並提供量身定制的改善方案，助您走向更健康的生活。
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-wrap content-center items-center justify-center gap-16 p-12 w-full lg:w-auto">
        <button
          type="button"
          onClick={() => dispatch(showModal(["showCourseSaveModal", 0]))}
          className={
            isMobile
              ? "flex items-center gap-4 btn-cusWritePrimary !py-8 !px-20"
              : undefined
          }
        >
          <Image
            src={
              isMobile
                ? "/images/dashboard/nutritionist/course/clipPath-no-border.svg"
                : "/images/dashboard/nutritionist/course/clipPath.svg"
            }
            width={isMobile ? 20 : 28}
            height={isMobile ? 20 : 28}
            alt="edit"
          />
          <span className="lg:hidden">編輯</span>
        </button>
        <button
          type="button"
          onClick={() => dispatch(showModal(["showCourseDeleteModal", 0]))}
          className={
            isMobile
              ? "flex items-center gap-4 btn-cusWritePrimary !py-8 !px-20"
              : undefined
          }
        >
          <Image
            src={
              isMobile
                ? "/images/dashboard/nutritionist/course/trashcan-no-border.svg"
                : "/images/dashboard/nutritionist/course/trashcan.svg"
            }
            width={isMobile ? 20 : 28}
            height={isMobile ? 20 : 28}
            alt="delete"
          />
          <span className="lg:hidden">刪除</span>
        </button>
      </div>
    </div>
  );
};
{
}

export default CourseBigCard;
