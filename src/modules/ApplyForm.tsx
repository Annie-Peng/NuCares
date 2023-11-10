import useEditForm from "@/common/hooks/useEditForm";
import { useApplyPostApiMutation } from "@/common/redux/service/apply";
import { ComponentType } from "@/types/interface";
import {
  commonErrMsgClass,
  commonRequiredErrMsg,
} from "@/common/lib/dashboard/errMsg/commonErrMsg";
import { getCookie } from "cookies-next";
import { FC } from "react";

interface ApplyFormProps {
  Token: string;
}

const ApplyFormData: ComponentType[] = [
  {
    component: "input",
    name: "UserName",
    type: "text",
    hMsg: "真實姓名*",
    pMsg: "請填寫身份證上的姓名",
    inputClass: "w-full",
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
  {
    component: "select",
    name: "Gender",
    hMsg: "生理性別*",
    pMsg: "請填寫身份證性別，",
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
    component: "inputImage",
    chName: "營養師證照",
    name: "CertificateImage",
    type: "file",
    hMsg: "營養師證照*",
    pMsg: "請上傳您的營養師證照供平台審核",
    inputClass: "w-[294px] hidden",
    id: "CertificateImage",
    accept: "image/png, image/jpeg, image/jpg",
    Token: getCookie("Token"),
    initFileSrc: { CertificateImage: { fetch: "", file: "" } },
    errMsg: commonRequiredErrMsg,
    errClass: commonErrMsgClass,
  },
];

const ApplyForm: FC<ApplyFormProps> = ({ Token }) => {
  const putApiData = { Token };

  const [applyPostApi] = useApplyPostApiMutation();

  const initialState = {
    UserName: "",
    Gender: "",
    CertificateImage: "",
  };

  const { renderEditForm } = useEditForm({
    initialState,
    formData: ApplyFormData,
    putApi: applyPostApi,
    putApiData,
  });

  return (
    <div className="text-left flex flex-col max-w-[856px] mx-auto p-24 rounded-20 cusBackgroundBackdrop !relative">
      <h3 className="cusPrimaryTitle">申請成為平台營養師</h3>
      <div className="cusDashboardInnerContainer">
        <div className="max-w-[306px] mx-auto">{renderEditForm}</div>
      </div>
    </div>
  );
};
export default ApplyForm;
