import { FC } from "react";

export interface CourseTabs {
  [key: string]: {
    listName: string;
    tabs: string[];
  };
}

const courseTabs: CourseTabs = {
  nu: {
    listName: "學員列表",
    tabs: ["訂單編號", "學員/課程名稱", "課程期間", "課程狀態", "飲食生活問卷"],
  },
  user: {
    listName: "課程列表",
    tabs: [
      "訂單編號",
      "營養師/課程名稱",
      "課程期間",
      "狀態",
      "飲食生活問卷",
      "評價",
    ],
  },
};

export default courseTabs;
