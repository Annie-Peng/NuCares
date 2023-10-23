interface NutritionistTabs {
  tab: string;
  tabURL: string;
  iconURL: string;
  iconName: string;
}

const nutritionistTabs: NutritionistTabs[] = [
  {
    tab: "我的學員",
    tabURL: "/dashboard/nutritionist/student-list",
    iconURL: "/images/dashboard/dietary-record/sidebar-icons/course",
    iconName: "course.svg",
  },
  {
    tab: "營養師專頁",
    tabURL: "/dashboard/nutritionist/workshop",
    iconURL:
      "/images/dashboard/dietary-record/sidebar-icons/nutritionist/workshop",
    iconName: "workshop.svg",
  },
  {
    tab: "帳戶",
    tabURL: "/dashboard/nutritionist/account",
    iconURL:
      "/images/dashboard/dietary-record/sidebar-icons/nutritionist/account",
    iconName: "account.svg",
  },
];

export default nutritionistTabs;
