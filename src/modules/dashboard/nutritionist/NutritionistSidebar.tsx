import nutritionistTabs from "@/common/lib/dashboard/nutritionistTabs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const NutritionistSidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  const [showWorkshopTab, setShowWorkshopTab] = useState(false);

  return (
    <>
      <ul
        className={`sideBar text-18 font-bold flex flex-col text-black-500 mt-32`}
      >
        {nutritionistTabs.map((nutritionistTab, index) => {
          const isSelectTab = pathname.startsWith(
            typeof nutritionistTab.tabURL === "string"
              ? nutritionistTab.tabURL
              : nutritionistTab.tabURL.main
          );
          return (
            <li key={index}>
              {typeof nutritionistTab.tabURL === "string" ? (
                <Link
                  href={nutritionistTab.tabURL}
                  className={isSelectTab ? "cusSelectTab" : "cusNoSelectTab"}
                >
                  <div className="inline-block align-middle mr-8">
                    <Image
                      src={
                        isSelectTab
                          ? `${nutritionistTab.iconURL}-choose.svg`
                          : `${nutritionistTab.iconURL}.svg`
                      }
                      width={20}
                      height={20}
                      alt={nutritionistTab.iconName}
                    />
                  </div>
                  <span className="align-middle">{nutritionistTab.tab}</span>
                </Link>
              ) : (
                <>
                  <Link
                    href={nutritionistTab.tabURL.main}
                    className={`relative ${
                      isSelectTab ? "cusSelectTab" : "cusNoSelectTab"
                    }`}
                    onClick={() => setShowWorkshopTab(!showWorkshopTab)}
                  >
                    <div className="inline-block align-middle mr-8">
                      <Image
                        src={
                          isSelectTab
                            ? `${nutritionistTab.iconURL}-choose.svg`
                            : `${nutritionistTab.iconURL}.svg`
                        }
                        width={20}
                        height={20}
                        alt={nutritionistTab.iconName}
                      />
                    </div>
                    <span className="align-middle">{nutritionistTab.tab}</span>
                    <Image
                      src={
                        isSelectTab
                          ? `${nutritionistTab.iconDropdownURL}-choose.svg`
                          : `${nutritionistTab.iconDropdownURL}.svg`
                      }
                      width={20}
                      height={20}
                      alt={nutritionistTab.iconDropdownName || "dropdown"}
                      className="absolute top-24 right-28"
                    />
                  </Link>
                  {showWorkshopTab && (
                    <ul className="py-20 flex flex-col gap-12 pl-[75px]">
                      <li>
                        <Link
                          href={nutritionistTab.tabURL.intro}
                          className={
                            pathname === nutritionistTab.tabURL.intro
                              ? "text-primary-500"
                              : ""
                          }
                        >
                          關於我
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={nutritionistTab.tabURL.courses}
                          className={
                            pathname === nutritionistTab.tabURL.courses
                              ? "text-primary-500"
                              : ""
                          }
                        >
                          課程方案
                        </Link>
                      </li>
                    </ul>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NutritionistSidebar;
