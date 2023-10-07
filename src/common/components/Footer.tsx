import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border">
      <div className="container flex justify-between items-center py-[50px]">
        <div className="logo border">
          <Image src="/" width="100" height="100" alt="logo-NuCares" />
          <p className="text-24">Who cares? NuCares !!</p>
        </div>
        <ul className="media flex gap-x-20">
          <li>
            <Image src="/" width="50" height="50" alt="facebook" />
          </li>
          <li>
            <Image src="/" width="50" height="50" alt="youtube" />
          </li>
          <li>
            <Image src="/" width="50" height="50" alt="instagram" />
          </li>
        </ul>
        <ul className="link border-l-2 flex flex-col gap-y-[17px] ps-[22px] font-normal">
          <li>
            <Link href="privacy-policy">隱私權政策</Link>
          </li>
          <li>
            <Link href="benefit-NuCares-nutritionist">成為NuCares營養師</Link>
          </li>
          <Link href="register">註冊成為會員</Link>
        </ul>
        <div className="copyright">© 2023 NuCares . All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
