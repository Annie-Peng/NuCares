import TitleModal from "@/common/components/modals/TitleModal";
import { Course } from "@/common/components/course/CourseForm";
import { closeModal } from "@/common/redux/features/showModal";
import { useCoursePostCommentApiMutation } from "@/common/redux/service/course";
import Image from "next/legacy/image";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { commonErrMsgClass } from "@/common/lib/dashboard/errMsg/commonErrMsg";

interface CommentAddModalProps {
  data: {
    Token: string;
    Course: Course;
  };
}

interface InputDataType {
  Content: string;
}

const CommentAddModal: FC<CommentAddModalProps> = ({ data }) => {
  const [starsFillNum, setStarsFillNum] = useState(1);
  const dispatch = useDispatch();

  const { Token, Course } = data;

  const [coursePostCommentApi] = useCoursePostCommentApiMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputDataType>();

  const starsNum = Array(5).fill(null);

  const onSubmit: SubmitHandler<InputDataType> = async (formData) => {
    try {
      const Content = formData.Content || "(未留言)";
      const body = {
        Content,
        Rate: starsFillNum,
      };
      const result = await coursePostCommentApi({
        Token,
        CourseId: Course.Id,
        body,
      });
      dispatch(closeModal("showCommentAddModal"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TitleModal title="評價" modal="showCommentAddModal">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[578px] mx-auto mt-[36px]"
      >
        <label>
          <p>
            <span className="font-bold">課程：</span>
            {Course.CourseName}
          </p>
          <p className="text-14 text-opacity-80 text-[#7a7a7a]">
            請對此次課程進行評分
          </p>
          <ul className="flex gap-4 mt-12">
            {starsNum.map((star, index) => {
              if (starsFillNum > index) {
                return (
                  <li key={index} className="w-[32px] h-[32px] relative">
                    <button
                      type="button"
                      onClick={() => setStarsFillNum(index + 1)}
                    >
                      <Image
                        src="/images/icons/full-star.svg"
                        layout="fill"
                        alt="full-star"
                      />
                    </button>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="w-[32px] h-[32px] relative">
                    <button
                      type="button"
                      onClick={() => setStarsFillNum(index + 1)}
                    >
                      <Image
                        src="/images/icons/empty-star.svg"
                        layout="fill"
                        alt="empty-star"
                      />
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </label>
        <label htmlFor="Content" className="mt-[36px] block">
          <p className="font-bold">說明</p>
          <p className="text-14 text-opacity-80 text-[#7a7a7a]">
            請說明您對此次課程的感受，限50字。
          </p>
          <div className="mx-[2px] lg:mx-0">
            <textarea
              className="h-[137px] p-10 mt-12"
              {...register("Content", {
                maxLength: { value: 50, message: "不得超過50字" },
              })}
            />
          </div>
          {errors?.Content && (
            <p className={commonErrMsgClass}>{errors.Content.message}</p>
          )}
        </label>
        <button
          type="submit"
          className="mt-[36px] btn-cusSecondary p-8 w-[270px] block mx-auto"
        >
          送出評價
        </button>
      </form>
    </TitleModal>
  );
};

export default CommentAddModal;
