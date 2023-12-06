import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import lifeSurveyStep4 from "public/images/dashboard/student/life-survey/lifeSurveyStep4.svg";
import { useEffect } from "react";

const FinishPhaseForm = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard/student/course-list");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <div className="mt-16 h-[45px] relative hidden lg:block">
        <Image src={lifeSurveyStep4} layout="fill" alt={lifeSurveyStep4} />
      </div>
      <div className="cusDashboardInnerContainer">
        <div className="max-w-[568px] mx-auto text-center my-20 font-normal">
          <p className="text-20 lg:text-24">完成問卷！</p>
          <p className="mt-8 text-14 lg:text-24">
            您可至後台管理
            <Link
              href="/dashboard/student/course-list"
              className="border-b border-black-950"
            >
              我的課程
            </Link>
            開始使用紀錄功能
          </p>
          <p className="mt-24 text-14 lg:text-16 font-thin">
            或等待5秒自動跳轉至我的課程
          </p>
        </div>
      </div>
    </>
  );
};

export default FinishPhaseForm;
