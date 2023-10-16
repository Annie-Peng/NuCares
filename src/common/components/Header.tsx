import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";
import logout from "public/images/logout.svg";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container py-10 items-center grid cusGrid lg:py-26 lg:pl-28 lg:pr-8">
        <Image
          src={logo}
          width="221"
          height="38"
          alt="logo-NuCares"
          className="col-span-3"
        />
        <nav className=" text-black-600 sm:hidden lg:block col-span-4 -ms-[calc(110px-61px)]">
          <ul className="flex font-normal">
            <li>
              <Link href="#">搜尋營養師</Link>
            </li>
            <li>
              <Link href="#" className="ms-[60px]">
                成為NuCares營養師
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="#"
          className="border border-secondary-400 text-secondary-400 font-bold rounded-10 ms-auto p-8 sm:hidden lg:block col-end-13 col-span-2"
        >
          註冊/登入
        </Link>
        <Image
          src={logout}
          width="36"
          height="36"
          alt="logout"
          className="col-end-5 lg:hidden ms-auto"
        />
      </div>
    </header>
  );
};

export default Header;
