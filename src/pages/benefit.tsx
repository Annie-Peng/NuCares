import MetaData from "@/common/components/MetaData";
import { featuresData, webProcessData } from "@/common/lib/benefitData";
import Image from "next/legacy/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BenefitPage = () => {
  const arrowNum = Array(webProcessData.length - 1).fill(null);

  return (
    <>
      <MetaData
        title="成為NuCares營養師"
        description="自由彈性、累積評價、擴展客戶群、貼心功能"
      />
      <section className="banner relative w-full h-[600px]">
        <Image
          src="/images/benefit/banner.svg"
          layout="fill"
          objectFit="cover"
          alt="banner"
        />
        <div className="absolute left-1/2 bottom-[45px] -translate-x-1/2 flex flex-col gap-32 items-center bg-white py-28 w-full lg:w-[992px] bg-opacity-60 rounded-10">
          <p className="text-[32px] font-bold text-center">
            你我一起，Cares更多人的健康人生
          </p>
          <Link
            href="/apply"
            className="text-center btn-cusBigSecondary !text-24 w-[278px]"
          >
            加入我們
          </Link>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        className="features py-50 lg:py-[70px] relative"
      >
        <h2 className="text-center text-24 font-bold">加入我們的好處</h2>
        <ul className="flex flex-wrap gap-x-[95px] gap-y-16 justify-center mt-40 container">
          {featuresData.map((feature, index) => {
            return (
              <li
                key={index}
                className="flex items-center gap-16 max-w-[600px]"
              >
                <div className="relative w-1/2 h-full lg:min-w-[314px] lg:min-h-[248px] rounded-15">
                  <Image
                    src={`/images/benefit/features/${feature.photoName}.png`}
                    layout="fill"
                    sizes="100vw"
                    objectFit="cover"
                    alt={feature.photoName}
                    className="rounded-15 "
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-20 text-primary-600 font-bold">
                    {feature.title}
                  </p>
                  <p className="mt-8">{feature.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </motion.section>
      <section className="webProcess py-50 lg:py-[70px] text-primary-600 bg-primary-100 font-GenSenRounded-700">
        <h2 className="text-[32px] text-center font-[900px] font-GenSenRounded-900">
          只要五步驟，就能開始接單
        </h2>
        <ul className="flex justify-center content-center gap-32 mt-[60px] flex-wrap lg:flex-nowrap lg:gap-[92px]">
          {webProcessData.map((step, index) => {
            return (
              <li key={index} className="w-full lg:w-[200px]">
                <div className="relative min-w-[40px] h-[58px]">
                  <Image
                    src={`/images/benefit/web-process/${step.photoName}.svg`}
                    layout="fill"
                    sizes="100vw"
                    alt={step.photoName}
                  />
                </div>
                <h3
                  className="mt-12 text-center text-20 font-bold"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                >
                  {/* {step.title} */}
                </h3>
              </li>
            );
          })}
        </ul>
        <ul className="justify-center gap-[256px]  -mt-[112px] hidden lg:flex">
          {arrowNum.map((arrow, index) => {
            return (
              <li key={index}>
                <div className="relative min-w-[36px] h-[32px]">
                  <Image
                    src={`/images/benefit/web-process/arrow.svg`}
                    layout="fill"
                    sizes="100vw"
                    alt="arrow"
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <Link
          href="/apply"
          className="text-center btn-cusBigPrimary block mx-auto w-[288px] !text-24 mt-[60px] lg:mt-[156px]"
        >
          成為NuCares營養師
        </Link>
      </section>
    </>
  );
};
export default BenefitPage;
