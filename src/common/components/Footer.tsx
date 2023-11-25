import Link from "next/link";
import Image from "next/legacy/image";
import logo from "public/images/logo.svg";
import fb from "public/images/footer/facebook.svg";
import yt from "public/images/footer/youtube.svg";
import ig from "public/images/footer/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container grid cusGridPC grid-flow-row items-center text-primary-500 py-20 text-center justify-center gap-y-16 lg:gap-y-0 lg:text-left lg:py-50 lg:justify-between lg:pl-28 lg:pr-8">
        <div className="flex flex-wrap logo border-primary-500 lg:col-span-5 order-1 items-center lg:flex-nowrap lg:gap-24">
          <div className="mx-auto relative w-[134px] h-[25px] lg:w-[159px] lg:h-[28px]">
            <Image src={logo} layout="fill" alt="logo-NuCares" />
          </div>
          <p className="w-full text-18 text-primary-400 mt-8 lg:mt-0 lg:font-bold lg:text-22 lg:whitespace-nowrap">
            Who cares? NuCares !!
          </p>
        </div>
        <ul
          className="
        media flex items-center justify-center gap-x-20 order-3 border-t border-primary-500 lg:border-0 lg:ms-auto lg:col-span-2 lg:col-start-6 lg:order-2 
        "
        >
          <li className="hidden lg:block">
            <Image src={fb} width={30} height={30} alt="facebook" />
          </li>
          <li className="hidden lg:block">
            <Image src={yt} width={30} height={30} alt="youtube" />
          </li>
          <li className="hidden lg:block">
            <Image src={ig} width={24} height={24} alt="instagram" />
          </li>
        </ul>
        <ul className="link font-normal text-14 flex-col gap-y-20 order-2 border-t border-primary-500 pt-[26px] hidden lg:pt-0 lg:ps-20 lg:flex lg:ms-8 lg:col-span-2 lg:gap-y-16 lg:col-start-8 lg:border-l lg:border-t-0 lg:order-3 lg:font-thin">
          <li>
            <Link href="#">隱私權政策</Link>
          </li>
          <li>
            <Link href="/benefit">成為NuCares營養師</Link>
          </li>
          <Link href="/register">註冊成為會員</Link>
        </ul>
        <div className="copyright text-14 order-5 lg:col-end-13 lg:col-span-3 lg:ml-auto lg:order-4">
          © 2023 NuCares . All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
