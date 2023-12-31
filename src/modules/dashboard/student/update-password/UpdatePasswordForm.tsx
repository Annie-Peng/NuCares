import { ComponentType, Token } from "@/types/interface";
import { FC, useEffect, useState } from "react";
import {
  commonErrMsgClass,
  commonPasswordPattern,
  commonRequiredErrMsg,
} from "@/common/lib/errMsg/commonErrMsg";
import { useDispatch } from "react-redux";
import { useUpdatePasswordPutApiMutation } from "@/common/redux/service/updatePassword";
import useEditForm from "@/common/hooks/useEditForm";
import { showModal } from "@/common/redux/features/showModal";

interface UpdatePasswordFormProps {
  Token: Token;
}

interface ShowPasswordType {
  OldPassword: boolean;
  Password: boolean;
  RePassword: boolean;
}

const passwordCloseIconClass =
  "bg-eyeCloseIcon bottom-0 right-12 -translate-y-[60%] block absolute content-[''] w-20 h-20 lg:right-0 lg:left-[328px]";

const passwordOpenIconClass =
  "bg-eyeOpenIcon bottom-0 right-12 -translate-y-[55%] block absolute content-[''] w-20 h-20 lg:right-0 lg:left-[328px]";

const updatePasswordData: Array<
  ComponentType & { name: keyof ShowPasswordType }
> = [
  {
    component: "input",
    name: "OldPassword",
    type: "password",
    hMsg: "舊密碼*",
    labelClass: "relative !mt-0 lg:!mt-20",
    inputClass: "w-full lg:w-[360px]",
    errMsg: {
      required: commonRequiredErrMsg,
      pattern: { value: commonPasswordPattern, message: "密碼格式有誤" },
    },
    errClass: commonErrMsgClass,
    children: <div className={passwordCloseIconClass} />,
  },
  {
    component: "input",
    name: "Password",
    type: "password",
    hMsg: "新密碼*",
    pMsg: "請輸入6-12字元英數組合",
    labelClass: "relative",
    inputClass: "w-full lg:w-[360px]",
    errMsg: {
      required: commonRequiredErrMsg,
      pattern: { value: commonPasswordPattern, message: "密碼格式有誤" },
    },
    errClass: commonErrMsgClass,
    children: <div className={passwordCloseIconClass} />,
  },
  {
    component: "input",
    name: "RePassword",
    type: "password",
    hMsg: "再輸入一次新密碼*",
    pMsg: "請輸入6-12字元英數組合",
    labelClass: "relative",
    inputClass: "w-full lg:w-[360px]",
    errMsg: {
      required: commonRequiredErrMsg,
      pattern: { value: commonPasswordPattern, message: "密碼格式有誤" },
      validate: (value, formValues) =>
        value === formValues.Password || "您輸入的密碼不一致",
    },
    errClass: commonErrMsgClass,
    children: <div className={passwordCloseIconClass} />,
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

const UpdatePasswordForm: FC<UpdatePasswordFormProps> = ({ Token }) => {
  const [showPassword, setShowPassword] = useState<ShowPasswordType>({
    OldPassword: false,
    Password: false,
    RePassword: false,
  });

  const newUpdatePasswordData = updatePasswordData.map((data) => {
    const showPasswordDataName = data.name;
    const newType = showPassword[showPasswordDataName] ? "text" : "password";

    const newChildren = (
      <button
        type="button"
        onClick={() =>
          setShowPassword({
            ...showPassword,
            [data.name]: !showPassword[showPasswordDataName],
          })
        }
      >
        {showPassword[showPasswordDataName] ? (
          <div className={passwordOpenIconClass} />
        ) : (
          data.children
        )}
      </button>
    );
    return {
      ...data,
      type: newType,
      children: newChildren,
    };
  });

  const dispatch = useDispatch();
  const [updatePasswordPutApi] = useUpdatePasswordPutApiMutation();

  const initialState = {
    OldPassword: "",
    Password: "",
    RePassword: "",
  };

  const { renderEditForm, apiReq } = useEditForm({
    initialState,
    formData: newUpdatePasswordData,
    putApi: updatePasswordPutApi,
    putApiData: Token,
    buttonJSX,
  });

  useEffect(() => {
    if (apiReq) {
      const message = apiReq.Message || apiReq.data.Message;
      dispatch(showModal(["showTimerModal", { message, timer: 3000 }]));
    }
  }, [apiReq, dispatch]);

  return (
    <div className="container text-left flex flex-col cusDashboardInnerContainer mt-32 p-20">
      <ul>{renderEditForm}</ul>
    </div>
  );
};

export default UpdatePasswordForm;
