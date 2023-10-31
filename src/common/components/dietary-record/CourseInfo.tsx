import Image from "next/image";
import { FC } from "react";

interface CourseInfoProps {
  Token: string;
  CourseId: string;
}

const CourseInfo: FC<CourseInfoProps> = ({ Token, CourseId }) => {
  return (
    <div className="w-[200px] mx-auto text-14 lg:text-16">
      <p className="text-primary-500 border border-primary-500 rounded-35 text-center">
        進階 - 8週飲食建議
      </p>
      <div className="flex flex-col gap-4 items-center justify-center mt-8">
        <div className="bg-secondary-400 p-4 rounded-50">
          <Image
            src="/images/dashboard/dietary-record/courseInfo/member-photo.svg"
            width="48"
            height="48"
            alt="member-photo"
          />
        </div>
        <p className="text-20">陳瘦瘦</p>
        <p className="mt-4">女</p>
        <p>28歲</p>
      </div>
      <ul className="flex flex-col gap-8 text-left mt-24">
        <li>
          <Image
            src="/images/dashboard/dietary-record/courseInfo/email.svg"
            width="15"
            height="15"
            alt="email"
            className="inline mr-8"
          />
          iamthin@gmail.com
        </li>
        <li>
          <Image
            src="/images/dashboard/dietary-record/courseInfo/phone.svg"
            width="15"
            height="15"
            alt="phone"
            className="inline mr-8"
          />
          0922-333444
        </li>
        <li>
          <Image
            src="/images/dashboard/dietary-record/courseInfo/LINE.svg"
            width="15"
            height="15"
            alt="LINE"
            className="inline mr-8"
          />
          thinthingood
        </li>
      </ul>
    </div>
  );
};

export default CourseInfo;
