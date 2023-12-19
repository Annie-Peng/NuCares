import { NotificationType, Token } from "@/types/interface";
import { useNotificationGetApiQuery } from "../redux/service/notification";
import { FC, useEffect } from "react";
import { notificationUrl } from "../lib/notificationUrl";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";

interface NotificationProps {
  Token: Token;
}

const Notification: FC<NotificationProps> = ({ Token }) => {
  const {
    data: notificationList,
    isLoading,
    error,
  } = useNotificationGetApiQuery({
    Token,
  });

  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (error) {
      return;
    }
  }, [isLoading, error]);

  const UserCurrentStatus = getCookie("UserCurrentStatus");

  return (
    <div className="cusDropdown w-[200px] h-[500px] border overflow-y-scroll no-scrollbar">
      {notificationList && (
        <ul>
          {notificationList.Data.map(
            (notification: NotificationType, index: number) => {
              const { CourseId, NutritionistId } = notification;
              let endRouterPath = "";
              let newUserCurrentStatus = UserCurrentStatus;
              setCookie("UserCurrentStatus", "nu");
              switch (notification.Message) {
                case "已完成生活問卷": {
                  endRouterPath = `/${CourseId}/life-survey`;
                  newUserCurrentStatus = "nu";
                  break;
                }
                case "已購課": {
                  endRouterPath = "";
                  break;
                }
                case "已評價": {
                  endRouterPath = `/${NutritionistId}`;
                  break;
                }
              }
              return (
                <>
                  <li key={index}>
                    <button
                      onClick={() => {
                        setCookie("UserCurrentStatus", newUserCurrentStatus);
                        router.push(
                          `${
                            notificationUrl[notification.Message]
                          }${endRouterPath}`
                        );
                      }}
                    >
                      <h2>通知</h2>
                      <p>
                        {notification.UserName} {notification.Message}
                      </p>
                      <p>{notification.Date}</p>
                    </button>
                  </li>
                  <hr className="my-20" />
                </>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
};

export default Notification;
