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
    message: "已對課程做了評價",
    url: "/nutritionist-list",
  },
  "已購課(營養師)": {
    subject: "UserName",
    message: "已成功購買您的",
    object: "CourseName",
    url: "/dashboard/nutritionist/student-list",
  },
  "已購課(學員)": {
    message: "記得課程開始前先填寫飲食生活問卷唷！",
    url: "/dashboard/student/course-list",
  },
  已完成生活問卷: {
    subject: "UserName",
    message: "已完成生活問卷",
    url: "/dashboard/nutritionist/student-list",
  },
  開始課程: {
    subject: "Title",
    message: "營養師開始了",
    object: "CourseName",
    url: "/dashboard/student/course-list",
  },
};
