import MiniModal from "@/common/components/modals/MiniModal";
import { closeModal, selectShowModal } from "@/common/redux/features/showModal";
import { usePlanDeleteApiMutation } from "@/common/redux/service/plan";
import { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";

interface CourseDeleteModalProps {
  data: string;
}

const CourseDeleteModal: FC<CourseDeleteModalProps> = ({ data }) => {
  const Token = getCookie("Token");
  const dispatch = useDispatch();

  const [planDeleteApi] = usePlanDeleteApiMutation();

  const handleDeleteClick = async (
    e: MouseEvent<HTMLButtonElement>,
    PlanId: string
  ) => {
    try {
      const result = await planDeleteApi({ Token, PlanId }).unwrap();
      dispatch(closeModal("showCourseDeleteModal"));
    } catch (error) {
      console.log(error);
    }
  };

  const showModalData = useSelector(selectShowModal);

  return (
    <MiniModal modal="showCourseDeleteModal">
      <p className="text-center text-20 font-bold">確定刪除此方案？</p>
      <button
        type="button"
        className="w-full btn-cusSecondary block mx-auto mt-[36px] py-8 lg:w-[250px]"
        onClick={(e) => handleDeleteClick(e, data)}
      >
        確定
      </button>
    </MiniModal>
  );
};

export default CourseDeleteModal;
