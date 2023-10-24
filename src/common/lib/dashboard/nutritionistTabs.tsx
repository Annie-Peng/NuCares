interface NutritionistTabs {
  tab: string;
  tabURL: string | { [key: string]: string };
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
    tabURL: {
      main: "/dashboard/nutritionist/workshop",
      intro: "/dashboard/nutritionist/workshop/intro",
      courses: "/dashboard/nutritionist/workshop/courses",
    },
    iconURL:
      "/images/dashboard/dietary-record/sidebar-icons/nutritionist/workshop",
    iconName: "workshop.svg",
  },
];

export default nutritionistTabs;
