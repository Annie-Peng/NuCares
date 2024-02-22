import { useEffect, useState } from "react";
import { useNotificationNewGetApiQuery } from "../redux/service/notification";
import { Token } from "@/types/interface";

const useNotification = (Token: Token | undefined, Id: string | undefined) => {
  const [newNotice, setNewNotice] = useState<boolean>(false);

  const { data } = useNotificationNewGetApiQuery({ Token });

  useEffect(() => {
    $.connection.hub.url = `${process.env.NEXT_PUBLIC_API_URL}/signalr`;

    // 建立與 SignalR hub 的連接
    // @ts-ignore
    const notice = $.connection.notificationHub;

    // 接收後端回傳訊息
    notice.client.notify = (message: string) => {
      if (message) {
        setNewNotice(true);
      }
    };

    // 啟動連接
    $.connection.hub
      .start()
      .done(function () {
        notice.server.userConnected(Id);
      })
      .fail(function (error) {
        return;
      });

    // 斷線5秒鐘後重新連線
    $.connection.hub.disconnected(function () {
      setTimeout(function () {
        $.connection.hub.start();
      }, 5000);
    });

    // return () => {
    //   $.connection.hub.stop();
    // };
  }, []);

  useEffect(() => {
    if (data) {
      data.IsAllRead === false && setNewNotice(true);
    }
  }, [data]);

  return { newNotice, setNewNotice };
};

export default useNotification;