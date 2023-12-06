import MiniModal from "@/common/components/modals/MiniModal";
import { closeModal } from "@/common/redux/features/showModal";
import {
  useCourseGetTimeApiQuery,
  useCoursePutStartApiMutation,
} from "@/common/redux/service/course";
import { Token } from "@/types/interface";

import { FC } from "react";
import { useDispatch } from "react-redux";

interface CourseStartModalProps {
  data: {
    Token: Token;
    course: {
      Id: string;
      UserName: string;
      CourseName: string;
    };
  };
}

interface TimeTypeProps {
  Data: {
    CourseStartDate: string;
    CourseEndDate: string;
  };
}

const CourseStartModal: FC<CourseStartModalProps> = ({ data }) => {
  const dispatch = useDispatch();
  const [coursePutStartApi] = useCoursePutStartApiMutation();

  const { Token, course } = data;

  const {
    data: Time,
    error,
    isLoading,
  } = useCourseGetTimeApiQuery({ Token, CourseId: course.Id });

  const { UserName, CourseName, Id } = data.course;

  if (!Time) return;

  const handleClick = async (
    Token: string,
    Id: string,
    Time: TimeTypeProps
  ) => {
    const TimeBody = {
      CourseStartDate: Time.Data.CourseStartDate,
      CourseEndDate: Time.Data.CourseEndDate,
    };
    try {
      const result = await coursePutStartApi({
        Token,
        CourseId: Id,
        body: TimeBody,
      });
      dispatch(closeModal("showCourseStartModal"));
    } catch (error) {
      return;
    }
  };

  return (
    <MiniModal modal="showCourseStartModal">
      <div className="flex flex-col justify-between mx-auto max-w-[300px] text-18 lg:text-20 font-bold text-center">
        <div className="flex flex-col gap-8">
          <p className="border-black-950 border-b-2 w-fit mx-auto">
            {UserName}/{CourseName}
          </p>
          <p>此課程期間為</p>
          <p>
            {Time.Data.CourseStartDate}-{Time.Data.CourseEndDate}
          </p>
          <p className="grow">確定開始課程？</p>
        </div>
        <button
          className=" btn-cusSecondary p-8 text-16 mt-24 lg:mt-[36px]"
          onClick={() => handleClick(Token, Id, Time)}
        >
          確定
        </button>
      </div>
    </MiniModal>
  );
};

export default CourseStartModal;
