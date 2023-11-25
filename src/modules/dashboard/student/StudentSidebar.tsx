import studentTabs from "@/common/lib/dashboard/studentTabs";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";

const StudentSidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <ul
        className={`sideBar text-18 font-bold flex flex-col text-black-500 mt-32`}
      >
        {studentTabs.map((studentTab, index) => {
          const isSelectTab = pathname.startsWith(studentTab.tabURL);
          return (
            <li key={index}>
              <Link
                href={studentTab.tabURL}
                className={`${isSelectTab ? "cusSelectTab" : "cusNoSelectTab"}`}
              >
                <div className="relative flex items-center gap-8">
                  <Image
                    src={
                      isSelectTab
                        ? `${studentTab.iconURL}-choose.svg`
                        : `${studentTab.iconURL}.svg`
                    }
                    layout="fixed"
                    width={20}
                    height={20}
                    alt={studentTab.iconName}
                  />
                  <span>{studentTab.tab}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default StudentSidebar;
