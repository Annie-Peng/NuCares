interface Data {
  photoName: string;
  title: string;
  content?: string;
}

export const featuresData: Data[] = [
  {
    photoName: "flexible-time",
    title: "自由彈性",
    content: "您可以自行設定工作時間，滿足個人需求，實現工作和生活的平衡",
  },
  {
    photoName: "accumulate-comment",
    title: "累積評價",
    content: "學員的評價有助於您獲得更多學員信任，並吸引更多生意",
  },
  {
    photoName: "expand-customer",
    title: "擴展客戶群",
    content: "透過平台，您能夠接觸到來自不同地區的學員，擴展您的客戶群",
  },
  {
    photoName: "sweet-function",
    title: "貼心功能",
    content: "平台有飲食紀錄功能，幫助學員輕鬆追蹤飲食，也讓您方便提供建議",
  },
];

export const webProcessData: Data[] = [
  {
    photoName: "step1",
    title: "註冊成為會員",
  },
  {
    photoName: "step2",
    title: `申請<br/><span class="border-b-2 border-primary-500">成為NuCares營養師</span>`,
  },
  {
    photoName: "step3",
    title: "上傳證照及個人資料並等待審核",
  },
  {
    photoName: "step4",
    title: "設定自己的營養師專頁及課程方案<br/>正式上線接案",
  },
];
