import { NotificationType, Token } from "@/types/interface";
import { useNotificationGetApiQuery } from "../redux/service/notification";
import { FC, Fragment } from "react";
import {
  NotificationFormDataItemType,
  notificationFormDataSet,
} from "../lib/notificationFormDataSet";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";

interface NotificationPathResult {
  endRouterPath: string;
  newUserCurrentStatus: string | undefined;
}

interface NotificationProps {
  Token: Token;
}

const Notification: FC<NotificationProps> = ({ Token }) => {
  const router = useRouter();
  const UserCurrentStatus = getCookie("UserCurrentStatus");

  const { data: notificationList } = useNotificationGetApiQuery(
    {
      Token,
    },
    { refetchOnMountOrArgChange: true }
  );

  const handleNoticeClick = (
    noticeMessage: NotificationFormDataItemType,
    { newUserCurrentStatus, endRouterPath }: NotificationPathResult
  ) => {
    setCookie("UserCurrentStatus", newUserCurrentStatus);
    router.push(`${noticeMessage.url}${endRouterPath}`);
  };

  return (
    <div className="cusDropdown w-[240px] min-h-[180px] max-h-[665px] text-14 p-0">
      <button className="flex items-center justify-end px-12 py-10 text-primary-500 gap-4 w-full">
        <div className="relative w-20 h-20">
          <Image
            src={`/images/notification/check.svg`}
            alt="check"
            layout="fill"
          />
        </div>
        <p>全部顯示為已讀</p>
      </button>
      {notificationList && (
        <ul className="overflow-y-scroll border-t border-black-100">
          {notificationList.Data.map(
            (notification: NotificationType, index: number) => {
              const { Message, Date } = notification;

              const notificationPath = selectNotificationPath(
                notification,
                UserCurrentStatus
              );

              const noticeMessage = notificationFormDataSet[Message];

              const newSubject = noticeMessage.subject
                ? notification[noticeMessage.subject]
                : "";
              const newObject = noticeMessage.object
                ? notification[noticeMessage.object]
                : "";
              const newMessage = noticeMessage.message;

              return (
                <Fragment key={index}>
                  {index > 0 && <hr />}
                  <li>
                    <button
                      onClick={(e) =>
                        handleNoticeClick(noticeMessage, notificationPath)
                      }
                      className="p-12"
                    >
                      <div className="flex gap-12">
                        <div className="relative w-[33px] h-[33px]">
                          <Image
                            src={`/images/notification/logo.svg`}
                            alt="logo"
                            layout="fill"
                          />
                        </div>
                        <p className="text-left">
                          {newSubject} {newMessage} {newObject}
                        </p>
                      </div>
                      <p className="text-right mt-8">{Date}</p>
                    </button>
                  </li>
                </Fragment>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
};

export default Notification;

function selectNotificationPath(
  { Message, CourseId, NutritionistId }: NotificationType,
  UserCurrentStatus: string | undefined
): NotificationPathResult {
  let endRouterPath = "";
  let newUserCurrentStatus = UserCurrentStatus;
  switch (Message) {
    case "已完成生活問卷": {
      endRouterPath = `/${CourseId}/life-survey`;
      newUserCurrentStatus = "nu";
      break;
    }
    case "已購課(營養師)" || "已購課(學員)": {
      endRouterPath = "";
      break;
    }
    case "已評價": {
      endRouterPath = `/${NutritionistId}`;
      break;
    }
    case "開始課程": {
      endRouterPath = `/${CourseId}`;
      break;
    }
  }
  return { endRouterPath, newUserCurrentStatus };
}
