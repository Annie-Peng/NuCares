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
    inputClass: "w-[270px] lg:w-[294px]",
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
  {
    component: "input",
    name: "Expertise",
    type: "hidden",
    required: true,
    hMsg: "專長主題*",
    pMsg: "您擅長的飲食建議主題（可複選）",
    children: (
      <ul className="flex flex-wrap gap-12 mt-12 text-14 font-bold">
        <li className="w-[45%] lg:w-auto">
          <input
            type="button"
            value="體重控制"
            className="btn-cusWritePrimary !p-10 w-full"
          />
        </li>
        <li className="w-[45%] lg:w-auto">
          <input
            type="button"
            value="上班族營養"
            className="btn-cusWritePrimary !p-10 w-full"
          />
        </li>
        <li className="w-[45%] lg:w-auto">
          <input
            type="button"
            value="孕期營養"
            className="btn-cusWritePrimary !p-10 w-full"
          />
        </li>

        <li className="w-[45%] lg:w-auto">
          <input
            type="button"
            value="樂齡營養與保健"
            className="btn-cusWritePrimary !p-10 w-full"
          />
        </li>
      </ul>
    ),
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
    required: true,
    hMsg: "課程介紹*",
    pMsg: "更多詳細的課程說明",
    textareaClass: "w-full h-[137px]",
  },
  {
    component: "input",
    name: "Contact",
    type: "hidden",
    required: true,
    hMsg: "聯絡方式*",
    pMsg: "與學員聯絡的方式（不會公開在營養師個人介紹頁面，僅提供給購買課程之學員）",
    children: (
      <ul className="flex flex-wrap gap-12 mt-12">
        <li className="w-full relative">
          <input type="text" name="Email" className="w-full pl-[62px]" />
          <p className="absolute top-12 left-12">Email</p>
        </li>
        <li className="w-full relative">
          <input type="number" name="Phone" className="w-full pl-[62px]" />
          <p className="absolute top-12 left-12">手機</p>
        </li>
        <li className="w-full relative">
          <input type="text" name="Line" className="w-full pl-[62px]" />
          <p className="absolute top-12 left-12">LINE</p>
        </li>
      </ul>
    ),
  },
];

const NutritionistIntroForm = () => {
  return (
    <form className="text-left flex flex-col cusDashboardInnerContainer mt-32 p-20">
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
      <div className="text-center mt-[60px] flex flex-col gap-10 justify-center items-center lg:flex-row">
        <button
          type="button"
          className="btn-cusWritePrimary !py-8 w-full lg:w-[278px] order-2 lg:order-1"
        >
          放棄變更
        </button>
        <button
          type="submit"
          className="btn-cusWriteSecondary !py-8 w-full lg:w-[278px] order-1 lg:order-2"
        >
          儲存
        </button>
      </div>
    </form>
  );
};

export default NutritionistIntroForm;
