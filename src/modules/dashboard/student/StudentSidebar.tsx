import studentTabs from "@/common/lib/dashboard/studentTabs";
import Image from "next/image";
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
            <li
              key={index}
              className={isSelectTab ? "cusSelectTab" : "cusNoSelectTab"}
            >
              <Link href={studentTab.tabURL}>
                <div className="inline-block align-middle mr-8">
                  <Image
                    src={
                      isSelectTab
                        ? `${studentTab.iconURL}-choose.svg`
                        : `${studentTab.iconURL}.svg`
                    }
                    width={20}
                    height={20}
                    alt={studentTab.iconName}
                  />
                </div>
                <span className="align-middle">{studentTab.tab}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default StudentSidebar;
