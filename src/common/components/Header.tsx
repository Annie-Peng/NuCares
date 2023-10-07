import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container py-20 flex items-center">
        <Image src="/" width="150" height="50" alt="logo-NuCares" />
        <nav>
          <ul className="flex font-normal text-20">
            <li>
              <Link href="#">搜尋營養師</Link>
            </li>
            <li>
              <Link href="#">成為NuCares營養師</Link>
            </li>
          </ul>
        </nav>
        <Link href="#" className="btn-cusPrimary ms-auto font-bold">
          註冊/登入
        </Link>
      </div>
    </header>
  );
};

export default Header;
