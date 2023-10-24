import Link from "next/link";
import Image from "next/image";
import changeIdentity from "@/common/lib/dashboard/changeIdentity";
import nutritionistTabs from "@/common/lib/dashboard/nutritionistTabs";
import logoutTab from "@/common/lib/dashboard/logoutTab";

const NutritionistDropdown = () => {
  return (
    <div className="cusDropdown min-w-[196px]">
      <div className="flex gap-4">
        <span className="cusNIdentity py-4 text-center w-full rounded-[45px]">
          營養師
        </span>
        <button>
          <Image
            src={`${changeIdentity.iconURL}.svg`}
            width={27}
            height={27}
            alt={changeIdentity.iconName}
          />
        </button>
      </div>
      <ul className="flex flex-col py-16 gap-32">
        {nutritionistTabs.map((nutritionistTab, index) => {
          const showSubTabs = typeof nutritionistTab.tabURL === "object";
          return (
            <li key={index}>
              <Link
                href={
                  showSubTabs
                    ? nutritionistTab.tabURL.main
                    : nutritionistTab.tabURL
                }
                className="block"
              >
                <div className="inline-block align-middle mr-6">
                  <Image
                    src={`${nutritionistTab.iconURL}.svg`}
                    width={20}
                    height={20}
                    alt={nutritionistTab.iconName}
                  />
                </div>
                <span className="align-middle">{nutritionistTab.tab}</span>
                {showSubTabs && (
                  <ul className="ml-28 mt-16 flex flex-col gap-16 text-black-500">
                    <li>
                      <Link
                        href={nutritionistTab.tabURL.intro}
                        className="block"
                      >
                        關於我
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={nutritionistTab.tabURL.courses}
                        className="block"
                      >
                        課程方案
                      </Link>
                    </li>
                  </ul>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="pt-16 border-t w-full flex justify-center gap-6"
      >
        <Image
          src={`${logoutTab.iconURL}.svg`}
          width={20}
          height={20}
          alt={logoutTab.iconName}
        />
        <span className="align-middle">{logoutTab.tab}</span>
      </button>
    </div>
  );
};

export default NutritionistDropdown;
