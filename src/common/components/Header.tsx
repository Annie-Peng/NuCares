import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";
import login from "public/images/login.svg";
import logout from "public/images/logout.svg";
import userData from "../lib/dashboard/user";
import StudentDropdown from "@/modules/dashboard/student/StudentDropdown";
import NutritionistDropdown from "@/modules/dashboard/nutritionist/NutritionistDropdown";
import { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <header className="bg-white">
      <div className="container py-10 items-center grid cusGrid relative lg:py-26 lg:pl-28 lg:pr-8">
        {showDropdown &&
          (userData.currentID === "student" ? (
            <StudentDropdown />
          ) : (
            <NutritionistDropdown />
          ))}
        <Link href="/" className="col-span-2">
          <Image src={logo} width="170" height="28" alt="logo-NuCares" />
        </Link>
        <nav className=" text-black-600 sm:hidden lg:block col-span-9 -ms-[calc(110px-165px)]">
          <ul className="flex font-normal">
            <li>
              <Link href="/nutritionist-list">搜尋營養師</Link>
            </li>
            <li>
              <Link href="/benefit" className="ms-[60px]">
                成為NuCares營養師
              </Link>
            </li>
            <li className="ms-auto text-14">
              <Link href="#">申請成為營養師</Link>
            </li>
          </ul>
        </nav>
        {userData.currentID ? (
          <Image
            src={login}
            width="50"
            height="50"
            alt="login"
            className="col-end-5 ml-auto lg:col-end-13 lg:mr-auto"
            onClick={() => setShowDropdown(!showDropdown)}
          />
        ) : (
          <>
            <Link
              href="#"
              className="border border-secondary-400 text-secondary-400 font-bold rounded-10 ms-auto p-8 hidden lg:block col-end-13 col-span-1 whitespace-nowrap"
            >
              註冊/登入
            </Link>
            <Image
              src={logout}
              width="50"
              height="50"
              alt="logout"
              className="col-end-5 ml-auto lg:col-end-13 lg:mr-auto lg:hidden"
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
