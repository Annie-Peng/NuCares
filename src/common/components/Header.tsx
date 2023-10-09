import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container py-20 flex items-center">
        <Image src={logo} width="221" height="38" alt="logo-NuCares" />
        <nav className="ms-[64px] text-black-600">
          <ul className="flex font-normal gap-x-[64px]">
            <li>
              <Link href="#">搜尋營養師</Link>
            </li>
            <li>
              <Link href="#">成為NuCares營養師</Link>
            </li>
          </ul>
        </nav>
        <Link href="#" className="btn-cusSecondary ms-auto py-16 px-12">
          註冊/登入
        </Link>
      </div>
    </header>
  );
};

export default Header;
