import { CommentType } from "@/pages/nutritionist-list/[nutritionistId]";
import Image from "next/image";
import { FC } from "react";

interface NutritionistCommentProps {
  comment: CommentType;
}

const NutritionistComment: FC<NutritionistCommentProps> = ({ comment }) => {
  const starsNum = Array(5).fill(null);

  return (
    <div className="p-20 rounded-10 border h-full">
      <div className="flex gap-12">
        <Image src="/images/login.svg" width={46} height={46} alt="photo" />
        <div>
          <p className="text-13">{comment.UserName}</p>
          <ul className="flex gap-4">
            {starsNum.map((star, index) => {
              if (index + 1 <= comment.Rate) {
                return (
                  <li key={index}>
                    <Image
                      src="/images/icons/full-star.svg"
                      width={20}
                      height={20}
                      alt="star"
                    />
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Image
                      src="/images/icons/empty-star.svg"
                      width={20}
                      height={20}
                      alt="star"
                    />
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <p className="text-12">{comment.CreateDate}</p>
      </div>
      <p className="mt-[36px]">{comment.Content}</p>
    </div>
  );
};
export default NutritionistComment;
