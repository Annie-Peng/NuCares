import TitleModal from "@/common/components/modals/TitleModal";
import { Course } from "@/common/components/course/CourseForm";
import { closeModal } from "@/common/redux/features/showModal";
import { useCoursePostCommentApiMutation } from "@/common/redux/service/course";
import Image from "next/image";
import { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

interface CommentAddModalProps {
  data: {
    Token: string;
    Course: Course;
  };
}

const CommentAddModal: FC<CommentAddModalProps> = ({ data }) => {
  const [starsFillNum, setStarsFillNum] = useState(1);
  const dispatch = useDispatch();

  const { Token, Course } = data;

  const [coursePostCommentApi] = useCoursePostCommentApiMutation();

  console.log(data);

  const starsNum = Array(5).fill(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const Content = formData.get("Content") || "(未留言)";
      const body = {
        Content,
        Rate: starsFillNum,
      };
      console.log(body);
      const result = await coursePostCommentApi({
        Token,
        CourseId: Course.Id,
        body,
      });
      console.log(result);
      dispatch(closeModal("showCommentAddModal"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TitleModal title="評價" modal="showCommentAddModal">
      <form onSubmit={handleSubmit} className="max-w-[578px] mx-auto mt-[36px]">
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
                        fill
                        alt="star"
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
                        fill
                        alt="star"
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
            <textarea name="Content" className="h-[137px] p-10 mt-12" />
          </div>
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
