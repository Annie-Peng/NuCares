import { commonRequiredErrMsg } from "../errMsg/commonErrMsg";
import lifeSurveyStep1 from "public/images/dashboard/student/life-survey/lifeSurveyStep1.svg";
import lifeSurveyStep2 from "public/images/dashboard/student/life-survey/lifeSurveyStep2.svg";
import lifeSurveyStep3 from "public/images/dashboard/student/life-survey/lifeSurveyStep3.svg";
import lifeSurveyStep1SmProcess from "public/images/dashboard/student/life-survey/lifeSurveyStep1-sm-process.svg";
import lifeSurveyStep2SmProcess from "public/images/dashboard/student/life-survey/lifeSurveyStep2-sm-process.svg";
import lifeSurveyStep3SmProcess from "public/images/dashboard/student/life-survey/lifeSurveyStep3-sm-process.svg";
import lifeSurveyStep1SmText from "public/images/dashboard/student/life-survey/lifeSurveyStep1-sm-text.svg";
import lifeSurveyStep2SmText from "public/images/dashboard/student/life-survey/lifeSurveyStep2-sm-text.svg";
import lifeSurveyStep3SmText from "public/images/dashboard/student/life-survey/lifeSurveyStep3-sm-text.svg";

export const lifeSurveyTabs = [
  {
    title: "個人基本/生理資料",
    image: {
      lg: lifeSurveyStep1,
      sm: {
        process: lifeSurveyStep1SmProcess,
        text: lifeSurveyStep1SmText,
      },
    },
    range: [1, 4],
  },
  {
    title: "個人/家族病史",
    image: {
      lg: lifeSurveyStep2,
      sm: {
        process: lifeSurveyStep2SmProcess,
        text: lifeSurveyStep2SmText,
      },
    },
    range: [5, 9],
  },
  {
    title: "飲食習慣",
    image: {
      lg: lifeSurveyStep3,
      sm: {
        process: lifeSurveyStep3SmProcess,
        text: lifeSurveyStep3SmText,
      },
    },
    range: [10, 19],
  },
];

const lifeSurveyData = [
  {
    method: "single-choice",
    title: "生育（男性免填）",
    choices: ["無", "一胎", "二胎", "四胎或以上"],
  },
  {
    method: "single-choice",
    title: "請問是否停經?(男性免填)",
    choices: ["是", "否"],
  },
  {
    method: "single-choice",
    title: "如仍有月經，可能有的狀況是?(男性免填)",
    choices: [
      "經血量少",
      "經血量多",
      "週期不規則",
      "經前症候群",
      "正常沒有特別狀況",
      "其他",
    ],
  },
  {
    method: "input",
    title: "如仍有月經，最近三次月經時間(男性免填)",
    choices: [""],
  },
  {
    method: "single-choice",
    title: "父母親是否有肥胖的問題?",
    choices: ["雙親", "母親", "父親", "無"],
    required: commonRequiredErrMsg,
  },
  {
    method: "multiple-choices",
    title: "是否有家族病史?(可複選)",
    choices: [
      "否",
      "糖尿病",
      "高血壓",
      "高血脂",
      "痛風",
      "癌症",
      "阿茲海默症",
      "其他",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "single-choice",
    title: "請問排便性質",
    choices: [
      "水狀(腹瀉)",
      "稀便(腹瀉)",
      "軟便或香蕉狀",
      "硬便或顆粒狀",
      "其他",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "multiple-choices",
    title: "過去病史，是否有下列症狀?(可複選) ",
    choices: [
      "無",
      "糖尿病",
      "高血壓",
      "高血脂",
      "脂肪肝",
      "心臟病",
      "痛風",
      "打呼",
      "膽結石",
      "下背痛",
      "不孕症",
      "月經異常",
      "甲狀腺疾病",
      "心臟皮膚癢病",
      "便秘",
      "其他",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "multiple-choices",
    title: "目前正服用的藥物(可複選)",
    choices: [
      "無",
      "避孕藥",
      "停經後荷爾蒙補充劑",
      "糖尿病藥",
      "類固醇",
      "甲狀腺藥物",
      "高血壓藥",
      "降血脂藥",
      "降尿酸藥",
      "心臟病用藥(例如抗凝血劑)",
      "關節炎用藥",
      "神經、精神科用藥",
      "其他",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "single-choice",
    title: "每天的飲水量? ",
    choices: [
      "1000c.c.以下",
      "1000 ~ 1500c.c.",
      "1500~ 2000c.c.",
      "2000~ 2500c.c.",
      "2500c.c.以上",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "multiple-choices",
    title: "您的飲食型態是?(可複選)",
    choices: [
      "三餐正常",
      "常集中一餐進食",
      "常以點心取代正餐",
      "非常不規律",
      "不吃早餐",
      "一天只吃兩餐",
      "其他",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "single-choice",
    title: "請問飲食種類?",
    choices: ["葷食", "全素", "蛋奶素", "鍋邊素", "其他"],
    required: commonRequiredErrMsg,
  },
  {
    method: "multiple-choices",
    title: "您的日常飲食偏好，有的項目請打勾(可複選)",
    choices: [
      "口味偏重",
      "青菜少吃",
      "愛喝湯",
      "愛吃零食及甜食",
      "會吃魚頭/蝦頭",
      "硬便或顆粒狀",
      "愛吃海鮮",
      "喜歡吃麵包及麵食",
      "喜歡吃肉",
      "喜愛米飯",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "single-choice",
    title: "請問每週外食次數(早餐除外)",
    choices: [
      "自己煮居多，很少外食",
      "上班外食，回家吃家裡煮",
      "外食，每週超過四天以上",
      "無",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "multiple-choices",
    title: "目前是否有完全不吃的食物類別(例如乳品、水果、蔬菜等)(可複選)",
    choices: ["乳品", "水果", "蔬菜", "蛋奶素", "全素", "什麼都吃", "其他"],
    required: commonRequiredErrMsg,
  },
  {
    method: "multiple-choices",
    title: "是否有下列習慣(可複選)",
    choices: [
      "喜吃零食",
      "喜歡吃甜食",
      "喜歡吃碳水化合物的食物(例如飯/麵/麵包)",
      "喜歡吃肉",
      "喜歡油炸食物",
      "喜喝含糖飲料",
      "容易暴飲暴食",
      "宵夜",
      "吸菸",
      "飲酒",
      "應酬(一週一次以上才算)",
      "無上列習慣",
      "其他",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "multiple-choices",
    title: "對於食慾比較頃向(可複選)",
    choices: [
      "經常感到飢餓",
      "正餐時才會感到飢餓",
      "很少感到飢餓",
      "晚上特別想吃東西",
      "其他",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "multiple-choices",
    title: "通常/喜歡運動的項目是什麼呢(可複選)",
    choices: [
      "無",
      "爬山",
      "慢跑",
      "騎車",
      "健走",
      "重訓",
      "有氧舞蹈",
      "瑜伽",
      "其他",
    ],
    required: commonRequiredErrMsg,
  },
  {
    method: "multiple-choices",
    title: "最希望改善的是(可複選)",
    choices: [
      "減重",
      "健檢數字可以更好",
      "改善疲勞",
      "更年期障礙",
      "皮膚變好",
      "泌尿道感染改善",
      "容易入睡",
      "增強體力",
      "眼睛乾澀",
      "免疫提升",
      "便秘",
      "消化機能",
      "其他",
    ],
    required: commonRequiredErrMsg,
  },
];

export default lifeSurveyData;
