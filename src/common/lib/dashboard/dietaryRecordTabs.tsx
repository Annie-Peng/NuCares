interface DietaryRecordTabs {
  tab: string;
  iconURL: string;
  iconName: string;
}

const dietaryRecordTabs: DietaryRecordTabs[] = [
  {
    tab: "飲食紀錄",
    iconURL: "/images/dashboard/dietary-record/mobile-sidebar-icons/food",
    iconName: "food.svg",
  },
  {
    tab: "身體紀錄",
    iconURL: "/images/dashboard/dietary-record/mobile-sidebar-icons/body",
    iconName: "body.svg",
  },
  {
    tab: "目標",
    iconURL: "/images/dashboard/dietary-record/mobile-sidebar-icons/goal",
    iconName: "goal.svg",
  },
  {
    tab: "學員",
    iconURL: "/images/dashboard/dietary-record/mobile-sidebar-icons/menu",
    iconName: "menu.svg",
  },
];

export default dietaryRecordTabs;
