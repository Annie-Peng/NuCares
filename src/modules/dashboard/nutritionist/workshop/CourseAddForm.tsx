import Input from "@/common/components/Input";
import Select from "@/common/components/Select";
import Textarea from "@/common/components/Textarea";
import { FC, Fragment, ReactNode } from "react";
import { ComponentType } from "@/types/interface";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import {
  commonErrMsgClass,
  commonRequiredErrMsg,
} from "@/common/lib/dashboard/errMsg/commonErrMsg";
import { usePlanPostApiMutation } from "@/common/redux/service/plan";

export const courseAddFormData: ComponentType[] = [
  {
    component: "input",
    name: "Rank",
    type: "text",
    hMsg: "排列順序*",
    pMsg: "課程方案在營養師個人介紹頁面上的排列",
    labelClass: "mt-0",
    inputClass: "w-[64px]",
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "CourseName",
    type: "text",
    hMsg: "課程名稱*",
    pMsg: "限18字元，超過之字無法顯示",
    inputClass: "w-[294px]",
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "CourseWeek",
    type: "number",
    hMsg: "週數*",
    pMsg: "與學員諮詢的週數",
    inputClass: "w-[64px]",
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "CoursePrice",
    type: "text",
    hMsg: "價格*",
    pMsg: "課程總價",
    labelClass: "relative",
    inputClass: "pl-[48px]",
    children: <p className="absolute left-12 bottom-8">NT$</p>,
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
  {
    component: "select",
    name: "Tag",
    hMsg: "標籤*",
    pMsg: "在課程方案列表上放上標籤，吸引注意",
    selectClass: "w-[112px] z-10 relative bg-transparent",
    disabledOption: "請選擇",
    options: [
      { option: "入門首選", value: "入門首選" },
      { option: "最超值", value: "最超值" },
      { option: "無", value: "無" },
    ],
    imageClass: "bottom-12 left-[80px]",
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
  {
    component: "textarea",
    name: "Detail",
    hMsg: "課程說明*",
    pMsg: "限100字，超過之字無法顯示",
    textareaClass: "w-full h-[137px]",
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
];

interface CourseAddFormProps {
  courseForms: Array<ReactNode>;
  Token: string;
  formKey: string;
  handleDeleteClick: (formKey: string) => void;
}

export interface FormInput {
  Rank: string;
  CourseName: string;
  CourseWeek: string;
  CoursePrice: string;
  Tag: string;
  Detail: string;
}

const CourseAddForm: FC<CourseAddFormProps> = ({
  courseForms,
  Token,
  formKey,
  handleDeleteClick,
}) => {
  const { control, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      Rank: "",
      CourseName: "",
      CourseWeek: "",
      CoursePrice: "",
      Tag: "",
      Detail: "",
    },
    criteriaMode: "all",
  });

  const [planPostApi] = usePlanPostApiMutation();

  const onSubmit: SubmitHandler<FormInput> = async (body) => {
    try {
      const result = await planPostApi({ Token, body }).unwrap();
      console.log(result);
      handleDeleteClick(formKey);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {courseAddFormData.map((data, index) => (
        <Fragment key={index}>
          <Controller
            control={control}
            name={data.name as keyof FormInput}
            rules={{
              required: data.errMsg,
            }}
            render={({ field, fieldState: { invalid, error } }) => (
              <>
                {data.component === "input" && (
                  <Input
                    {...field}
                    name={data.name}
                    type={data.type || "text"}
                    labelClass={data.labelClass}
                    inputClass={data.inputClass}
                    required={data.required}
                    hMsg={data.hMsg}
                    pMsg={data.pMsg}
                    error={invalid}
                    errClass={data.errClass}
                    errMsg={data.errMsg}
                  >
                    {data.children}
                  </Input>
                )}
                {data.component === "select" && (
                  <Select
                    {...field}
                    name={data.name}
                    required={data.required}
                    hMsg={data.hMsg}
                    pMsg={data.pMsg}
                    selectClass={data.selectClass}
                    disabledOption={data.disabledOption || "請選擇"}
                    options={data.options || []}
                    imageClass={data.imageClass}
                    error={invalid}
                    errClass={data.errClass}
                    errMsg={data.errMsg}
                  />
                )}
                {data.component === "textarea" && (
                  <Textarea
                    {...field}
                    name={data.name}
                    labelClass={data.labelClass}
                    textareaClass={data.textareaClass}
                    required={data.required}
                    hMsg={data.hMsg}
                    pMsg={data.pMsg}
                    error={invalid}
                    errClass={data.errClass}
                    errMsg={data.errMsg}
                  />
                )}
              </>
            )}
          />
        </Fragment>
      ))}
      <div className="text-center mt-[60px] flex flex-col gap-10 justify-center items-center lg:flex-row">
        <button
          type="button"
          className="btn-cusWritePrimary !py-8 w-full lg:w-[278px] order-2 lg:order-1"
          onClick={() => handleDeleteClick(formKey)}
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

export default CourseAddForm;
