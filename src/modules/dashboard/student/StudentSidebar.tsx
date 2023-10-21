import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface StudentTabs {
  tab: string;
  tabURL: string;
  iconURL: string;
  iconName: string;
}

const studentTabs: StudentTabs[] = [
  {
    tab: "我的課程",
    tabURL: "/dashboard/student/course-list",
    iconURL: "/images/dashboard/dietary-record/sidebar-icons/course",
    iconName: "course.svg",
  },
  {
    tab: "訂單紀錄",
    tabURL: "/dashboard/student/order",
    iconURL: "/images/dashboard/dietary-record/sidebar-icons/student/order",
    iconName: "order.svg",
  },
  {
    tab: "收藏營養師",
    tabURL: "/dashboard/student/favorite",
    iconURL: "/images/dashboard/dietary-record/sidebar-icons/student/favorite",
    iconName: "favorite.svg",
  },
  {
    tab: "個人資料",
    tabURL: "/dashboard/student/information",
    iconURL:
      "/images/dashboard/dietary-record/sidebar-icons/student/information",
    iconName: "information.svg",
  },
];

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
