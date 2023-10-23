import nutritionistTabs from "@/common/lib/dashboard/nutritionistTabs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NutritionistSidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <ul
        className={`sideBar text-18 font-bold flex flex-col text-black-500 mt-32`}
      >
        {nutritionistTabs.map((nutritionistTab, index) => {
          const isSelectTab = pathname.startsWith(nutritionistTab.tabURL);
          return (
            <li
              key={index}
              className={isSelectTab ? "cusSelectTab" : "cusNoSelectTab"}
            >
              <Link href={nutritionistTab.tabURL}>
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
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NutritionistSidebar;
