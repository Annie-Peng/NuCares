import useEditForm from "@/common/hooks/useEditForm";
import useResize from "@/common/hooks/useResize";
import { showModal } from "@/common/redux/features/showModal";
import { usePlanPutApiMutation } from "@/common/redux/service/plan";
import Image from "next/image";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { courseAddFormData } from "./CourseAddForm";

interface CourseBigCardProps {
  planData: {
    Id: number;
    Rank: number;
    CourseName: string;
    CourseWeek: number;
    CoursePrice: number;
    Tag: string;
    Detail: string;
  };
  Token: string;
}

const CourseBigCard: FC<CourseBigCardProps> = ({ Token, planData }) => {
  const dispatch = useDispatch();
  const isMobile = useResize();
  const [planPutApi] = usePlanPutApiMutation();
  const { Id } = planData;
  const putApiData = { Token, Id };

  const initialState = {
    Rank: planData.Rank,
    CourseName: planData.CourseName,
    CourseWeek: planData.CourseWeek,
    CoursePrice: planData.CoursePrice,
    Tag: planData.Tag,
    Detail: planData.Detail,
  };

  const { edit, setEdit, renderEditForm } = useEditForm({
    initialState,
    formData: courseAddFormData,
    putApi: planPutApi,
    putApiData,
  });

  return (
    <>
      {edit ? (
        <div className="px-20 pt-20 pb-40 bg-white rounded-10 border border-black-200 text-left">
          {renderEditForm}
        </div>
      ) : (
        <div className="courseBigCard p-20 bg-white rounded-10 border border-black-200 flex gap-[47px] flex-wrap lg:flex-nowrap">
          <table className="flex gap-x-20 after:content-[''] after:top-0 after:bottom-0 after:block after:bg-black-200 lg:after:w-[1px] lg:w-full">
            <tr className="flex flex-col gap-16 text-right">
              <th className="whitespace-nowrap">排列順序</th>
              <th>課程名稱</th>
              <th>週數</th>
              <th>價格</th>
              <th>標籤</th>
              <th>課程說明</th>
            </tr>
            <tbody className="w-full">
              <tr className="flex flex-col gap-16 text-left">
                <td>{planData.Rank}</td>
                <td>{planData.CourseName}</td>
                <td>{planData.CourseWeek}</td>
                <td>NT$ {planData.CoursePrice}</td>
                <td>{planData.Tag}</td>
                <td>{planData.Detail}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-wrap content-center items-center justify-center gap-16 p-12 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => setEdit(!edit)}
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
              onClick={() =>
                dispatch(showModal(["showCourseDeleteModal", planData.Id]))
              }
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
              <span
                className="lg:hidden"
                onClick={() =>
                  dispatch(showModal(["showCourseDeleteModal", planData]))
                }
              >
                刪除
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
{
}

export default CourseBigCard;
