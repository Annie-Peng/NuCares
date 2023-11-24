import { ComponentType } from "@/types/interface";
import cities from "@/common/lib/dashboard/cities";
import { getCookie } from "cookies-next";
import {
  commonEmailPattern,
  commonErrMsgClass,
  commonPhonePattern,
  commonRequiredErrMsg,
} from "@/common/lib/dashboard/errMsg/commonErrMsg";
import useEditForm from "@/common/hooks/useEditForm";
import { useIntroPutApiMutation } from "@/common/redux/service/intro";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@/common/redux/features/showModal";

interface NutritionistIntroFormProps {
  Token: string;
  renderData: {
    IsPublic: boolean;
    PortraitImage: string;
    Title: string;
    City: string;
    Expertise: string[];
    Education: string;
    Experience: string;
    AboutMe: string;
    CourseIntro: string;
    Option1: string;
    Option2: string;
    Option3: string;
  };
}

const cityOption = cities.map((data) => {
  return { option: data.name, value: data.name };
});

const nutritionistIntroFormData: ComponentType[] = [
  {
    component: "inputSwitch",
    name: "IsPublic",
    type: "checkbox",
    required: false,
    hMsg: "公開您的介紹",
    pMsg: "在設定為公開狀態後，您才能開始接案。但即使處於未公開狀態，您仍然可為正在進行中的學員提供飲食建議。",
    labelClass: "!mt-0 lg:!mt-20",
    inputClass: "hidden",
    id: "IsPublic",
  },
  {
    component: "inputImage",
    chName: "形象照",
    name: "PortraitImage",
    type: "file",
    hMsg: "形象照*",
    pMsg: "圖片需小於 5mb",
    inputClass: "w-[294px] hidden",
    id: "PortraitImage",
    accept: "image/png, image/jpeg, image/jpg",
    Token: getCookie("Token"),
    initFileSrc: { PortraitImage: { fetch: "", file: "" } },
    errMsg: { required: commonRequiredErrMsg },
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "Title",
    type: "text",
    hMsg: "顯示名稱*",
    pMsg: "您可使用真實姓名或希望學員如何稱呼您的名字",
    inputClass: "w-[270px] lg:w-[294px]",
    errMsg: { required: commonRequiredErrMsg },
    errClass: commonErrMsgClass,
  },
  {
    component: "select",
    name: "City",
    hMsg: "所在縣市*",
    pMsg: "您所在的位置",
    selectClass: "w-[96px] z-10 relative bg-transparent",
    disabledOption: "請選擇",
    options: cityOption,
    imageClass: "bottom-12 left-[64px]",
    errMsg: { required: commonRequiredErrMsg },
    errClass: commonErrMsgClass,
  },
  {
    component: "inputButtonGroup",
    name: "Expertise",
    type: "button",
    hMsg: "專長主題*",
    pMsg: "您擅長的飲食建議主題（可複選）",
    errMsg: { required: commonRequiredErrMsg },
    errClass: commonErrMsgClass,
    ulClass: "flex flex-wrap gap-12 mt-12 text-14 font-bold",
    liClass: "w-[45%] lg:w-auto",
    selectButtonClass: "btn-cusWriteSecondary !p-10 w-[136px]",
    unSelectButtonClass: "btn-cusWritePrimary !p-10 w-[136px]",
    buttonOptions: ["體重控制", "上班族營養", "孕期營養", "樂齡營養與保健"],
  },
  {
    component: "input",
    name: "Education",
    required: false,
    hMsg: "學歷",
    pMsg: "您的營養師相關學歷",
    inputClass: "w-[270px] lg:w-[294px]",
  },
  {
    component: "textarea",
    name: "Experience",
    required: false,
    hMsg: "經歷",
    pMsg: "您的營養師相關經歷",
  },
  {
    component: "textarea",
    name: "AboutMe",
    required: false,
    hMsg: "關於我",
    pMsg: "介紹您自己，讓人更了解你",
    textareaClass: "w-full h-[137px]",
  },
  {
    component: "textarea",
    name: "CourseIntro",
    hMsg: "課程介紹*",
    pMsg: "更多詳細的課程說明",
    textareaClass: "w-full h-[137px]",
    errMsg: { required: commonRequiredErrMsg },
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "Option1",
    type: "email",
    hMsg: "聯絡方式*",
    pMsg: "與學員聯絡的方式（不會公開在營養師個人介紹頁面，僅提供給購買課程之學員）",
    labelClass: "relative",
    inputClass: "w-full pl-[62px]",
    children: <p className="absolute bottom-8 left-12">Email</p>,
    errMsg: {
      required: commonRequiredErrMsg,
      pattern: {
        value: commonEmailPattern,
        message: "Email格式有誤",
      },
    },
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "Option2",
    type: "number",
    labelClass: "!mt-0 relative",
    inputClass: "w-full pl-[62px]",
    children: <p className="absolute bottom-8 left-12">手機</p>,
    errMsg: {
      required: commonRequiredErrMsg,
      pattern: {
        value: commonPhonePattern,
        message: "手機號碼格式有誤",
      },
    },
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "Option3",
    type: "text",
    labelClass: "!mt-0 relative",
    inputClass: "w-full pl-[62px]",
    children: <p className="absolute bottom-8 left-12">LINE</p>,
    errMsg: { required: commonRequiredErrMsg },
    errClass: commonErrMsgClass,
  },
];

const buttonJSX = (
  <button
    type="submit"
    className="btn-cusWriteSecondary block mx-auto !py-8 w-full mt-[60px] lg:w-[278px] order-1 lg:order-2"
  >
    儲存
  </button>
);

const NutritionistIntroForm: FC<NutritionistIntroFormProps> = ({
  Token,
  renderData,
}) => {
  const dispatch = useDispatch();
  const [introPutApi] = useIntroPutApiMutation();

  const initialState = {
    IsPublic: renderData.IsPublic,
    PortraitImage: renderData.PortraitImage,
    Title: renderData.Title,
    City: renderData.City,
    Expertise: renderData.Expertise,
    Education: renderData.Education,
    Experience: renderData.Experience,
    AboutMe: renderData.AboutMe,
    CourseIntro: renderData.CourseIntro,
    Option1: renderData.Option1,
    Option2: renderData.Option2,
    Option3: renderData.Option3,
  };

  const putApiData = { Token };

  const { renderEditForm, apiReq } = useEditForm({
    initialState,
    formData: nutritionistIntroFormData,
    putApi: introPutApi,
    putApiData,
    buttonJSX,
  });

  if (apiReq) {
    const message = apiReq.Message || apiReq.data.Message;
    dispatch(showModal(["showTimerModal", { message, timer: 3000 }]));
  }

  return (
    <div className="text-left flex flex-col cusDashboardInnerContainer mt-32 p-20">
      <ul>{renderEditForm}</ul>
    </div>
  );
};

export default NutritionistIntroForm;
