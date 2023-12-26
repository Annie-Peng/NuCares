import { NotificationKey } from "@/types/interface";

type NotificationFormDataItemNameType = "UserName" | "Title" | "CourseName";

export interface NotificationFormDataItemType {
  subject?: NotificationFormDataItemNameType;
  message: string;
  object?: NotificationFormDataItemNameType;
  url: string;
}

type NotificationFormDataSetType = {
  [Key in NotificationKey]: NotificationFormDataItemType;
};

export const notificationFormDataSet: NotificationFormDataSetType = {
  已評價: {
    subject: "UserName",
    message: "對你進行了評價",
    url: "/nutritionist-list",
  },
  "已購課(營養師)": {
    subject: "UserName",
    message: "已購買",
    object: "CourseName",
    url: "/dashboard/nutritionist/student-list",
  },
  "已購課(學員)": {
    message: "購課成功，記得填寫生活問卷",
    url: "/dashboard/student/course-list",
  },
  已完成生活問卷: {
    subject: "UserName",
    message: "完成生活問卷",
    url: "/dashboard/nutritionist/student-list",
  },
  開始課程: {
    subject: "Title",
    message: "開始了",
    object: "CourseName",
    url: "/dashboard/student/course-list",
  },
};
