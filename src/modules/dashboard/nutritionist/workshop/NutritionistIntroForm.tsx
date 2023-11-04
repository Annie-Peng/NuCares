import Image from "next/image";
import { ComponentType } from "@/types/interface";
import cities from "@/common/lib/dashboard/cities";
import Input from "@/common/components/Input";
import Select from "@/common/components/Select";
import Textarea from "@/common/components/Textarea";

const cityOption = cities.map((data) => {
  return { option: data.name, value: data.name };
});

const nutritionistIntroFormData: ComponentType[] = [
  // {
  //   component: "input",
  //   name: "IsPublic",
  //   type: "checkbox",
  //   required: true,
  //   hMsg: "公開您的介紹*",
  //   pMsg: "在設定為公開狀態後，您才能開始接案。但即使處於未公開狀態，您仍然可為正在進行中的學員提供飲食建議。",
  //   labelClass:
  //     "block border rounded-l-50 rounded-r-50 w-[41px] h-[22px] cusSwitch relative",
  //   id: "IsPublic",
  //   inputClass: "hidden",
  // },
  {
    component: "input",
    name: "PortraitImage",
    type: "file",
    required: true,
    hMsg: "形象照*",
    pMsg: "圖片需小於 3mb",
    inputClass: "w-[294px] hidden",
    id: "PortraitImage",
    accept: "image/png, image/jpeg, image/jpg",
    children: (
      <Image
        src="/images/uploadPhoto.svg"
        width={220}
        height={275}
        alt="photo"
        className="mt-12"
      />
    ),
  },
  {
    component: "input",
    name: "Title",
    type: "text",
    required: true,
    hMsg: "顯示名稱*",
    pMsg: "您可使用真實姓名或希望學員如何稱呼您的名字",
    inputClass: "w-[294px]",
  },
  {
    component: "select",
    name: "City",
    required: true,
    hMsg: "所在縣市*",
    pMsg: "您所在的位置",
    selectClass: "w-[96px] z-10 relative bg-transparent",
    disabledOption: "請選擇",
    options: cityOption,
    imageClass: "bottom-12 left-[64px]",
  },
  // {
  //   component: "input",
  //   name: "Expertise",
  //   required: true,
  //   hMsg: "專長主題*",
  //   pMsg: "您擅長的飲食建議主題（可複選）",
  //   children: <></>,
  // },
  {
    component: "input",
    name: "Education",
    required: false,
    hMsg: "學歷",
    pMsg: "您的營養師相關學歷",
    inputClass: "w-[294px]",
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
    required: true,
    hMsg: "課程介紹*",
    pMsg: "更多詳細的課程說明",
    textareaClass: "w-full h-[137px]",
  },
];

const NutritionistIntroForm = () => {
  return (
    <form className="text-left flex flex-col cusDashboardInnerContainer">
      <ul>
        <li>
          <h4 className="formHead">公開您的介紹</h4>
          <p className="formContent">
            在設定為公開狀態後，您才能開始接案。但即使處於未公開狀態，您仍然可為正在進行中的學員提供飲食建議。
          </p>
          <div className="flex relative mt-12">
            <label
              htmlFor="IsPublic"
              className="block border border-primary-500 rounded-l-50 rounded-r-50 w-[41px] h-[22px] cusSwitch relative"
            />
            <input type="checkbox" id="IsPublic" className="hidden" />
            <span className="ms-4">公開</span>
          </div>
        </li>
        {nutritionistIntroFormData.map((data, index) => (
          <li key={index}>
            {data.component === "input" && (
              <Input
                name={data.name}
                type={data.type || "text"}
                labelClass={data.labelClass}
                inputClass={data.inputClass}
                required={data.required}
                hMsg={data.hMsg}
                pMsg={data.pMsg}
                id={data.id}
                accept={data.accept}
              >
                {data.children}
              </Input>
            )}
            {data.component === "select" && (
              <Select
                name={data.name}
                required={data.required}
                hMsg={data.hMsg}
                pMsg={data.pMsg}
                selectClass={data.selectClass}
                disabledOption={data.disabledOption || "請選擇"}
                options={data.options || []}
                imageClass={data.imageClass}
              />
            )}
            {data.component === "textarea" && (
              <Textarea
                name={data.name}
                labelClass={data.labelClass}
                textareaClass={data.textareaClass}
                required={data.required}
                hMsg={data.hMsg}
                pMsg={data.pMsg}
              />
            )}
          </li>
        ))}
      </ul>
      <div className="text-center mt-[60px]">
        <button type="button" className="btn-cusWritePrimary !py-8 w-[278px]">
          放棄變更
        </button>
        <button
          type="submit"
          className="btn-cusWriteSecondary !py-8 w-[278px] ml-10"
        >
          儲存
        </button>
      </div>
    </form>
  );
};

export default NutritionistIntroForm;

{
  /* <label htmlFor="strength">
        <h4 className="font-bold">專長主題*</h4>
        <p>您擅長的飲食建議之主題，點選主題按鈕進行設定</p>
        <ul className="flex gap-10">
          <li>
            <input
              type="button"
              name="strength"
              value="體重控制"
              className="cusActiveTags"
            />
          </li>
          <li>
            <input
              type="button"
              name="strength"
              value="上班族營養"
              className="cusActiveTags"
            />
          </li>
          <li>
            <input
              type="button"
              name="strength"
              value="孕期營養"
              className="cusActiveTags"
            />
          </li>
          <li>
            <input
              type="button"
              name="strength"
              value="樂齡營養與保健"
              className="cusActiveTags"
            />
          </li>
        </ul>
      </label> */
}
