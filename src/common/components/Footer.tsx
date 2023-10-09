import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.svg";
import fb from "public/images/footer/facebook.svg";
import yt from "public/images/footer/youtube.svg";
import ig from "public/images/footer/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container grid grid-flow-row items-center text-primary-500 py-40 text-center justify-center gap-y-[1.625rem] lg:gap-y-0 lg:text-left lg:py-50 lg:justify-between">
        <div className="logo border-primary-500 lg:col-span-3 order-1">
          <Image
            src={logo}
            width="239"
            height="42"
            alt="logo-NuCares"
            className="mx-auto lg:ml-0"
          />
          <p className="text-18 text-primary-400 mt-8 lg:text-22 lg:mt-10">
            Who cares? NuCares !!
          </p>
        </div>
        <ul className="media flex items-center justify-center gap-x-20 order-3 border-t border-primary-500 pt-[26px] lg:border-0 lg:pt-0 lg:ms-auto lg:col-span-2 lg:col-start-5 lg:order-2">
          <li>
            <Image src={fb} width="30" height="30" alt="facebook" />
          </li>
          <li>
            <Image src={yt} width="30" height="30" alt="youtube" />
          </li>
          <li>
            <Image src={ig} width="24" height="24" alt="instagram" />
          </li>
        </ul>
        <ul className="link flex font-normal text-14 flex-col gap-y-20 order-2 border-t border-primary-500 pt-[26px] lg:pt-0 lg:ps-20 lg:ms-8 lg:col-span-2 lg:gap-y-16 lg:col-start-7 lg:border-l-2 lg:border-t-0 lg:order-3">
          <li>
            <Link href="privacy-policy">隱私權政策</Link>
          </li>
          <li>
            <Link href="benefit-NuCares-nutritionist">成為NuCares營養師</Link>
          </li>
          <Link href="register">註冊成為會員</Link>
        </ul>
        <div className="copyright text-14 order-4 lg:col-end-13 lg:col-span-3 lg:ml-auto lg:order-4">
          © 2023 NuCares . All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
