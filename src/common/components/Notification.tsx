import { NotificationType, Token } from "@/types/interface";
import {
  useNotificationGetApiQuery,
  useNotificationReadPutApiMutation,
  useNotificationAllReadPutApiMutation,
} from "../redux/service/notification";
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

  const [notificationReadPutApi] = useNotificationReadPutApiMutation();
  const [notificationAllReadPutApi] = useNotificationAllReadPutApiMutation();
  const { data: notificationList, isLoading } = useNotificationGetApiQuery(
    {
      Token,
    },
    { refetchOnMountOrArgChange: true }
  );

  const loadingClass = "animate-pulse bg-black-600";

  const handleAllNoticeClick = async () => {
    try {
      const result = await notificationAllReadPutApi({ Token });
    } catch (error) {
      return;
    }
  };

  const handleNoticeClick = async (
    noticeMessage: NotificationFormDataItemType,
    { newUserCurrentStatus, endRouterPath }: NotificationPathResult,
    NoticeId: number,
    IsRead: boolean
  ) => {
    try {
      if (!IsRead) {
        const result = await notificationReadPutApi({ Token, NoticeId });
      }

      setCookie("UserCurrentStatus", newUserCurrentStatus);
      router.push(`${noticeMessage.url}${endRouterPath}`);
    } catch (error) {
      return;
    }
  };

  return (
    <div className="cusDropdown fixed left-0 top-0 bottom-0 text-14 p-0 bg-white lg:absolute lg:top-full lg:left-auto border-none lg:bottom-auto lg:w-[240px] lg:z-10">
      <button
        className="flex items-center justify-end px-12 py-10 text-primary-500 gap-4 w-full"
        onClick={handleAllNoticeClick}
      >
        <div className="relative w-20 h-20">
          <Image
            src={`/images/notification/check.svg`}
            alt="check"
            layout="fill"
          />
        </div>
        <p>全部顯示為已讀</p>
      </button>
      <ul className="overflow-y-scroll no-scrollbar h-full border-t border-black-100 bg-black-50 lg:min-h-[106px] lg:max-h-[626px]">
        {isLoading && (
          <div className="animate-pulse flex gap-12 px-14 py-12">
            <div className="rounded-full bg-black-200 h-[33px] w-[33px]" />
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-black-200 rounded" />
              <div className="h-2 bg-black-200 rounded" />
              <div className="h-2 bg-black-200 rounded" />
            </div>
          </div>
        )}
        {notificationList?.Data.map(
          (notification: NotificationType, index: number) => {
            const { Message, Date, NoticeId, IsRead } = notification;

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
              <Fragment key={NoticeId}>
                {index > 0 && <hr className="px-12" />}
                <li>
                  <button
                    onClick={(e) =>
                      handleNoticeClick(
                        noticeMessage,
                        notificationPath,
                        NoticeId,
                        IsRead
                      )
                    }
                    className={`px-14 py-12 w-full ${
                      IsRead ? "bg-black-50" : "bg-black-200"
                    }`}
                  >
                    <div className="flex gap-12">
                      <div className="relative">
                        <Image
                          src={`/images/notification/logo.svg`}
                          alt="logo"
                          layout="fixed"
                          width={33}
                          height={33}
                        />
                      </div>
                      <div className="text-left">
                        <p>
                          {newSubject}
                          {newMessage}
                          <u>{newObject}</u>
                        </p>
                        <p className="text-[10px] text-black-400 mt-12">
                          {Date}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              </Fragment>
            );
          }
        )}
      </ul>
      <button className="text-center text-white text-14 cusPrimaryTitle bg-primary-400 p-6 w-full block fixed bottom-0 lg:hidden">
        關閉通知
      </button>
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
