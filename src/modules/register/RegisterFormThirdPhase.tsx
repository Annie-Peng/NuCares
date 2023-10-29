import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logoPrimary from "public/images/logo-primary-300.svg";
import registerStep3 from "public/images/register/registerStep3.svg";

const RegisterFormThirdPhase = () => {
  return (
    <form className="cusForm max-w-[464px] mx-auto mt-[75px] relative text-black-500">
      <div>
        <Image src={logoPrimary} width="147" height="27" alt="NuCares-logo" />
        <h2 className="text-20 text-primary-400 font-normal mt-12">會員註冊</h2>
      </div>
      <Image
        src={registerStep3}
        width="290"
        height="20"
        alt="registerStep2"
        layout="responsive"
      />
      <div className="flex flex-col w-full gap-32">
        <p>
          註冊成功
          <br />
          接下來請登入帳號，即可購買課程
        </p>
        <p className="mx-auto w-fit border-b border-black-500">立即登入</p>
        <p className="text-14 -mt-12">或等待5秒自動跳轉至登入畫面</p>
      </div>
    </form>
  );
};

export default RegisterFormThirdPhase;