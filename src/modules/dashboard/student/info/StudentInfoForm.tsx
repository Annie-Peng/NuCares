import { ComponentType } from "@/types/interface";
import {
  commonEmailPattern,
  commonErrMsgClass,
  commonPhonePattern,
  commonRequiredErrMsg,
} from "@/common/lib/dashboard/errMsg/commonErrMsg";
import { getCookie } from "cookies-next";
import { useProfilePutApiMutation } from "@/common/redux/service/profile";
import useEditForm from "@/common/hooks/useEditForm";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@/common/redux/features/showModal";

interface StudentInfoFormProps {
  Token: string;
  renderData: {
    Birthday: string;
    Email: string;
    Gender: string;
    Id: number;
    ImgUrl: string;
    Phone: string;
    UserName: string;
  };
}

const studentInfoFormData: ComponentType[] = [
  {
    component: "inputImage",
    chName: "會員顯示圖",
    name: "ImgUrl",
    type: "file",
    required: false,
    hMsg: "會員顯示圖",
    pMsg: "圖片需小於 5mb",
    inputClass: "w-[294px] hidden",
    labelClass: "mt-0",
    id: "ImgUrl",
    accept: "image/png, image/jpeg, image/jpg",
    Token: getCookie("Token"),
    initFileSrc: { ImgUrl: { fetch: "", file: "" } },
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "UserName",
    type: "text",
    hMsg: "姓名*",
    pMsg: "請輸入欲顯示的姓名或暱稱",
    inputClass: "w-[278px]",
    errMsg: { required: commonRequiredErrMsg },
    errClass: commonErrMsgClass,
  },
  {
    component: "inputDate",
    name: "Birthday",
    type: "text",
    hMsg: "生日*",
    pMsg: "請輸入正確的日期",
    inputClass: "w-[278px]",
    errMsg: { required: commonRequiredErrMsg },
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "Email",
    type: "text",
    hMsg: "信箱*",
    pMsg: "此為註冊之帳號，不可更改",
    disabled: true,
    inputClass: "w-[278px] btn-cusDisableWriteBlack !py-8 !px-12",
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
      { option: "男", value: "男" },
      { option: "女", value: "女" },
    ],
    imageClass: "bottom-12 left-[64px]",
    errMsg: { required: commonRequiredErrMsg },
    errClass: commonErrMsgClass,
  },
  {
    component: "input",
    name: "Phone",
    type: "number",
    hMsg: "手機*",
    pMsg: "請填寫您的手機號碼",
    inputClass: "w-[278px]",
    errMsg: {
      required: commonRequiredErrMsg,
      pattern: {
        value: commonPhonePattern,
        message: "手機號碼格式有誤",
      },
    },
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

const StudentInfoForm: FC<StudentInfoFormProps> = ({ Token, renderData }) => {
  const dispatch = useDispatch();

  const [profilePutApi] = useProfilePutApiMutation();

  const initialState = {
    UserName: renderData.UserName,
    Email: renderData.Email,
    Birthday: renderData.Birthday,
    Gender: renderData.Gender,
    Phone: renderData.Phone,
    ImgUrl: renderData.ImgUrl,
  };

  const putApiData = { Token };

  const { renderEditForm, apiReq } = useEditForm({
    initialState,
    formData: studentInfoFormData,
    putApi: profilePutApi,
    putApiData,
    buttonJSX,
  });

  if (apiReq) {
    const message = apiReq.Message || apiReq.data.Message;
    dispatch(showModal(["showTimerModal", { message, timer: 3000 }]));
  }

  return (
    <div className="text-left flex flex-col cusDashboardInnerContainer mt-32">
      <ul>{renderEditForm}</ul>
    </div>
  );
};

export default StudentInfoForm;
