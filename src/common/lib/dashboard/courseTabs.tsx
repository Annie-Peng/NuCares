import { FC } from "react";

export interface CourseTabs {
  [key: string]: {
    listName: string;
    tabs: string[];
  };
}

const courseTabs: CourseTabs = {
  nu: {
    listName: "我的學員列表",
    tabs: [
      "訂單編號",
      "學員/課程名稱",
      "課程期間",
      "狀態",
      "飲食生活問券",
      "課程開始",
    ],
  },
  user: {
    listName: "我的課程列表",
    tabs: [
      "訂單編號",
      "營養師/課程名稱",
      "課程期間",
      "狀態",
      "飲食生活問券",
      "評價",
    ],
  },
};

export default courseTabs;
