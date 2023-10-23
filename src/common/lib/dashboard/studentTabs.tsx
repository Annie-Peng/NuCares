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
    tab: "會員資料",
    tabURL: "/dashboard/student/information",
    iconURL:
      "/images/dashboard/dietary-record/sidebar-icons/student/information",
    iconName: "information.svg",
  },
  {
    tab: "修改密碼",
    tabURL: "/dashboard/student/update-password",
    iconURL: "/images/dashboard/dietary-record/sidebar-icons/student/password",
    iconName: "password.svg",
  },
];

export default studentTabs;
