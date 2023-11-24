import Image from "next/legacy/image";
import { FC, useState } from "react";
import CourseInfo from "./CourseInfo";

interface InfoBtnProps {
  Token: string;
  CourseId: string;
  UserCurrentStatus: string;
  infoTitle: string;
}

const InfoBtn: FC<InfoBtnProps> = ({
  Token,
  CourseId,
  UserCurrentStatus,
  infoTitle,
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  return (
    <>
      <button
        className="absolute right-0 -top-[56px] p-10 btn-cusPrimaryInfo items-center gap-10 hidden lg:flex"
        onClick={() => setShowInfo(!showInfo)}
      >
        <Image
          src="/images/dashboard/dietary-record/menu-white.svg"
          layout="fixed"
          width={20}
          height={20}
          alt="menu"
        />
        {infoTitle}
      </button>
      {showInfo && (
        <div className="absolute top-0 right-0 z-10 cusShadow p-20 rounded-10 min-w-[240px]">
          <CourseInfo
            Token={Token}
            CourseId={CourseId}
            UserCurrentStatus={UserCurrentStatus}
          />
        </div>
      )}
    </>
  );
};

export default InfoBtn;
