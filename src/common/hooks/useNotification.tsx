import { useEffect, useState } from "react";

const useNotification = () => {
  const [newNotice, setNewNotice] = useState<boolean>(false);

  useEffect(() => {
    $.connection.hub.url = "https://nucares.top/signalr";

    // 建立與 SignalR hub 的連接
    // @ts-ignore
    const notice = $.connection.notificationHub;

    // 接收後端回傳訊息
    notice.client.notify = (message: string) => {
      if (message) {
        console.log(message);
        setNewNotice(true);
      }
    };

    // 啟動連接
    $.connection.hub
      .start()
      .done(function () {
        console.log("Connected to SignalR hub!");
      })
      .fail(function (error) {
        console.error("Could not connect to SignalR hub:", error);
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

  return { newNotice, setNewNotice };
};

export default useNotification;
