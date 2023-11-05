import Input, { InputType } from "@/common/components/Input";
import Select from "@/common/components/Select";
import Textarea from "@/common/components/Textarea";
import { Fragment, ReactNode } from "react";
import { ComponentType } from "@/types/interface";

const courseAddFormData: ComponentType[] = [
  {
    component: "input",
    name: "Rank",
    type: "text",
    required: true,
    hMsg: "排列順序",
    pMsg: "課程方案在營養師個人介紹頁面上的排列",
    labelClass: "mt-0",
    inputClass: "w-[64px]",
  },
  {
    component: "input",
    name: "CourseWeek",
    type: "text",
    required: true,
    hMsg: "課程名稱",
    pMsg: "限18字元，超過之字無法顯示",
    inputClass: "w-[294px]",
  },
  {
    component: "input",
    name: "CoursePrice",
    type: "text",
    required: true,
    hMsg: "價格",
    pMsg: "課程總價",
    labelClass: "relative",
    inputClass: "pl-[48px]",
    children: <p className="absolute left-12 bottom-8">NT$</p>,
  },
  {
    component: "select",
    name: "Tag",
    required: true,
    hMsg: "標籤",
    pMsg: "在課程方案列表上放上標籤，吸引注意",
    selectClass: "w-[112px] z-10 relative bg-transparent",
    disabledOption: "請選擇",
    options: [
      { option: "入門首選", value: "入門首選" },
      { option: "最超值", value: "最超值" },
    ],
    imageClass: "bottom-12 left-[80px]",
  },
  {
    component: "textarea",
    name: "Detail",
    required: true,
    hMsg: "課程說明",
    pMsg: "限100字，超過之字無法顯示",
    textareaClass: "w-full h-[137px]",
  },
];

const CourseAddForm = () => {
  return (
    <>
      {courseAddFormData.map((data, index) => (
        <Fragment key={index}>
          {data.component === "input" && (
            <Input
              name={data.name}
              type={data.type || "text"}
              labelClass={data.labelClass}
              inputClass={data.inputClass}
              required={data.required}
              hMsg={data.hMsg}
              pMsg={data.pMsg}
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
        </Fragment>
      ))}
    </>
  );
};

export default CourseAddForm;
