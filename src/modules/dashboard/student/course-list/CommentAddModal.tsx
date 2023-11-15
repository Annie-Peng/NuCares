import TitleModal from "@/common/components/TitleModal";
import { closeModal } from "@/common/redux/features/showModal";
import Image from "next/image";
import { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

interface CommentAddModalProps {
  data: any;
}

const CommentAddModal: FC<CommentAddModalProps> = ({ data }) => {
  const [starsFillNum, setStarsFillNum] = useState(0);
  const dispatch = useDispatch();

  const starsNum = Array(5).fill(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      console.log(formData.get("Content"));
      dispatch(closeModal("showCommentAddModal"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TitleModal title="評價" width="820px" modal="showCommentAddModal">
      <form onSubmit={handleSubmit} className="max-w-[578px] mx-auto mt-[36px]">
        <label>
          <p>
            <span className="font-bold">課程：</span>1週飲食建議
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
          <textarea name="Content" className="h-[137px] p-10 mt-12" />
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
