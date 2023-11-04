import Image from "next/image";

const NutritionistComment = () => {
  return (
    <div className="p-20 rounded-10 border max-w-[280px]">
      <div className="flex gap-12">
        <Image src="/images/login.svg" width={46} height={46} alt="photo" />
        <div>
          <p className="text-13">張Ｏ明</p>
          <div className="flex gap-4">
            <Image
              src="/images/icons/full-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <Image
              src="/images/icons/empty-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <Image
              src="/images/icons/empty-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <Image
              src="/images/icons/empty-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <Image
              src="/images/icons/empty-star.svg"
              width={20}
              height={20}
              alt="star"
            />
          </div>
        </div>
        <p className="text-12">2023/03/07</p>
      </div>
      <p className="mt-[36px]">
        專業營養師課程簡直驚豔！知識深入、指導具體，營養師的專業使我在健康路上更自信！知識深入、指導具體知識深入、指導具體
      </p>
    </div>
  );
};
export default NutritionistComment;
