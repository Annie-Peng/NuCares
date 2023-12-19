import Image from "next/legacy/image";
import Link from "next/link";
import logo from "public/images/logo.svg";
import login from "public/images/login.svg";
import logout from "public/images/header/logout.svg";
import StudentDropdown from "@/modules/dashboard/student/StudentDropdown";
import NutritionistDropdown from "@/modules/dashboard/nutritionist/NutritionistDropdown";
import { useEffect, useRef, useState } from "react";
import { getCookies } from "cookies-next";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/features/auth";
import useResize from "../hooks/useResize";
import Notification from "./Notification";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showNotificationList, setShowNotificationList] =
    useState<boolean>(false);
  const [storeWsMessage, setStoreWsMessage] = useState<
    Record<string, string | number>
  >({});
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [getNewNotice, setGetNewNotice] = useState(false);
  const isMobile = useResize();

  const auth = useSelector(selectAuth);

  const ws = useRef<WebSocket | null>(null);

  const { Id, Token, ImgUrl, UserCurrentStatus, IsNutritionist } = getCookies();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("click", handleShowDropdownClick);
      return () => {
        document.removeEventListener("click", handleShowDropdownClick);
      };
    }
  }, [showDropdown]);

  useEffect(() => {
    if (showNotificationList) {
      document.addEventListener("click", handleShowNotificationListClick);
      setGetNewNotice(false);

      return () => {
        document.removeEventListener("click", handleShowNotificationListClick);
      };
    }
  }, [showNotificationList]);

  useEffect(() => {
    ws.current = new WebSocket("wss://nucares.top/notificationHub");

    ws.current.onopen = (res) => {
      console.log("已連線header");
    };

    ws.current.onmessage = (res) => {
      const data = JSON.parse(res.data);
      if (data) setStoreWsMessage(data);
    };
  }, []);

  useEffect(() => {
    if (storeWsMessage.ChannelId === Number(Id)) setGetNewNotice(true);
  }, [storeWsMessage]);

  const newImageUrl = decodeURIComponent(ImgUrl as string);
  const newToken = decodeURIComponent(Token as string);

  const handleShowDropdownClick = (e: any) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleShowNotificationListClick = (e: any) => {
    e.stopPropagation();
    setShowNotificationList(!showNotificationList);
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
        {isMounted && ImgUrl && (
          <button
            className={`rounded-full w-[40px] h-[40px] mx-auto ${
              getNewNotice ? "bg-secondary-200" : "bg-primary-200"
            }`}
            onClick={handleShowNotificationListClick}
          >
            通知
          </button>
        )}
        {isMounted && UserCurrentStatus && (
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
