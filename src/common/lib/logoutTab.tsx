interface LogoutTab {
  tab: string;
  tabURL: string;
  iconURL: string;
  iconName: string;
}

const logoutTab: LogoutTab = {
  tab: "登出",
  tabURL: "/",
  iconURL: "/images/dashboard/dietary-record/sidebar-icons/logout",
  iconName: "logout.svg",
};
export default logoutTab;
