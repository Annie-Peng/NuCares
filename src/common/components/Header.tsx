import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";
import login from "public/images/login.svg";
import logout from "public/images/logout.svg";
import StudentDropdown from "@/modules/dashboard/student/StudentDropdown";
import NutritionistDropdown from "@/modules/dashboard/nutritionist/NutritionistDropdown";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const UserCurrentStatus = getCookie("UserCurrentStatus");
  const IsNutritionist = getCookie("IsNutritionist");
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.1)] z-10">
      <div className="container py-10 items-center grid cusGrid relative lg:py-16">
        {showDropdown &&
          (UserCurrentStatus === "user" ? (
            <StudentDropdown IsNutritionist={IsNutritionist} />
          ) : (
            <NutritionistDropdown />
          ))}

        <Link
          href="/"
          className="col-span-2 relative w-[140px] h-[24px] lg:w-[170px] lg:h-[28px]"
        >
          <Image src={logo} fill alt="logo-NuCares" />
        </Link>
        <nav className=" text-black-600 font-normal sm:hidden lg:block col-span-9 -ms-[calc(110px-165px)]">
          <ul className="flex font-normal items-center">
            <li>
              <Link href="/nutritionist-list">搜尋營養師</Link>
            </li>
            <li>
              <Link href="/benefit" className="ms-[60px]">
                成為NuCares營養師
              </Link>
            </li>
            <li className="ms-auto text-14">
              <Link href="/apply">申請成為營養師</Link>
            </li>
          </ul>
        </nav>
        {isMounted && UserCurrentStatus && (
          <div className="relative w-[38px] h-[38px] col-end-5 ml-auto lg:w-[40px] lg:h-[40px] lg:col-end-13 lg:mr-auto">
            <Image
              src={login}
              fill
              alt="login"
              onClick={() => setShowDropdown(!showDropdown)}
            />
          </div>
        )}
        {isMounted && !UserCurrentStatus && (
          <>
            <Link
              href="#"
              className="border border-secondary-500 text-secondary-500 font-bold rounded-5 ms-auto p-8 hidden lg:block col-end-13 col-span-1 whitespace-nowrap"
            >
              註冊/登入
            </Link>
            <div className="relative w-[38px] h-[48px] col-end-5 ml-auto lg:w-[40px] lg:h-[40px] lg:col-end-13 lg:mr-auto lg:hidden">
              <Image src={logout} fill alt="logout" />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
