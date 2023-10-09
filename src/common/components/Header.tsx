import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";
import menu from "public/images/header/menu.svg";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container py-20 items-center grid cusGrid">
        <Image
          src={logo}
          width="221"
          height="38"
          alt="logo-NuCares"
          className="col-span-3"
        />
        <nav className=" text-black-600 sm:hidden lg:block col-span-4 -ms-[calc(110px-64px)]">
          <ul className="flex font-normal">
            <li>
              <Link href="#">搜尋營養師</Link>
            </li>
            <li>
              <Link href="#" className="ms-[64px]">
                成為NuCares營養師
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="#"
          className="btn-cusSecondary ms-auto py-16 px-12  sm:hidden lg:block col-end-13"
        >
          註冊/登入
        </Link>
        <Image
          src={menu}
          width="24"
          height="15"
          alt="menu"
          className="col-end-5 lg:hidden ms-auto"
        />
      </div>
    </header>
  );
};

export default Header;
