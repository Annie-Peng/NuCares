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
        <Image
          src={`${changeIdentity.iconURL}.svg`}
          width={27}
          height={27}
          alt={changeIdentity.iconName}
        />
      </div>
      <ul className="flex flex-col py-16 gap-16">
        {nutritionistTabs.map((nutritionistTab, index) => {
          return (
            <li key={index}>
              <Link href={nutritionistTab.tabURL}>
                <div className="inline-block align-middle mr-6">
                  <Image
                    src={`${nutritionistTab.iconURL}.svg`}
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
