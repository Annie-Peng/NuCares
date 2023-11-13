import { ComponentType } from "@/types/interface";
import Input from "@/common/components/Input";
import Select from "@/common/components/Select";
import {
  commonErrMsgClass,
  commonRequiredErrMsg,
} from "@/common/lib/dashboard/errMsg/commonErrMsg";
import { getCookie } from "cookies-next";

const studentInfoFormData: ComponentType[] = [
  {
    component: "inputImage",
    chName: "會員顯示圖",
    name: "ImgUrl",
    type: "file",
    hMsg: "會員顯示圖*",
    pMsg: "圖片需小於 3mb",
    inputClass: "w-[294px] hidden",
    labelClass: "mt-0",
    id: "ImgUrl",
    accept: "image/png, image/jpeg, image/jpg",
    Token: getCookie("Token"),
    initFileSrc: { ImgUrl: { fetch: "", file: "" } },
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "UserName",
    type: "text",
    hMsg: "姓名*",
    pMsg: "請輸入欲顯示的姓名或暱稱",
    inputClass: "w-[250px]",
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "Email",
    type: "text",
    hMsg: "信箱*",
    pMsg: "此為註冊之帳號，不可更改",
    disabled: true,
    inputClass: "w-[250px] btn-cusDisableWriteBlack !py-8 !px-12",
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
  {
    component: "select",
    name: "Gender",
    hMsg: "生理性別*",
    pMsg: "請選擇與身分證上相同的性別，",
    children: (
      <p className="formContent">因營養師需依據身理性別計算身體所需營養</p>
    ),
    selectClass: "w-[96px] z-10 relative bg-transparent",
    disabledOption: "請選擇",
    options: [
      { option: "男", value: "male" },
      { option: "女", value: "female" },
    ],
    imageClass: "bottom-12 left-[64px]",
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "Phone",
    type: "number",
    hMsg: "手機*",
    pMsg: "請填寫您的手機號碼",
    inputClass: "w-[250px]",
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
];

const StudentInfoForm = () => {
  return (
    <form className="text-left flex flex-col cusDashboardInnerContainer mt-32">
      <ul>
        {studentInfoFormData.map((data, index) => (
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
                disabled={data.disabled}
              >
                {data.children}
              </Input>
            )}
            {data.component === "select" && (
              <Select
                name={data.name}
                required={data.required}
                hMsg={data.hMsg}
                pMsg={data.pMsg as string}
                selectClass={data.selectClass}
                disabledOption={data.disabledOption || "請選擇"}
                options={data.options || []}
                imageClass={data.imageClass}
              >
                {data.children}
              </Select>
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

export default StudentInfoForm;
