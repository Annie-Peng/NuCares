import {
  serviceData,
  featuresData,
  successCasesData,
  webProcessData,
} from "@/common/lib/dashboard/homeData";
import Image from "next/legacy/image";
import Link from "next/link";
import axios from "axios";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FC } from "react";
import useResize from "@/common/hooks/useResize";
import { NutritionistsType } from "@/types/interface";
import MetaData from "@/common/components/MetaData";
import { motion } from "framer-motion";

interface HomePageProps {
  nutritionists: NutritionistsType[];
}

const HomePage: FC<HomePageProps> = ({ nutritionists }) => {
  const arrowNum = Array(webProcessData.length - 1).fill(null);
  const isMobile = useResize();
  return (
    <>
      <MetaData description="體重控制、上班族營養、樂齡營養與保健、孕期營養" />
      <section className="banner relative w-full h-[600px]">
        <Image
          src="/images/home/banner.svg"
          layout="fill"
          alt="banner"
          className="object-cover"
          priority={true}
        />
        <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
          <p className="text-[28px] font-bold">您是否吃得健康？</p>
          <p className="text-[32px] font-bold">由專業營養師告訴您</p>
          <Link
            href="/nutritionist-list"
            className="text-center btn-cusBigSecondary w-full !text-24 mt-40"
          >
            立即諮詢
          </Link>
        </div>
      </section>
      <section className="recommendation container  py-50 lg:py-[70px]">
        <h2 className="text-24 text-center font-bold">人氣營養師推薦</h2>
        <ul className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={isMobile ? 1 : 6}
            navigation
            className="mt-40"
          >
            {nutritionists.map((nutritionist, index) => {
              return (
                <SwiperSlide key={nutritionist.NutritionistId}>
                  <Link
                    href={`/nutritionist-list/${nutritionist.NutritionistId}`}
                  >
                    <div className="relative">
                      <Image
                        src={nutritionist.PortraitImage}
                        alt="photo"
                        className="rounded-5"
                        layout="responsive"
                        width={196}
                        height={245}
                      />
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-whiteGradient" />
                    </div>
                    <h3 className="text-18 font-normal">
                      {nutritionist.Title} 營養師
                    </h3>
                    <ul className="flex flex-wrap gap-8 mt-4">
                      {nutritionist.Expertise.map((tag, index) => {
                        return (
                          <li
                            key={`tag${index}`}
                            className="border-primary-500 text-primary-500 px-4 rounded-l-35 rounded-r-35 border text-12"
                          >
                            {tag}
                          </li>
                        );
                      })}
                    </ul>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ul>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        className="service container py-50 lg:py-[70px]"
      >
        <h2 className="text-24 text-center font-bold">您想要的健康服務</h2>
        <ul className="flex flex-wrap justify-center gap-26 mt-40">
          {serviceData.map((service, index) => {
            return (
              <li key={index} className="rounded-15 group">
                <Link
                  href={`/nutritionist-list?page=1&filter=${service.href}`}
                  className="relative w-[525px] h-[300px] block container"
                >
                  <Image
                    src={`/images/home/service/${service.photoName}.png`}
                    alt={service.photoName}
                    className="rounded-15 object-cover"
                    layout="fill"
                  />
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-white opacity-30 group-hover:opacity-80" />
                  <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-5 bg-white bg-opacity-80 text-primary-500 text-24 backdrop-blur-[2px] group-hover:text-white group-hover:bg-primary-500">
                    {service.title}
                  </h3>
                  <p className="absolute bottom-0 left-0 right-0 text-center py-12 text-white bg-primary-500 bg-opacity-70 rounded-b-15 backdrop-blur-[2px] group-hover:bg-opacity-80">
                    {service.content}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        className="features py-50 lg:py-[70px] relative bg-primary-100 font-GenSenRounded-700"
      >
        <h2 className="text-primary-600 text-center">
          <div className="relative container max-w-[570px] mx-auto">
            <Image
              src="/images/home/features/slogan.svg"
              layout="responsive"
              width={570}
              height={49}
              alt="來NuCares，我們Cares"
              priority={true}
            />
          </div>
        </h2>
        <ul className="flex flex-wrap gap-80 justify-center mt-[68px] container">
          {featuresData.map((feature, index) => {
            return (
              <li key={index} className="flex items-center gap-20 w-[390px]">
                <div className="relative min-w-[185px] min-h-[185px]">
                  <Image
                    src={`/images/home/features/${feature.photoName}.jpg`}
                    layout="fill"
                    alt={feature.photoName}
                    className="rounded-full"
                  />
                </div>
                <p
                  className="text-18 font-bold"
                  dangerouslySetInnerHTML={{ __html: feature.content }}
                ></p>
              </li>
            );
          })}
        </ul>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        className="successCase container py-[70px]"
      >
        <h2 className="text-24 font-bold text-center">成功案例</h2>
        <ul className="flex flex-col gap-[90px] mt-40 max-w-[1076px] mx-auto">
          {successCasesData.map((successCase, index) => {
            const isEven = index % 2 === 0;
            return (
              <li
                key={index}
                className="flex flex-wrap gap-40 mx-auto items-center lg:flex-nowrap"
              >
                <div
                  className={`relative w-full h-[245px] lg:w-[526px] lg:h-[331px] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={`/images/home/success-cases/${successCase.photoName}.svg`}
                    layout="fill"
                    priority={true}
                    alt={successCase.photoName}
                  />
                  <div className="absolute bottom-0 left-0 right-[195px] lg:right-[267px] text-center py-10 bg-black-200 bg-opacity-70 font-bold rounded-bl-[8px]">
                    諮詢前
                  </div>
                  <div className="absolute bottom-0 left-[196px] lg:left-[263px] right-6 text-center text-white py-10 bg-primary-400 bg-opacity-70 font-bold">
                    諮詢後
                  </div>
                  <div className="absolute -top-[5px] -bottom-[5px] left-[193px] lg:left-[258px] right-0 border-[6px] border-primary-500 rounded-10" />
                </div>
                <div
                  className={`flex flex-col gap-24 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <p className="text-22 font-bold">{successCase.title}</p>
                  <p
                    className="text-20 max-w-[312px]"
                    dangerouslySetInnerHTML={{ __html: successCase.content }}
                  ></p>
                  <div className="relative min-h-[103px] max-w-[453px] mt-8">
                    <Image
                      src={`/images/home/success-cases/talk.svg`}
                      layout="fill"
                      priority={true}
                      alt={successCase.photoName}
                    />
                    <p className="p-26">{successCase.talk}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </motion.section>
      <section className="webProcess py-50 lg:py-[70px] text-secondary-500 bg-secondary-100 font-GenSenRounded-700">
        <h2 className="text-[32px] text-center font-GenSenRounded-900">
          網站使用流程
        </h2>
        <ul className="flex justify-center content-center gap-32 mt-[60px] flex-wrap lg:flex-nowrap lg:gap-[92px]">
          {webProcessData.map((step, index) => {
            return (
              <li key={index} className="w-full lg:w-[160px]">
                <div className="relative min-w-[40px] h-[58px]">
                  <Image
                    src={`/images/home/web-process/${step.photoName}.svg`}
                    layout="fill"
                    alt={step.photoName}
                  />
                </div>
                <h3
                  className="mt-12 text-center text-20"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                ></h3>
              </li>
            );
          })}
        </ul>
        <ul className="justify-center gap-[216px] -mt-80 hidden lg:flex">
          {arrowNum.map((arrow, index) => {
            return (
              <li key={index}>
                <div className="relative min-w-[36px] h-[32px]">
                  <Image
                    src={`/images/home/web-process/arrow.svg`}
                    layout="fill"
                    alt="arrow"
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <Link
          href="/nutritionist-list"
          className="text-center btn-cusBigSecondary block mx-auto w-[288px] !text-24 mt-[60px] lg:mt-[124px]"
        >
          我要變健康
        </Link>
      </section>
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/home/topNu`
  );
  const data = result.data.Data;

  return {
    props: {
      nutritionists: data,
    },
  };
};
