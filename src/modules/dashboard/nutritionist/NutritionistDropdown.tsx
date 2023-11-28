import Link from "next/link";
import Image from "next/legacy/image";
import changeIdentity from "@/common/lib/dashboard/changeIdentity";
import nutritionistTabs from "@/common/lib/dashboard/nutritionistTabs";
import logoutTab from "@/common/lib/logoutTab";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";

const NutritionistDropdown = () => {
  const router = useRouter();

  function handleChangeID() {
    setCookie("UserCurrentStatus", "user");
    router.push("/dashboard/student/course-list");
  }

  function handleLogoutClick() {
    deleteCookie("Id");
    deleteCookie("Token");
    deleteCookie("UserName");
    deleteCookie("Email");
    deleteCookie("ImgUrl");
    deleteCookie("IsNutritionist");
    deleteCookie("UserCurrentStatus");
    router.push("/");
  }

  return (
    <div className="cusDropdown min-w-[196px]">
      <div className="flex gap-4">
        <span className="cusNIdentity py-4 text-center w-full rounded-[45px]">
          營養師
        </span>
        <button
          type="button"
          onClick={handleChangeID}
          className="flex items-center"
        >
          <Image
            src={`${changeIdentity.iconURL}.svg`}
            layout="fixed"
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
                    ? (nutritionistTab.tabURL as { main: string }).main
                    : nutritionistTab.tabURL
                }
                className="block"
              >
                <div className="flex relative gap-6">
                  <Image
                    src={`${nutritionistTab.iconURL}.svg`}
                    layout="fixed"
                    width={20}
                    height={20}
                    alt={nutritionistTab.iconName}
                  />
                  <span>{nutritionistTab.tab}</span>
                </div>
              </Link>
              {showSubTabs && (
                <ul className="mt-16 flex flex-col gap-16 text-black-500">
                  <li>
                    <Link
                      href={(nutritionistTab.tabURL as { intro: string }).intro}
                      className="block pl-28"
                    >
                      關於我
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        (nutritionistTab.tabURL as { courses: string }).courses
                      }
                      className="block pl-28"
                    >
                      課程方案
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="pt-16 border-t w-full flex items-center justify-center gap-6"
        onClick={handleLogoutClick}
      >
        <Image
          src={`${logoutTab.iconURL}.svg`}
          layout="fixed"
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
