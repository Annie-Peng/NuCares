import NutritionistSidebar from "@/modules/dashboard/nutritionist/NutritionistSidebar";
import StudentSidebar from "@/modules/dashboard/student/StudentSidebar";
import { DashboardLayoutProps } from "@/types/interface";
import login from "public/images/login.svg";
import Image from "next/legacy/image";
import { getCookies } from "cookies-next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/features/auth";

const DashboardContainerLayout = ({ children }: DashboardLayoutProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const auth = useSelector(selectAuth);

  const { ImgUrl, UserCurrentStatus, UserName } = getCookies();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const newImageUrl = decodeURIComponent(ImgUrl as string);
  const newUserName = decodeURIComponent(UserName as string);

  return (
    <>
      <div className="mx-auto p-20 flex rounded-50 max-w-[1212px] relative cusBackgroundBackdrop min-h-[777px]">
        <div className="w-[204px]">
          <div className="profile flex flex-col items-center">
            {isMounted && (
              <div className="relative rounded-50 border border-white w-[100px] h-[100px]">
                <Image
                  src={`${auth.ImgUrl}` || `${newImageUrl}` || login}
                  layout="fill"
                  alt="profile-photo"
                  className="rounded-50 object-cover"
                  priority={true}
                />
              </div>
            )}
            {isMounted && UserCurrentStatus === "user" ? (
              <p className="px-10 bg-primary-500 text-white w-fit rounded-10 mt-16 text-12 font-bold">
                一般會員
              </p>
            ) : (
              <p className="px-10 bg-tertiary-400 text-white w-fit rounded-10 mt-16 text-12 font-bold">
                營養師
              </p>
            )}
            {isMounted && (
              <p className="mt-4 text-20 font-normal relative">{newUserName}</p>
            )}
          </div>
          {isMounted && UserCurrentStatus === "user" ? (
            <StudentSidebar />
          ) : (
            <NutritionistSidebar />
          )}
        </div>
        <div className="bg-white bg-opacity-50 w-[965px] rounded-35 text-center p-20">
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardContainerLayout;
