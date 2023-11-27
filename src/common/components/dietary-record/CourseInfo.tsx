import { showLoading } from "@/common/redux/features/loading";
import { useInfoGetApiQuery } from "@/common/redux/service/courseRecord";
import Image from "next/legacy/image";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const {
    isLoading,
    error,
    data: infoData,
  } = useInfoGetApiQuery({
    Token: Token,
    CourseId: CourseId,
    ID: getID,
  });

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (error) {
      console.log(error);
    }
  }, [isLoading, error]);

  if (!infoData) return;

  const showImgUrl = infoData.Data.ImgUrl
    ? infoData.Data.ImgUrl
    : "/images/dashboard/dietary-record/courseInfo/member-photo.svg";

  return (
    <div className="w-[200px] mx-auto text-14 lg:text-16">
      <p className="text-primary-500 border border-primary-500 rounded-35 text-center">
        {infoData.Data.CourseName || infoData.Data.CourseTitle}
      </p>
      <div className="flex flex-col gap-4 items-center justify-center mt-8">
        <div className="rounded-50">
          <Image
            src={showImgUrl || "/images/dashboard/dietary-record/portrait.svg"}
            width={60}
            height={60}
            alt="portrait"
            className="rounded-50 object-cover"
          />
        </div>
        <p className="text-20">
          {infoData.Data.UserName || infoData.Data.Title}
        </p>
        <p className="mt-4">{infoData.Data.Gender}</p>
        {infoData.Data.Age && <p>{infoData.Data.Age}歲</p>}
      </div>
      <ul className="flex flex-col gap-8 text-left mt-24">
        <li className="flex items-center gap-8">
          <Image
            src="/images/dashboard/dietary-record/courseInfo/email.svg"
            width="15"
            height="15"
            alt="email"
          />
          {infoData.Data.Email}
        </li>
        <li className="flex items-center gap-8">
          <Image
            src="/images/dashboard/dietary-record/courseInfo/phone.svg"
            width="15"
            height="15"
            alt="phone"
          />
          {infoData.Data.Phone || infoData.Data.Tel}
        </li>
        <li className="flex items-center gap-8">
          <Image
            src="/images/dashboard/dietary-record/courseInfo/LINE.svg"
            width="15"
            height="15"
            alt="LINE"
          />
          {infoData.Data.LineId}
        </li>
      </ul>
    </div>
  );
};

export default CourseInfo;
