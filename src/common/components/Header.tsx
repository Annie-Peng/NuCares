import Image from "next/legacy/image";
import Link from "next/link";
import logo from "public/images/logo.svg";
import login from "public/images/login.svg";
import logout from "public/images/header/logout.svg";
import StudentDropdown from "@/modules/dashboard/student/StudentDropdown";
import NutritionistDropdown from "@/modules/dashboard/nutritionist/NutritionistDropdown";
import { useEffect, useState } from "react";
import { getCookies } from "cookies-next";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/features/auth";
import useResize from "../hooks/useResize";
import Notification from "./Notification";
import useNotification from "../hooks/useNotification";
import { useNotificationNewPutApiMutation } from "../redux/service/notification";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showNotificationList, setShowNotificationList] =
    useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const isMobile = useResize();

  const auth = useSelector(selectAuth);

  const { Id, Token, ImgUrl, UserCurrentStatus, IsNutritionist } = getCookies();

  const newImageUrl = decodeURIComponent(ImgUrl as string);
  const newToken = decodeURIComponent(Token as string);

  const { newNotice, setNewNotice } = useNotification(newToken, Id);
  const [notificationNewPutApi] = useNotificationNewPutApiMutation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("click", handleShowDropdownClick);
      setShowNotificationList(false);

      return () => {
        document.removeEventListener("click", handleShowDropdownClick);
      };
    }
  }, [showDropdown]);

  useEffect(() => {
    if (showNotificationList) {
      document.addEventListener("click", handleShowNotificationListClick);
      setNewNotice(false);
      setShowDropdown(false);

      return () => {
        document.removeEventListener("click", handleShowNotificationListClick);
      };
    }
  }, [showNotificationList]);

  const handleShowDropdownClick = (e: any) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleShowNotificationListClick = async (e: any) => {
    try {
      e.stopPropagation();
      setShowNotificationList(!showNotificationList);

      if (!newNotice) return;

      const result = await notificationNewPutApi({ Token: newToken });
    } catch (error) {
      return;
    }
  };

  return (
    <header className="bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.1)] z-20 fixed w-full">
      <div className="container py-10 items-center grid cusGrid relative lg:py-10">
        {showDropdown &&
          (UserCurrentStatus === "user" ? (
            <StudentDropdown IsNutritionist={IsNutritionist} />
          ) : (
            <NutritionistDropdown />
          ))}
        {showNotificationList && <Notification Token={newToken} />}
        <Link
          href={isMobile ? "#" : "/"}
          className="col-span-2 relative w-[140px] h-[24px] lg:w-[170px] lg:h-[28px]"
        >
          <Image src={logo} layout="fill" alt="logo-NuCares" />
        </Link>
        <nav className=" text-black-600 font-normal sm:hidden lg:block col-span-8 -ms-[calc(110px-165px)]">
          <ul className="flex font-normal items-center">
            <li>
              <Link href="/nutritionist-list">搜尋營養師</Link>
            </li>
            <li>
              <Link href="/benefit" className="ms-[60px]">
                成為NuCares營養師
              </Link>
            </li>
            <li
              className={`ms-auto text-14 font-thin ${
                isMounted && IsNutritionist === "true" && "hidden"
              }`}
            >
              <Link href="/apply">申請成為營養師</Link>
            </li>
          </ul>
        </nav>
        {isMounted && UserCurrentStatus && (
          <>
            <button
              className={`w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] ml-[70px] relative`}
              onClick={handleShowNotificationListClick}
            >
              <Image
                src={`/images/notification/notification${
                  newNotice ? "-new" : ""
                }.svg`}
                alt="notification"
                layout="fill"
              />
            </button>
            <div className="relative w-[36px] h-[36px] col-end-5 ml-auto lg:w-[40px] lg:h-[40px] lg:col-end-13 lg:mr-auto">
              <Image
                src={`${auth.ImgUrl}` || `${newImageUrl}` || login}
                alt="login"
                layout="fill"
                className={`object-cover ${newImageUrl && "rounded-50"}`}
                priority={true}
                onClick={handleShowDropdownClick}
              />
            </div>
          </>
        )}
        {isMounted && !UserCurrentStatus && (
          <>
            <Link
              href="/login"
              className="border border-secondary-500 text-secondary-500 hover:text-white hover:bg-secondary-500 font-bold rounded-5 ms-auto p-8 hidden lg:block col-end-13 col-span-1 whitespace-nowrap"
            >
              註冊/登入
            </Link>
            <Link
              href="/login"
              className="relative w-[36px] h-[48px] col-end-5 ml-auto lg:w-[40px] lg:h-[40px] lg:col-end-13 lg:mr-auto lg:hidden"
            >
              <Image src={logout} layout="fill" alt="logout" />
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
