import { useInfoGetApiQuery } from "@/common/redux/service/courseRecord";
import Image from "next/legacy/image";
import { FC } from "react";

interface CourseInfoProps {
  Token: string;
  CourseId: string;
  UserCurrentStatus: string;
}

const CourseInfo: FC<CourseInfoProps> = ({
  Token,
  CourseId,
  UserCurrentStatus,
}) => {
  const getID = UserCurrentStatus === "user" ? "nu" : "student";

  const {
    isLoading,
    error,
    data: infoData,
  } = useInfoGetApiQuery({
    Token: Token,
    CourseId: CourseId,
    ID: getID,
  });

  if (isLoading || !infoData) {
    return <p>Info is Loading</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  const showImgUrl = infoData.Data.ImgUrl
    ? infoData.Data.ImgUrl
    : "/images/dashboard/dietary-record/courseInfo/member-photo.svg";

  return (
    <div className="w-[200px] mx-auto text-14 lg:text-16">
      <p className="text-primary-500 border border-primary-500 rounded-35 text-center">
        {infoData.Data.CourseName || infoData.Data.CourseTitle}
      </p>
      <div className="flex flex-col gap-4 items-center justify-center mt-8">
        <div className="bg-secondary-400 rounded-50 w-[60px] h-[60px]">
          <Image
            src={showImgUrl}
            layout="fixed"
            width={60}
            height={60}
            alt="photo"
            className="rounded-50 object-cover"
            priority={true}
          />
        </div>
        <p className="text-20">
          {infoData.Data.UserName || infoData.Data.Title}
        </p>
        <p className="mt-4">{infoData.Data.Gender}</p>
        {infoData.Data.Age && <p>{infoData.Data.Age}歲</p>}
      </div>
      <ul className="flex flex-col gap-8 text-left mt-24">
        <li className="flex items-center">
          <Image
            src="/images/dashboard/dietary-record/courseInfo/email.svg"
            layout="fixed"
            width="15"
            height="15"
            alt="email"
            className="inline mr-8"
          />
          {infoData.Data.Email}
        </li>
        <li className="flex items-center">
          <Image
            src="/images/dashboard/dietary-record/courseInfo/phone.svg"
            layout="fixed"
            width="15"
            height="15"
            alt="phone"
            className="inline mr-8"
          />
          {infoData.Data.Phone || infoData.Data.Tel}
        </li>
        <li className="flex items-center">
          <Image
            src="/images/dashboard/dietary-record/courseInfo/LINE.svg"
            layout="fixed"
            width="15"
            height="15"
            alt="LINE"
            className="inline mr-8"
          />
          {infoData.Data.LineId}
        </li>
      </ul>
    </div>
  );
};

export default CourseInfo;
